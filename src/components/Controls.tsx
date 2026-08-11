import { motion } from 'framer-motion';

interface ControlsProps {
  spread: number;
  total: number;
  atStart: boolean;
  atEnd: boolean;
  onPrev: () => void;
  onNext: () => void;
}

/** Prev/next navigation, the "01 / 31" counter, and a linear reading-progress bar. */
export default function Controls({ spread, total, atStart, atEnd, onPrev, onNext }: ControlsProps) {
  const progress = ((spread + 1) / total) * 100;

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-4">
      <div className="flex w-full items-center gap-4">
        <NavButton direction="prev" disabled={atStart} onClick={onPrev} />

        <div className="flex flex-1 flex-col items-center gap-2">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#cbb9a0]/80">
            {String(spread + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <div className="h-1 w-full overflow-hidden rounded-full bg-[#f7f3ea]/15">
            <motion.div
              className="h-full rounded-full bg-accent"
              initial={false}
              animate={{ width: `${progress}%` }}
              transition={{ type: 'spring', stiffness: 200, damping: 30 }}
            />
          </div>
        </div>

        <NavButton direction="next" disabled={atEnd} onClick={onNext} />
      </div>

      <p className="font-sans text-[11px] tracking-wide text-[#cbb9a0]/55">
        Usa las flechas, desliza, o las teclas ← →
      </p>
    </div>
  );
}

interface NavButtonProps {
  direction: 'prev' | 'next';
  disabled: boolean;
  onClick: () => void;
}

function NavButton({ direction, disabled, onClick }: NavButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'prev' ? 'Página anterior' : 'Página siguiente'}
      whileHover={disabled ? undefined : { scale: 1.05, y: -1 }}
      whileTap={disabled ? undefined : { scale: 0.92 }}
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#f7f3ea]/25 bg-[#f7f3ea]/10 text-[#f3ead9] transition-colors disabled:cursor-default disabled:opacity-25"
    >
      <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
        {direction === 'prev' ? (
          <path d="M12.5 5 7 10l5.5 5" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M7.5 5 13 10l-5.5 5" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </motion.button>
  );
}
