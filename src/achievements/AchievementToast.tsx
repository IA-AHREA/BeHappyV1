import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Achievement } from './data';

interface AchievementToastProps {
  achievement: Achievement | null;
  onDone: () => void;
}

/** Minecraft-style "achievement unlocked" toast that slides in and auto-dismisses. */
export default function AchievementToast({ achievement, onDone }: AchievementToastProps) {
  useEffect(() => {
    if (!achievement) return;
    const timer = setTimeout(onDone, 3200);
    return () => clearTimeout(timer);
  }, [achievement, onDone]);

  return (
    <div className="pointer-events-none fixed left-1/2 top-5 z-50 -translate-x-1/2">
      <AnimatePresence>
        {achievement && (
          <motion.div
            key={achievement.id}
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className="flex items-center gap-3 rounded-lg border border-accent/60 bg-[#241c17]/95 px-4 py-3 shadow-xl backdrop-blur"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#f7f3ea]/20 bg-[#55483c] text-xl">
              {achievement.icon}
            </span>
            <div className="flex flex-col text-left">
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-accent">
                Logro desbloqueado
              </span>
              <span className="font-caveat text-lg font-semibold leading-tight text-[#f3ead9]">
                {achievement.title}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
