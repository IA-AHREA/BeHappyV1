import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Haz una pausa." — a continuous-line figure resting on a bench under a tree, leaves drifting down. */
export default function TreeRest() {
  return (
    <IllustrationSvg>
      <PopIn>
        <path className="ink-line" d="M96 190 Q100 150 96 118" />
        <DrawPath
          duration={1.4}
          d="M96 118 q-42 4 -44 -30 q-2 -30 30 -30 q6 -22 32 -20 q26 2 28 22 q30 -2 28 26 q-2 28 -40 30 q-18 2 -34 2 z"
        />
      </PopIn>
      <PopIn delay={0.5}>
        <path className="ink-line" opacity={0.5} d="M60 166 h74 M68 166 v28 M126 166 v28 M60 174 h74" />
        <DrawPath duration={0.6} d="M90 138 m -9 0 a 9 9 0 1 0 18 0 a 9 9 0 1 0 -18 0" />
        <path className="ink-line" d="M94 146 Q98 156 96 166" />
        <path className="ink-line" opacity={0.6} d="M96 166 L96 188 L112 188" />
      </PopIn>
      <PopIn delay={0.8}>
        <Loop kind="fall">
          <path className="ink-line" opacity={0.6} d="M60 120 q6 -2 8 4 q-6 2 -8 -4 z" />
        </Loop>
        <Loop kind="fall" delay={1.1}>
          <path className="ink-line" opacity={0.6} d="M100 126 q6 -2 8 4 q-6 2 -8 -4 z" />
        </Loop>
        <Loop kind="fall" delay={2}>
          <path className="ink-line" opacity={0.6} d="M46 132 q6 -2 8 4 q-6 2 -8 -4 z" />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
