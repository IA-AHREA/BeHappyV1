import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Lee." — a person climbing a ladder propped against a giant book. */
export default function Reading() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath d="M115 32 h78 a6 6 0 0 1 6 6 v146 a6 6 0 0 1 -6 6 h-78 z" />
        <path className="ink-line" d="M115 32 q-10 5 -10 12 v132 q0 7 10 12" />
        <path className="ink-line" opacity={0.5} d="M130 62 h48 M130 76 h40 M130 90 h48 M130 104 h36" />
        <ellipse className="ink-line" cx={150} cy={197} rx={58} ry={6} opacity={0.35} />
      </PopIn>
      <PopIn delay={0.5}>
        <DrawPath d="M30 205 L98 55 M58 205 L126 55" />
        <path className="ink-line" opacity={0.8} d="M44 175 h29 M53 155 h29 M62 135 h29 M71 115 h29 M80 95 h29 M89 75 h29" />
      </PopIn>
      <PopIn delay={0.9}>
        <Loop kind="walk">
          <circle className="ink-fill" cx={80} cy={82} r={8} />
          <path className="ink-line" d="M80 90 L78 116" />
          <path className="ink-line" d="M78 116 L70 133 M78 116 L88 133" />
          <path className="ink-line" d="M79 98 L64 107 M79 98 L104 95" />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
