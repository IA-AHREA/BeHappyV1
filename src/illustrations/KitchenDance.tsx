import { Face, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Baila en la cocina." — dancing by the stove with notes floating overhead. */
export default function KitchenDance() {
  return (
    <IllustrationSvg>
      <PopIn>
        <Loop kind="walk">
          <circle className="ink-fill" cx={96} cy={66} r={9} />
          <Face cx={96} cy={66} r={9} expression="smile" />
          <path className="ink-line" d="M96 75 Q104 96 100 118" />
          <path className="ink-line" d="M98 86 L70 66 M98 92 L128 74" />
          <path className="ink-line" d="M100 118 L82 148 L86 168 M100 118 L122 138 L118 168" />
        </Loop>
      </PopIn>
      <PopIn delay={0.4}>
        <path className="ink-line" opacity={0.6} d="M20 186 h180" />
        <path className="ink-line" opacity={0.6} d="M156 186 v-30 h34 v30 M160 164 h26" />
        <path className="ink-line" opacity={0.6} d="M163 156 q0 -8 8 -8 t8 8" />
      </PopIn>
      <PopIn delay={0.6}>
        <Loop kind="float">
          <circle className="accent-fill" cx={146} cy={52} r={5} />
          <path className="ink-line" d="M151 52 V30 h12" />
        </Loop>
      </PopIn>
      <PopIn delay={1}>
        <Loop kind="float" delay={0.3}>
          <circle className="accent-fill" cx={46} cy={98} r={4.4} />
          <path className="ink-line" d="M50 98 V80" />
        </Loop>
      </PopIn>
      <PopIn delay={1.4}>
        <Loop kind="float" delay={0.6}>
          <circle className="accent-fill" cx={170} cy={96} r={4.4} />
          <path className="ink-line" d="M174 96 V78 h10" />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
