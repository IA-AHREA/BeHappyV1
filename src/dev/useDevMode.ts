import { useCallback, useState } from 'react';

const STORAGE_KEY = 'behappy_dev_mode_enabled';

/** Persists whether developer mode (per-page custom images) is active. */
export function useDevMode() {
  const [enabled, setEnabled] = useState(() => localStorage.getItem(STORAGE_KEY) === 'true');

  const setDevMode = useCallback((value: boolean) => {
    setEnabled(value);
    localStorage.setItem(STORAGE_KEY, String(value));
  }, []);

  return { enabled, setDevMode };
}
