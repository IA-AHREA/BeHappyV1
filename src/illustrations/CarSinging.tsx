import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Canta en el coche." — cantando al volante; las notas salen en oleada, ciudad al fondo. */
export default function CarSinging() {
  return (
    <IllustrationSvg>
      <PopIn delay={0.6}>
        <path className="ink-line" opacity={0.3} d="M20 148 v-24 h12 v10 h10 v14 M186 148 v-18 h10 v-10 h10 v28" />
        <path className="ink-line" opacity={0.3} d="M26 132 h4 M26 138 h4 M190 138 h4" />
      </PopIn>
      <PopIn>
        <DrawPath duration={1.3} d="M34 146 h12 l14 -28 h72 l22 28 h26 q6 0 6 8 v8 h-152 v-10 q0 -6 6 -6 z" />
        <path className="ink-line" opacity={0.5} d="M66 146 l12 -22 h28 v22 z M112 124 h20 l16 22 h-36 z" />
        <circle className="ink-line" cx={70} cy={166} r={12} />
        <circle cx={70} cy={166} r={2.4} fill="#2b2a28" />
        <circle className="ink-line" cx={156} cy={166} r={12} />
        <circle cx={156} cy={166} r={2.4} fill="#2b2a28" />
        <path className="ink-line" opacity={0.4} strokeDasharray="10 8" d="M20 184 h180" />
      </PopIn>
      <PopIn delay={0.6}>
        <Loop kind="walk">
          <DrawPath duration={0.6} d="M94 132 m -9 0 a 9 9 0 1 0 18 0 a 9 9 0 1 0 -18 0" />
          <path className="ink-line" opacity={0.7} d="M89 130 q3 2.5 6 0" />
          <circle cx={99} cy={135} r={2.2} fill="#2b2a28" />
        </Loop>
      </PopIn>
      <PopIn delay={0.8}>
        <path className="ink-line" opacity={0.35} strokeDasharray="2 6" d="M100 106 Q130 84 168 88" />
        <Loop kind="float">
          <circle className="ink-line" cx={112} cy={96} r={5} />
          <path className="ink-line" d="M117 96 V72 h11" />
        </Loop>
        <Loop kind="float" delay={0.4}>
          <circle className="ink-line" cx={140} cy={84} r={4.4} />
          <path className="ink-line" d="M144 84 V64" />
        </Loop>
        <Loop kind="float" delay={0.8}>
          <circle className="ink-line" cx={166} cy={92} r={4.4} />
          <path className="ink-line" d="M170 92 V70 h9" />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
