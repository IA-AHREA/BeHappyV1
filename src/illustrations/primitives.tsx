import { motion, useReducedMotion } from 'framer-motion';
import type { CSSProperties, ReactNode } from 'react';
import type { Easing, TargetAndTransition } from 'framer-motion';

/** Wraps every illustration's SVG root with a consistent viewBox and sizing. */
export function IllustrationSvg({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 220 220" className="h-full w-full max-w-[290px] overflow-visible" aria-hidden="true">
      {children}
    </svg>
  );
}

interface DrawPathProps {
  d: string;
  delay?: number;
  duration?: number;
  opacity?: number;
  fill?: string;
  className?: string;
  strokeDasharray?: string;
}

/** A path that draws itself on via Framer Motion's pathLength. */
export function DrawPath({
  d,
  delay = 0,
  duration = 1.4,
  opacity = 1,
  fill = 'none',
  className = 'ink-line',
  strokeDasharray,
}: DrawPathProps) {
  const reduced = useReducedMotion();
  return (
    <motion.path
      d={d}
      fill={fill}
      className={className}
      strokeDasharray={strokeDasharray}
      initial={reduced ? { pathLength: 1, opacity } : { pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity }}
      transition={reduced ? { duration: 0 } : { duration, delay, ease: 'easeInOut' }}
    />
  );
}

interface DrawEllipseProps {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  delay?: number;
  duration?: number;
  opacity?: number;
  fill?: string;
  className?: string;
}

/** An ellipse that draws itself on via Framer Motion's pathLength — for rims, tables, mirror frames. */
export function DrawEllipse({
  cx,
  cy,
  rx,
  ry,
  delay = 0,
  duration = 1.4,
  opacity = 1,
  fill = 'none',
  className = 'ink-line',
}: DrawEllipseProps) {
  const reduced = useReducedMotion();
  return (
    <motion.ellipse
      cx={cx}
      cy={cy}
      rx={rx}
      ry={ry}
      fill={fill}
      className={className}
      initial={reduced ? { pathLength: 1, opacity } : { pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity }}
      transition={reduced ? { duration: 0 } : { duration, delay, ease: 'easeInOut' }}
    />
  );
}

interface PopInProps {
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
}

/** Fade + scale spring entrance for a group of shapes. */
export function PopIn({ children, delay = 0.35, style }: PopInProps) {
  const reduced = useReducedMotion();
  return (
    <motion.g
      style={style}
      initial={reduced ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={reduced ? { duration: 0 } : { type: 'spring', stiffness: 260, damping: 18, delay }}
    >
      {children}
    </motion.g>
  );
}

export type LoopKind =
  | 'float'
  | 'sway'
  | 'walk'
  | 'spin'
  | 'pulse'
  | 'twinkle'
  | 'drop'
  | 'wag'
  | 'steam'
  | 'flame'
  | 'flap'
  | 'zz'
  | 'fall'
  | 'breathe';

interface LoopDef {
  animate: TargetAndTransition;
  duration: number;
  ease: Easing;
  repeatType: 'loop' | 'mirror';
}

const LOOPS: Record<LoopKind, LoopDef> = {
  float: { animate: { y: [0, -7, 0] }, duration: 3.5, ease: 'easeInOut', repeatType: 'loop' },
  sway: { animate: { rotate: [-2, 2, -2] }, duration: 4, ease: 'easeInOut', repeatType: 'loop' },
  walk: { animate: { y: [0, -3, 0] }, duration: 1.1, ease: 'easeInOut', repeatType: 'loop' },
  spin: { animate: { rotate: [0, 360] }, duration: 14, ease: 'linear', repeatType: 'loop' },
  pulse: { animate: { scale: [1, 1.18, 1] }, duration: 1.3, ease: 'easeInOut', repeatType: 'loop' },
  twinkle: { animate: { opacity: [0.15, 1, 0.15] }, duration: 1.8, ease: 'easeInOut', repeatType: 'loop' },
  drop: { animate: { y: [0, 26], opacity: [0, 0.8, 0.8, 0] }, duration: 1.2, ease: 'linear', repeatType: 'loop' },
  wag: { animate: { rotate: [-10, 18] }, duration: 0.5, ease: 'easeInOut', repeatType: 'mirror' },
  steam: { animate: { y: [0, -16], opacity: [0.7, 0] }, duration: 2.2, ease: 'easeOut', repeatType: 'loop' },
  flame: { animate: { scale: [1, 1.15, 1], y: [0, -1.5, 0] }, duration: 0.8, ease: 'easeInOut', repeatType: 'loop' },
  flap: { animate: { scaleX: [1, 0.25] }, duration: 0.5, ease: 'easeInOut', repeatType: 'mirror' },
  zz: { animate: { y: [0, -20], opacity: [0, 0.8, 0] }, duration: 2.4, ease: 'easeOut', repeatType: 'loop' },
  fall: { animate: { y: [-6, 30], rotate: [0, 30], opacity: [0, 0.8, 0.8, 0] }, duration: 3.2, ease: 'linear', repeatType: 'loop' },
  breathe: { animate: { scale: [1, 1.05, 1] }, duration: 4, ease: 'easeInOut', repeatType: 'loop' },
};

interface LoopProps {
  kind: LoopKind;
  delay?: number;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

/** A subtle, infinitely-repeating ambient animation (float, sway, blink, steam, rain...). */
export function Loop({ kind, delay = 0, children, style, className }: LoopProps) {
  const reduced = useReducedMotion();
  if (reduced) {
    return (
      <g style={style} className={className}>
        {children}
      </g>
    );
  }
  const def = LOOPS[kind];
  return (
    <motion.g
      style={style}
      className={className}
      animate={def.animate}
      transition={{
        duration: def.duration,
        delay,
        ease: def.ease,
        repeat: Infinity,
        repeatType: def.repeatType,
      }}
    >
      {children}
    </motion.g>
  );
}

interface GrowInProps {
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
}

/** A stem/plant that grows upward from nothing, transform-origin driven. */
export function GrowIn({ children, delay = 0.6, style }: GrowInProps) {
  const reduced = useReducedMotion();
  return (
    <motion.g
      style={style}
      initial={reduced ? { scaleY: 1 } : { scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={reduced ? { duration: 0 } : { duration: 1, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.g>
  );
}

interface WriteLoopProps {
  d: string;
  delay?: number;
  className?: string;
}

/** A pen-stroke that draws in, holds, then resets — for handwriting-style loops. */
export function WriteLoop({ d, delay = 0, className = 'ink-line' }: WriteLoopProps) {
  const reduced = useReducedMotion();
  if (reduced) {
    return <path d={d} className={className} />;
  }
  return (
    <motion.path
      d={d}
      className={className}
      initial={{ pathLength: 0 }}
      animate={{ pathLength: [0, 1, 1, 0] }}
      transition={{
        duration: 2.6,
        times: [0, 0.6, 0.95, 1],
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}
