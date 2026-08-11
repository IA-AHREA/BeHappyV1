import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Confía en el proceso." — a caterpillar's trail leading up to a continuous-line butterfly in flight. */
export default function Butterfly() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath className="ink-line" opacity={0.5} strokeDasharray="4 6" duration={1.4} d="M20 150 Q110 138 156 92" />
        <Loop kind="walk">
          <circle className="ink-line" cx={46} cy={142} r={6} />
          <circle className="ink-line" cx={58} cy={140} r={6} />
          <circle className="ink-line" cx={70} cy={139} r={6} />
          <circle cx={80} cy={137} r={6} fill="#2b2a28" />
          <path className="ink-line" opacity={0.6} d="M82 131 q3 -5 7 -6 M85 132 q4 -3 8 -3" />
        </Loop>
      </PopIn>
      <PopIn delay={0.7}>
        <path className="ink-line" d="M156 68 L156 98" />
        <path className="ink-line" opacity={0.6} d="M152 64 q-4 -6 -8 -7 M160 64 q4 -6 8 -7" />
        <Loop kind="flap" style={{ transformOrigin: '156px 82px' }}>
          <path className="ink-line" d="M156 74 q-26 -18 -34 2 q-6 16 14 14 q-20 6 -8 18 q10 10 28 -8 z" />
          <path className="ink-line" d="M156 74 q26 -18 34 2 q6 16 -14 14 q20 6 8 18 q-10 10 -28 -8 z" />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
