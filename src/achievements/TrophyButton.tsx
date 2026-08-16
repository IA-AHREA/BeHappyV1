import { motion } from 'framer-motion';

interface TrophyButtonProps {
  onClick: () => void;
  count: number;
  total: number;
}

/** Floating button that opens/closes the achievements page. */
export default function TrophyButton({ onClick, count, total }: TrophyButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={`Ver logros: ${count} de ${total} desbloqueados`}
      whileHover={{ scale: 1.05, y: -1 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-5 left-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#f7f3ea]/25 bg-[#241c17]/70 text-[#f3ead9] shadow-lg backdrop-blur transition-colors hover:bg-[#241c17]/90"
    >
      <span className="text-lg leading-none" aria-hidden="true">
        🏆
      </span>
    </motion.button>
  );
}
