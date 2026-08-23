import express from 'express';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs/promises';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT, 'dist');

// DATA_DIR must point at a persistent disk in production (a Railway Volume) — the container's
// own filesystem is wiped on every redeploy, so without a mounted volume this still resets.
const DATA_DIR = process.env.DATA_DIR ? path.resolve(process.env.DATA_DIR) : path.join(ROOT, 'data');
const UPLOADS_DIR = path.join(DATA_DIR, 'uploads');
const MANIFEST_PATH = path.join(DATA_DIR, 'manifest.json');
const PAGES_PATH = path.join(DATA_DIR, 'pages.json');
const MUSIC_DIR = path.join(DATA_DIR, 'music');
const MUSIC_CONFIG_PATH = path.join(DATA_DIR, 'music.json');

// Symbolic gate matching src/dev/devKey.ts — not real auth, just keeps casual visitors from
// hitting the write endpoints directly. Override in Railway if you want a different value.
const DEV_KEY = process.env.DEV_KEY || 'vknt';
const PORT = process.env.PORT || 8787;
const MAX_IMAGE_BYTES = 8 * 1024 * 1024;
const MAX_AUDIO_BYTES = 15 * 1024 * 1024;
const MAX_PHRASE_LENGTH = 200;

const PAGE_ID_RE = /^[a-z0-9_-]+$/i;
const DATA_URL_RE = /^data:image\/(png|jpe?g|webp);base64,(.+)$/;
const AUDIO_DATA_URL_RE = /^data:audio\/([a-z0-9.+-]+);base64,(.+)$/i;

async function readJson(filePath, fallback) {
  try {
    return JSON.parse(await fs.readFile(filePath, 'utf-8'));
  } catch {
    return fallback;
  }
}

async function writeJson(filePath, value) {
  await fs.writeFile(filePath, JSON.stringify(value, null, 2));
}

function requireDevKey(req, res, next) {
  if (req.get('x-dev-key') !== DEV_KEY) {
    res.status(401).json({ error: 'unauthorized' });
    return;
  }
  next();
}

async function deleteImage(id) {
  const manifest = await readJson(MANIFEST_PATH, {});
  const filename = manifest[id];
  if (!filename) return;
  delete manifest[id];
  await writeJson(MANIFEST_PATH, manifest);
  fs.unlink(path.join(UPLOADS_DIR, filename)).catch(() => {});
}

// Pages config layers on top of the client's built-in 31 pages (src/data/pages.ts), which stay
// the source of truth for ids/phrases/illustrations. This file only stores *edits*: phrase
// overrides, brand-new pages (no built-in illustration — must rely on a custom image), and ids
// of built-in pages hidden from the book. That way clearing this file just restores the original
// book instead of leaving it blank.
const DEFAULT_PAGES_CONFIG = { phraseOverrides: {}, customPages: [], removedIds: [] };

// Maps a data URL's audio subtype (from the browser's File.type) to a plain file extension.
function extensionForAudioType(subtype) {
  const normalized = subtype.toLowerCase();
  if (normalized === 'mpeg' || normalized === 'mp3') return 'mp3';
  if (normalized === 'x-m4a' || normalized === 'mp4' || normalized === 'aac') return 'm4a';
  if (normalized === 'wav' || normalized === 'x-wav') return 'wav';
  if (normalized === 'ogg') return 'ogg';
  return 'audio';
}

await fs.mkdir(UPLOADS_DIR, { recursive: true });
await fs.mkdir(MUSIC_DIR, { recursive: true });

const app = express();
// Audio files are much bigger than the compressed JPEGs the image endpoint handles, and base64
// adds ~33% overhead on top of that, hence the higher limit here vs. a plain image upload.
app.use(express.json({ limit: '25mb' }));

app.get('/api/images', async (_req, res) => {
  const manifest = await readJson(MANIFEST_PATH, {});
  const images = Object.fromEntries(Object.entries(manifest).map(([id, filename]) => [id, `/uploads/${filename}`]));
  res.json(images);
});

app.post('/api/images/:id', requireDevKey, async (req, res) => {
  const { id } = req.params;
  if (!PAGE_ID_RE.test(id)) {
    res.status(400).json({ error: 'invalid page id' });
    return;
  }

  const match = typeof req.body?.dataUrl === 'string' && req.body.dataUrl.match(DATA_URL_RE);
  if (!match) {
    res.status(400).json({ error: 'invalid image data' });
    return;
  }
  const buffer = Buffer.from(match[2], 'base64');
  if (buffer.length > MAX_IMAGE_BYTES) {
    res.status(413).json({ error: 'image too large' });
    return;
  }

  const manifest = await readJson(MANIFEST_PATH, {});
  const previousFilename = manifest[id];
  const filename = `${id}-${Date.now()}.jpg`;
  await fs.writeFile(path.join(UPLOADS_DIR, filename), buffer);
  manifest[id] = filename;
  await writeJson(MANIFEST_PATH, manifest);

  if (previousFilename && previousFilename !== filename) {
    fs.unlink(path.join(UPLOADS_DIR, previousFilename)).catch(() => {});
  }

  res.json({ url: `/uploads/${filename}` });
});

app.delete('/api/images/:id', requireDevKey, async (req, res) => {
  await deleteImage(req.params.id);
  res.json({ ok: true });
});

app.get('/api/pages', async (_req, res) => {
  res.json(await readJson(PAGES_PATH, DEFAULT_PAGES_CONFIG));
});

app.put('/api/pages/:id', requireDevKey, async (req, res) => {
  const { id } = req.params;
  const phrase = typeof req.body?.phrase === 'string' ? req.body.phrase.trim() : '';
  if (!phrase || phrase.length > MAX_PHRASE_LENGTH) {
    res.status(400).json({ error: 'invalid phrase' });
    return;
  }

  const config = await readJson(PAGES_PATH, DEFAULT_PAGES_CONFIG);
  const customPage = config.customPages.find((page) => page.id === id);
  if (customPage) {
    customPage.phrase = phrase;
  } else {
    config.phraseOverrides[id] = phrase;
  }
  await writeJson(PAGES_PATH, config);
  res.json({ id, phrase });
});

app.post('/api/pages', requireDevKey, async (req, res) => {
  const phrase = typeof req.body?.phrase === 'string' && req.body.phrase.trim() ? req.body.phrase.trim() : 'Nueva página';
  if (phrase.length > MAX_PHRASE_LENGTH) {
    res.status(400).json({ error: 'invalid phrase' });
    return;
  }

  const config = await readJson(PAGES_PATH, DEFAULT_PAGES_CONFIG);
  const id = `custom-${Date.now()}`;
  config.customPages.push({ id, phrase });
  await writeJson(PAGES_PATH, config);
  res.json({ id, phrase });
});

app.delete('/api/pages/:id', requireDevKey, async (req, res) => {
  const { id } = req.params;
  const config = await readJson(PAGES_PATH, DEFAULT_PAGES_CONFIG);

  const customIndex = config.customPages.findIndex((page) => page.id === id);
  if (customIndex !== -1) {
    config.customPages.splice(customIndex, 1);
    await deleteImage(id);
  } else if (!config.removedIds.includes(id)) {
    config.removedIds.push(id);
  }
  delete config.phraseOverrides[id];

  await writeJson(PAGES_PATH, config);
  res.json({ ok: true });
});

app.get('/api/music', async (_req, res) => {
  const config = await readJson(MUSIC_CONFIG_PATH, null);
  res.json({ url: config ? `/music/${config.filename}` : null });
});

app.post('/api/music', requireDevKey, async (req, res) => {
  const match = typeof req.body?.dataUrl === 'string' && req.body.dataUrl.match(AUDIO_DATA_URL_RE);
  if (!match) {
    res.status(400).json({ error: 'invalid audio data' });
    return;
  }
  const buffer = Buffer.from(match[2], 'base64');
  if (buffer.length > MAX_AUDIO_BYTES) {
    res.status(413).json({ error: 'audio too large' });
    return;
  }

  const previous = await readJson(MUSIC_CONFIG_PATH, null);
  const filename = `cancion-${Date.now()}.${extensionForAudioType(match[1])}`;
  await fs.writeFile(path.join(MUSIC_DIR, filename), buffer);
  await writeJson(MUSIC_CONFIG_PATH, { filename });

  if (previous?.filename && previous.filename !== filename) {
    fs.unlink(path.join(MUSIC_DIR, previous.filename)).catch(() => {});
  }

  res.json({ url: `/music/${filename}` });
});

app.delete('/api/music', requireDevKey, async (_req, res) => {
  const previous = await readJson(MUSIC_CONFIG_PATH, null);
  if (previous?.filename) {
    fs.unlink(path.join(MUSIC_DIR, previous.filename)).catch(() => {});
  }
  await fs.unlink(MUSIC_CONFIG_PATH).catch(() => {});
  res.json({ ok: true });
});

app.use('/uploads', express.static(UPLOADS_DIR, { maxAge: '30d', immutable: true }));
app.use('/music', express.static(MUSIC_DIR, { maxAge: '30d', immutable: true }));
app.use(express.static(DIST_DIR));

// A path-less middleware (rather than app.get('*', ...)) matches any route regardless of the
// Express major version's wildcard syntax — this is the SPA fallback for direct URL loads.
app.use((_req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT} (datos en ${DATA_DIR})`);
});
