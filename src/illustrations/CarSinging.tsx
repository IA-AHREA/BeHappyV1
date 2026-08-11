import { DrawPath, Face, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Canta en el coche." — singing along behind the wheel, windows down. */
export default function CarSinging() {
  return (
    <IllustrationSvg>
      <PopIn>
        <Loop kind="walk">
          <DrawPath
            fill="#f7f3ea"
            d="M34 146 h12 l14 -28 h72 l22 28 h26 q6 0 6 8 v8 h-152 v-10 q0 -6 6 -6 z"
          />
          <path className="ink-line" opacity={0.8} d="M66 146 l12 -22 h28 v22 z M112 124 h20 l16 22 h-36 z" />
          <circle className="ink-fill" cx={94} cy={136} r={6} opacity={0.9} />
          <Face cx={94} cy={136} r={6} expression="smile" />
        </Loop>
      </PopIn>
      <PopIn>
        <circle className="ink-line" cx={70} cy={166} r={12} />
        <circle className="ink-fill" cx={70} cy={166} r={2.4} />
        <circle className="ink-line" cx={156} cy={166} r={12} />
        <circle className="ink-fill" cx={156} cy={166} r={2.4} />
        <path className="ink-line" opacity={0.4} strokeDasharray="10 8" d="M20 184 h180" />
      </PopIn>
      <PopIn delay={0.5}>
        <Loop kind="float">
          <circle className="accent-fill" cx={70} cy={84} r={5} />
          <path className="ink-line" d="M75 84 V62 h12" />
        </Loop>
      </PopIn>
      <PopIn delay={0.9}>
        <Loop kind="float" delay={0.4}>
          <circle className="accent-fill" cx={110} cy={70} r={4.4} />
          <path className="ink-line" d="M114 70 V52" />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
