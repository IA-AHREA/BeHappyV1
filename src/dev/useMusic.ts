import { useCallback, useEffect, useState } from 'react';
import { DEV_KEY } from './devKey';

/** Loads and persists the book's single background song through the server API (server/index.js), same pattern as useCustomImages. */
export function useMusic() {
  const [musicUrl, setMusicUrl] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/music')
      .then((res) => (res.ok ? (res.json() as Promise<{ url: string | null }>) : { url: null }))
      .then(({ url }) => {
        if (!cancelled) setMusicUrl(url);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const saveMusic = useCallback(async (dataUrl: string) => {
    const res = await fetch('/api/music', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-dev-key': DEV_KEY },
      body: JSON.stringify({ dataUrl }),
    });
    if (!res.ok) throw new Error('No se pudo guardar la canción');
    const { url } = (await res.json()) as { url: string };
    setMusicUrl(url);
  }, []);

  const removeMusic = useCallback(async () => {
    const res = await fetch('/api/music', { method: 'DELETE', headers: { 'x-dev-key': DEV_KEY } });
    if (!res.ok) throw new Error('No se pudo quitar la canción');
    setMusicUrl(null);
  }, []);

  return { musicUrl, saveMusic, removeMusic };
}
