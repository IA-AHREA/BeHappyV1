import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Confía en el proceso." — a caterpillar's trail leading up to a butterfly in flight. */
export default function Butterfly() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath d="M20 150 Q110 138 200 150" />
        <circle className="ink-line" cx={46} cy={142} r={6} />
        <circle className="ink-line" cx={58} cy={140} r={6} />
        <circle className="ink-line" cx={70} cy={139} r={6} />
        <circle className="ink-fill" cx={80} cy={137} r={6} />
        <path className="ink-line" opacity={0.8} d="M82 131 q3 -5 7 -6 M85 132 q4 -3 8 -3" />
      </PopIn>
      <PopIn delay={0.4}>
        <DrawPath className="ink-line" opacity={0.45} strokeDasharray="4 7" d="M96 128 Q120 96 142 88" />
      </PopIn>
      <PopIn delay={0.7}>
        <path className="ink-line" d="M156 62 L156 92" />
        <path className="ink-line" opacity={0.8} d="M152 58 q-4 -6 -8 -7 M160 58 q4 -6 8 -7" />
        <Loop kind="flap" style={{ transformOrigin: '156px 76px' }}>
          <path className="ink-line" fill="#b5542c" fillOpacity={0.16} d="M156 68 q-26 -18 -34 2 q-6 16 14 14 q-20 6 -8 18 q10 10 28 -8 z" />
          <path className="ink-line" fill="#e8973f" fillOpacity={0.18} d="M156 68 q26 -18 34 2 q6 16 -14 14 q20 6 8 18 q-10 10 -28 -8 z" />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
