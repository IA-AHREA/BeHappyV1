import { useCallback, useRef, useState } from 'react';

const STORAGE_KEY = 'behappy_custom_images';

function loadImages(): Record<string, string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

/**
 * Persists per-page custom illustration overrides (dev mode) in localStorage, keyed by page id.
 * saveImage/removeImage let localStorage.setItem's quota error propagate so the caller can react.
 */
export function useCustomImages() {
  const [images, setImages] = useState<Record<string, string>>(loadImages);
  const imagesRef = useRef(images);
  imagesRef.current = images;

  const saveImage = useCallback((id: string, dataUrl: string) => {
    const next = { ...imagesRef.current, [id]: dataUrl };
    setImages(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }, []);

  const removeImage = useCallback((id: string) => {
    const next = { ...imagesRef.current };
    delete next[id];
    setImages(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }, []);

  return { images, saveImage, removeImage };
}
