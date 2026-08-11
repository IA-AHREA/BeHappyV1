import { motion, useReducedMotion } from 'framer-motion';
import { useId } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import type { Easing, TargetAndTransition } from 'framer-motion';

const PAPER = '#f7f3ea';

/**
 * Wraps every illustration's SVG root with a consistent viewBox, sizing, a slow ambient
 * drift, and a subtle hand-inked wobble (feTurbulence + feDisplacementMap) so lines read
 * as sketched rather than machine-perfect.
 */
export function IllustrationSvg({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  const filterId = useId();
  return (
    <svg viewBox="0 0 220 220" className="h-full w-full max-w-[290px] overflow-visible" aria-hidden="true">
      <defs>
        <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.018 0.035" numOctaves={2} seed={3} result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale={1.6} xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      <motion.g
        style={{ filter: `url(#${filterId})` }}
        animate={reduced ? undefined : { y: [0, -4, 0], rotate: [-0.6, 0.6, -0.6] }}
        transition={reduced ? undefined : { duration: 6, ease: 'easeInOut', repeat: Infinity }}
      >
        {children}
      </motion.g>
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

/** Fade + scale + rise spring entrance for a group of shapes. */
export function PopIn({ children, delay = 0.35, style }: PopInProps) {
  const reduced = useReducedMotion();
  return (
    <motion.g
      style={style}
      initial={reduced ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.78, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={reduced ? { duration: 0 } : { type: 'spring', stiffness: 240, damping: 16, delay }}
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
  | 'breathe'
  | 'blink';

interface LoopDef {
  animate: TargetAndTransition;
  duration: number;
  ease: Easing;
  repeatType: 'loop' | 'mirror';
  times?: number[];
}

const LOOPS: Record<LoopKind, LoopDef> = {
  float: { animate: { y: [0, -13, 0] }, duration: 3.2, ease: 'easeInOut', repeatType: 'loop' },
  sway: { animate: { rotate: [-5, 5, -5] }, duration: 3.6, ease: 'easeInOut', repeatType: 'loop' },
  walk: { animate: { y: [0, -6, 0] }, duration: 1.1, ease: 'easeInOut', repeatType: 'loop' },
  spin: { animate: { rotate: [0, 360] }, duration: 11, ease: 'linear', repeatType: 'loop' },
  pulse: { animate: { scale: [1, 1.28, 1] }, duration: 1.2, ease: 'easeInOut', repeatType: 'loop' },
  twinkle: { animate: { opacity: [0.12, 1, 0.12] }, duration: 1.5, ease: 'easeInOut', repeatType: 'loop' },
  drop: { animate: { y: [0, 34], opacity: [0, 0.8, 0.8, 0] }, duration: 1.1, ease: 'linear', repeatType: 'loop' },
  wag: { animate: { rotate: [-18, 28] }, duration: 0.45, ease: 'easeInOut', repeatType: 'mirror' },
  steam: { animate: { y: [0, -24], opacity: [0.7, 0] }, duration: 2, ease: 'easeOut', repeatType: 'loop' },
  flame: { animate: { scale: [1, 1.22, 1], y: [0, -2.5, 0] }, duration: 0.7, ease: 'easeInOut', repeatType: 'loop' },
  flap: { animate: { scaleX: [1, 0.2] }, duration: 0.45, ease: 'easeInOut', repeatType: 'mirror' },
  zz: { animate: { y: [0, -28], opacity: [0, 0.8, 0] }, duration: 2.2, ease: 'easeOut', repeatType: 'loop' },
  fall: { animate: { y: [-6, 38], rotate: [0, 45], opacity: [0, 0.8, 0.8, 0] }, duration: 2.9, ease: 'linear', repeatType: 'loop' },
  breathe: { animate: { scale: [1, 1.08, 1] }, duration: 3.6, ease: 'easeInOut', repeatType: 'loop' },
  blink: {
    animate: { scaleY: [1, 1, 0.12, 1, 1] },
    duration: 4.2,
    ease: 'easeInOut',
    repeatType: 'loop',
    times: [0, 0.88, 0.93, 0.97, 1],
  },
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
        ...(def.times ? { times: def.times } : {}),
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

export type FaceExpression = 'smile' | 'content' | 'closed';

interface FaceProps {
  /** Center and radius of the solid head circle this face sits on top of. */
  cx: number;
  cy: number;
  r: number;
  expression?: FaceExpression;
  /** Delay before the periodic blink starts, so two nearby characters don't blink in lockstep. */
  blinkDelay?: number;
}

/**
 * A minimal face "cut out" of a solid ink-fill head in paper color: two small dots for
 * eyes and a curved line for a mouth. Open-eyed expressions blink gently on a loop;
 * `closed` renders resting/sleeping eyes instead.
 */
export function Face({ cx, cy, r, expression = 'smile', blinkDelay = 0 }: FaceProps) {
  const eyeDx = r * 0.36;
  const eyeY = cy - r * 0.05;
  const eyeR = Math.max(r * 0.12, 0.8);
  const strokeW = Math.max(r * 0.14, 1);
  const mouthY = cy + r * 0.38;
  const mouthWidth = r * 0.55;
  const mouthDepth = expression === 'content' ? r * 0.16 : r * 0.32;

  if (expression === 'closed') {
    return (
      <g>
        <path
          d={`M ${cx - eyeDx - eyeR} ${eyeY} q ${eyeR} ${eyeR * 0.9} ${eyeR * 2} 0`}
          stroke={PAPER}
          strokeWidth={strokeW}
          strokeLinecap="round"
          fill="none"
        />
        <path
          d={`M ${cx + eyeDx - eyeR} ${eyeY} q ${eyeR} ${eyeR * 0.9} ${eyeR * 2} 0`}
          stroke={PAPER}
          strokeWidth={strokeW}
          strokeLinecap="round"
          fill="none"
        />
      </g>
    );
  }

  return (
    <g>
      <Loop kind="blink" delay={blinkDelay} style={{ transformOrigin: `${cx - eyeDx}px ${eyeY}px` }}>
        <circle cx={cx - eyeDx} cy={eyeY} r={eyeR} fill={PAPER} />
      </Loop>
      <Loop kind="blink" delay={blinkDelay} style={{ transformOrigin: `${cx + eyeDx}px ${eyeY}px` }}>
        <circle cx={cx + eyeDx} cy={eyeY} r={eyeR} fill={PAPER} />
      </Loop>
      <path
        d={`M ${cx - mouthWidth / 2} ${mouthY} Q ${cx} ${mouthY + mouthDepth} ${cx + mouthWidth / 2} ${mouthY}`}
        stroke={PAPER}
        strokeWidth={strokeW}
        strokeLinecap="round"
        fill="none"
      />
    </g>
  );
}
