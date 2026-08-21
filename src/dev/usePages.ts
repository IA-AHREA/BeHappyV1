import { useCallback, useEffect, useMemo, useState } from 'react';
import { DEFAULT_PAGES } from '../data/pages';
import type { BookPage } from '../data/pages';
import { DEV_KEY } from './devKey';

interface PagesConfig {
  phraseOverrides: Record<string, string>;
  customPages: { id: string; phrase: string }[];
  removedIds: string[];
}

const EMPTY_CONFIG: PagesConfig = { phraseOverrides: {}, customPages: [], removedIds: [] };

/**
 * Loads dev-mode edits to the book's page list from the server (server/index.js) and merges them
 * with the 31 built-in pages: phrase overrides, brand-new pages (no illustration of their own —
 * they need a custom image), and pages hidden from the book. Persists edits the same way
 * useCustomImages does, so they're part of the deployed book for every visitor.
 */
export function usePages() {
  const [config, setConfig] = useState<PagesConfig>(EMPTY_CONFIG);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/pages')
      .then((res) => (res.ok ? (res.json() as Promise<PagesConfig>) : EMPTY_CONFIG))
      .then((data) => {
        if (!cancelled) setConfig(data);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const pages = useMemo<BookPage[]>(() => {
    const builtin = DEFAULT_PAGES.filter((page) => !config.removedIds.includes(page.id)).map((page) => ({
      ...page,
      phrase: config.phraseOverrides[page.id] ?? page.phrase,
    }));
    const custom = config.customPages.map((page) => ({ id: page.id, phrase: page.phrase }));
    return [...builtin, ...custom];
  }, [config]);

  const editPhrase = useCallback(async (id: string, phrase: string) => {
    const res = await fetch(`/api/pages/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'x-dev-key': DEV_KEY },
      body: JSON.stringify({ phrase }),
    });
    if (!res.ok) throw new Error('No se pudo guardar el texto');
    setConfig((prev) => {
      const customIndex = prev.customPages.findIndex((page) => page.id === id);
      if (customIndex !== -1) {
        const customPages = [...prev.customPages];
        customPages[customIndex] = { ...customPages[customIndex], phrase };
        return { ...prev, customPages };
      }
      return { ...prev, phraseOverrides: { ...prev.phraseOverrides, [id]: phrase } };
    });
  }, []);

  const addPage = useCallback(async () => {
    const res = await fetch('/api/pages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-dev-key': DEV_KEY },
      body: JSON.stringify({ phrase: 'Nueva página' }),
    });
    if (!res.ok) throw new Error('No se pudo agregar la página');
    const created = (await res.json()) as { id: string; phrase: string };
    setConfig((prev) => ({ ...prev, customPages: [...prev.customPages, created] }));
    return created;
  }, []);

  const removePage = useCallback(async (id: string) => {
    const res = await fetch(`/api/pages/${id}`, {
      method: 'DELETE',
      headers: { 'x-dev-key': DEV_KEY },
    });
    if (!res.ok) throw new Error('No se pudo eliminar la página');
    setConfig((prev) => ({
      ...prev,
      customPages: prev.customPages.filter((page) => page.id !== id),
      removedIds: prev.removedIds.includes(id) ? prev.removedIds : [...prev.removedIds, id],
    }));
  }, []);

  return { pages, editPhrase, addPage, removePage };
}
