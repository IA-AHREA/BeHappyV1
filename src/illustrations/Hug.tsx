import { Face, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Abraza fuerte." — two figures wrapped in a tight embrace. */
export default function Hug() {
  return (
    <IllustrationSvg>
      <PopIn>
        <Loop kind="breathe" style={{ transformOrigin: '110px 130px' }}>
          <circle className="ink-fill" cx={92} cy={76} r={10} />
          <Face cx={92} cy={76} r={10} expression="content" />
          <circle className="ink-fill" cx={128} cy={80} r={9} />
          <Face cx={128} cy={80} r={9} expression="content" blinkDelay={0.6} />
          <path className="ink-line" d="M94 86 Q90 120 92 156" />
          <path className="ink-line" d="M126 89 Q130 120 128 156" />
          <path className="ink-line" d="M96 98 Q118 92 134 104" />
          <path className="ink-line" d="M124 100 Q102 94 86 106" />
          <path className="ink-line" d="M92 156 L84 186 M92 156 L100 186 M128 156 L120 186 M128 156 L136 186" />
        </Loop>
      </PopIn>
      <PopIn delay={0.6}>
        <Loop kind="pulse" style={{ transformOrigin: '110px 40px' }}>
          <path className="accent-fill" d="M110 50 q-13 -11 -9 -19 q4 -7 9 -1 q5 -6 9 1 q4 8 -9 19 z" />
        </Loop>
      </PopIn>
      <PopIn delay={0.5}>
        <path className="ink-line" opacity={0.35} d="M60 192 h100" />
      </PopIn>
    </IllustrationSvg>
  );
}
