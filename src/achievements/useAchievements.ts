import { useCallback, useRef, useState } from 'react';
import { achievements } from './data';
import type { Achievement } from './data';

const STORAGE_KEY = 'behappy_achievements';

function loadUnlocked(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return new Set(raw ? (JSON.parse(raw) as string[]) : []);
  } catch {
    return new Set();
  }
}

/** Tracks unlocked achievements (persisted) and queues newly-unlocked ones for the toast. */
export function useAchievements() {
  const [unlocked, setUnlocked] = useState<Set<string>>(loadUnlocked);
  const [queue, setQueue] = useState<Achievement[]>([]);
  const unlockedRef = useRef(unlocked);
  unlockedRef.current = unlocked;

  const unlock = useCallback((id: string) => {
    if (unlockedRef.current.has(id)) return;
    const achievement = achievements.find((entry) => entry.id === id);
    if (!achievement) return;

    setUnlocked((prev) => {
      const next = new Set(prev);
      next.add(id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
      return next;
    });
    setQueue((prev) => [...prev, achievement]);
  }, []);

  const dismissCurrent = useCallback(() => {
    setQueue((prev) => prev.slice(1));
  }, []);

  return { unlocked, unlock, current: queue[0] ?? null, dismissCurrent };
}
