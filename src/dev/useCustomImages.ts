import { useCallback, useEffect, useState } from 'react';
import { DEV_KEY } from './devKey';

/**
 * Loads and persists per-page custom illustration overrides through the server API
 * (server/index.js), which writes the files to disk. Unlike localStorage, this makes a saved
 * image part of the deployed book for every visitor/device — it survives clearing site data.
 */
export function useCustomImages() {
  const [images, setImages] = useState<Record<string, string>>({});

  useEffect(() => {
    let cancelled = false;
    fetch('/api/images')
      .then((res) => (res.ok ? (res.json() as Promise<Record<string, string>>) : {}))
      .then((data) => {
        if (!cancelled) setImages(data);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const saveImage = useCallback(async (id: string, dataUrl: string) => {
    const res = await fetch(`/api/images/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-dev-key': DEV_KEY },
      body: JSON.stringify({ dataUrl }),
    });
    if (!res.ok) throw new Error('No se pudo guardar la imagen');
    const { url } = (await res.json()) as { url: string };
    setImages((prev) => ({ ...prev, [id]: url }));
  }, []);

  const removeImage = useCallback(async (id: string) => {
    const res = await fetch(`/api/images/${id}`, {
      method: 'DELETE',
      headers: { 'x-dev-key': DEV_KEY },
    });
    if (!res.ok) throw new Error('No se pudo quitar la imagen');
    setImages((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }, []);

  return { images, saveImage, removeImage };
}
