import { motion } from 'framer-motion';
import type { Achievement } from './data';

interface AchievementsPageProps {
  achievements: Achievement[];
  unlocked: Set<string>;
  onBack: () => void;
}

/** Full-screen trophy room: grid of all achievements, locked ones shown as "???". */
export default function AchievementsPage({ achievements, unlocked, onBack }: AchievementsPageProps) {
  const count = unlocked.size;
  const total = achievements.length;

  return (
    <div className="flex h-full w-full max-w-3xl flex-col items-center gap-6 overflow-y-auto px-4 py-8">
      <div className="flex w-full flex-col items-center gap-2 text-center">
        <span className="font-sans text-xs uppercase tracking-[0.35em] text-[#cbb9a0]/70">Logros</span>
        <h1 className="font-caveat text-4xl font-semibold text-[#f3ead9]">Tu progreso</h1>
        <p className="font-sans text-sm text-[#cbb9a0]/80">
          {count} / {total} desbloqueados
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
        {achievements.map((achievement) => {
          const isUnlocked = unlocked.has(achievement.id);
          return (
            <motion.div
              key={achievement.id}
              layout
              className={`flex items-center gap-3 rounded-xl border px-3 py-3 transition-colors ${
                isUnlocked ? 'border-accent/50 bg-[#f7f3ea]/10' : 'border-[#f7f3ea]/10 bg-[#f7f3ea]/5 opacity-50'
              }`}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#f7f3ea]/20 bg-[#55483c] text-xl">
                {isUnlocked ? achievement.icon : '❔'}
              </span>
              <div className="flex flex-col text-left">
                <span className="font-sans text-[13px] font-semibold text-[#f3ead9]">
                  {isUnlocked ? achievement.title : '???'}
                </span>
                <span className="font-sans text-[11px] text-[#cbb9a0]/70">
                  {isUnlocked ? achievement.description : 'Sigue leyendo para descubrirlo'}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.button
        type="button"
        onClick={onBack}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.96 }}
        className="rounded-full border border-[#f7f3ea]/25 bg-[#f7f3ea]/10 px-8 py-3 font-sans text-sm font-semibold uppercase tracking-wide text-[#f3ead9]"
      >
        Volver al libro
      </motion.button>
    </div>
  );
}
