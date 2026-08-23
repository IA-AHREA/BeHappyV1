import { motion } from 'framer-motion';

interface MusicToggleProps {
  playing: boolean;
  hasMusic: boolean;
  onToggle: () => void;
}

/** Floating button that mutes/unmutes the book's background song (uploaded via dev mode). Hidden until one is set. */
export default function MusicToggle({ playing, hasMusic, onToggle }: MusicToggleProps) {
  if (!hasMusic) return null;

  return (
    <motion.button
      type="button"
      onClick={onToggle}
      aria-label={playing ? 'Silenciar la música' : 'Reproducir la música'}
      aria-pressed={playing}
      whileHover={{ scale: 1.05, y: -1 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#f7f3ea]/25 bg-[#241c17]/70 text-[#f3ead9] shadow-lg backdrop-blur transition-colors hover:bg-[#241c17]/90"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path d="M9 18V6l10-2v12" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
        <circle cx={6.5} cy={18} r={2.5} stroke="currentColor" strokeWidth={1.6} />
        <circle cx={16.5} cy={16} r={2.5} stroke="currentColor" strokeWidth={1.6} />
        {!playing && <path d="M4 4 L20 20" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />}
      </svg>
    </motion.button>
  );
}
