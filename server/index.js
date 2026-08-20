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

// Symbolic gate matching src/dev/devKey.ts — not real auth, just keeps casual visitors from
// hitting the write endpoints directly. Override in Railway if you want a different value.
const DEV_KEY = process.env.DEV_KEY || 'vknt';
const PORT = process.env.PORT || 8787;
const MAX_IMAGE_BYTES = 8 * 1024 * 1024;

const PAGE_ID_RE = /^[a-z0-9_-]+$/i;
const DATA_URL_RE = /^data:image\/(png|jpe?g|webp);base64,(.+)$/;

async function readManifest() {
  try {
    return JSON.parse(await fs.readFile(MANIFEST_PATH, 'utf-8'));
  } catch {
    return {};
  }
}

async function writeManifest(manifest) {
  await fs.writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
}

function requireDevKey(req, res, next) {
  if (req.get('x-dev-key') !== DEV_KEY) {
    res.status(401).json({ error: 'unauthorized' });
    return;
  }
  next();
}

await fs.mkdir(UPLOADS_DIR, { recursive: true });

const app = express();
app.use(express.json({ limit: '10mb' }));

app.get('/api/images', async (_req, res) => {
  const manifest = await readManifest();
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

  const manifest = await readManifest();
  const previousFilename = manifest[id];
  const filename = `${id}-${Date.now()}.jpg`;
  await fs.writeFile(path.join(UPLOADS_DIR, filename), buffer);
  manifest[id] = filename;
  await writeManifest(manifest);

  if (previousFilename && previousFilename !== filename) {
    fs.unlink(path.join(UPLOADS_DIR, previousFilename)).catch(() => {});
  }

  res.json({ url: `/uploads/${filename}` });
});

app.delete('/api/images/:id', requireDevKey, async (req, res) => {
  const { id } = req.params;
  const manifest = await readManifest();
  const filename = manifest[id];
  if (filename) {
    delete manifest[id];
    await writeManifest(manifest);
    fs.unlink(path.join(UPLOADS_DIR, filename)).catch(() => {});
  }
  res.json({ ok: true });
});

app.use('/uploads', express.static(UPLOADS_DIR, { maxAge: '30d', immutable: true }));
app.use(express.static(DIST_DIR));

// A path-less middleware (rather than app.get('*', ...)) matches any route regardless of the
// Express major version's wildcard syntax — this is the SPA fallback for direct URL loads.
app.use((_req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT} (datos en ${DATA_DIR})`);
});
