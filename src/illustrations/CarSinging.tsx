import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Canta en el coche." — a continuous-line figure singing along, windows down. */
export default function CarSinging() {
  return (
    <IllustrationSvg>
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
          <DrawPath duration={0.6} d="M94 136 m -9 0 a 9 9 0 1 0 18 0 a 9 9 0 1 0 -18 0" />
          <path className="ink-line" d="M100 128 C104 122 104 116 100 112" />
          <path className="ink-line" d="M85 140 C88 144 96 144 99 140" />
          <path className="ink-line" opacity={0.5} d="M108 118 Q94 106 82 112" />
          <path className="ink-line" opacity={0.5} d="M108 124 Q94 130 84 122" />
        </Loop>
      </PopIn>
      <PopIn delay={0.5}>
        <Loop kind="float">
          <circle className="ink-line" cx={70} cy={84} r={5} />
          <path className="ink-line" d="M75 84 V62 h12" />
        </Loop>
      </PopIn>
      <PopIn delay={0.9}>
        <Loop kind="float" delay={0.4}>
          <circle className="ink-line" cx={110} cy={70} r={4.4} />
          <path className="ink-line" d="M114 70 V52" />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
