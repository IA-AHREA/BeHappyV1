import { Face, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Suelta lo que pesa." — a figure letting go of balloons and watching them drift off. */
export default function Balloons() {
  return (
    <IllustrationSvg>
      <PopIn delay={0.2}>
        <Loop kind="float">
          <ellipse className="ink-line" cx={120} cy={52} rx={14} ry={17} fill="#b5542c" fillOpacity={0.16} />
          <path className="ink-line" d="M120 69 q-4 20 4 38" />
        </Loop>
      </PopIn>
      <PopIn delay={0.7}>
        <Loop kind="float" delay={0.5}>
          <ellipse className="ink-line" cx={156} cy={42} rx={12} ry={15} />
          <path className="ink-line" d="M156 57 q-8 24 -24 44" />
        </Loop>
      </PopIn>
      <PopIn delay={1.1}>
        <Loop kind="float" delay={1}>
          <ellipse className="ink-line" cx={88} cy={44} rx={11} ry={14} fill="#e8973f" fillOpacity={0.2} />
          <path className="ink-line" d="M88 58 q12 26 30 48" />
        </Loop>
      </PopIn>
      <PopIn delay={0.5}>
        <circle className="ink-fill" cx={122} cy={120} r={9} />
        <Face cx={122} cy={120} r={9} expression="content" />
        <path className="ink-line" d="M122 129 L122 160" />
        <path className="ink-line" d="M122 136 L124 110 M122 138 L104 128" />
        <path className="ink-line" d="M122 160 L110 190 M122 160 L134 188" />
      </PopIn>
      <PopIn delay={0.8}>
        <path className="ink-line" opacity={0.8} d="M46 176 q-4 -16 12 -18 q16 -2 16 12 q0 10 -12 10 q-14 0 -16 -4 z" />
        <path className="ink-line" opacity={0.5} d="M50 168 l16 -4 M52 174 l14 -3" />
      </PopIn>
      <PopIn delay={0.7}>
        <path className="ink-line" opacity={0.35} d="M40 194 h140" />
      </PopIn>
    </IllustrationSvg>
  );
}
