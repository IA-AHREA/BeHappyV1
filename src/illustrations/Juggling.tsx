import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Aprende algo inútil." — someone juggling three balls just for the joy of it. */
export default function Juggling() {
  return (
    <IllustrationSvg>
      <PopIn>
        <circle className="ink-fill" cx={110} cy={96} r={9} />
        <path className="ink-line" d="M110 105 L110 142" />
        <path className="ink-line" d="M110 116 L84 100 M110 116 L136 100" />
        <path className="ink-line" d="M110 142 L96 180 M110 142 L124 180" />
        <path className="ink-line" opacity={0.35} d="M70 188 h80" />
      </PopIn>
      <PopIn delay={0.4}>
        <Loop kind="float">
          <circle className="accent-fill" cx={80} cy={72} r={7} />
        </Loop>
      </PopIn>
      <PopIn delay={0.9}>
        <Loop kind="float" delay={0.5}>
          <circle className="ink-line" cx={110} cy={46} r={7} />
        </Loop>
      </PopIn>
      <PopIn delay={1.4}>
        <Loop kind="float" delay={1}>
          <circle className="accent-fill" cx={140} cy={72} r={7} />
        </Loop>
      </PopIn>
      <PopIn delay={0.6}>
        <DrawPath className="ink-line" opacity={0.3} strokeDasharray="3 6" d="M78 60 Q110 24 142 60" />
      </PopIn>
    </IllustrationSvg>
  );
}
