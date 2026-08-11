import { DrawEllipse, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Compra flores." — a café table with a vase of flowers and a steaming cup. */
export default function Flowers() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawEllipse cx={132} cy={118} rx={52} ry={10} />
        <path className="ink-line" d="M132 128 L132 192" />
        <path className="ink-line" d="M110 196 Q132 188 154 196" />
      </PopIn>
      <PopIn delay={0.4}>
        <path className="ink-line" d="M148 78 L144 108 h20 L160 78 Z" />
        <Loop kind="sway" style={{ transformOrigin: '152px 108px' }}>
          <path className="ink-line" d="M150 78 Q147 62 141 52 M154 78 L154 46 M158 78 Q163 62 168 54" />
          <circle className="accent-fill" cx={140} cy={48} r={8} />
          <circle className="accent-fill" cx={154} cy={41} r={8} />
          <circle className="accent-fill" cx={169} cy={50} r={8} />
        </Loop>
        <path className="ink-line" d="M98 98 h18 v9 q0 5 -9 5 t-9 -5 z" />
        <path className="ink-line" d="M116 100 q9 2 0 8" />
        <path className="ink-line" opacity={0.5} d="M104 92 q3 -5 0 -9 M111 92 q3 -5 0 -9" />
      </PopIn>
      <PopIn delay={0.8}>
        <circle className="ink-fill" cx={46} cy={72} r={9} />
        <path className="ink-line" d="M48 81 Q53 100 53 122" />
        <path className="ink-line" d="M50 94 L84 106" />
        <path className="ink-line" d="M53 122 L76 126 L76 158 M53 122 L60 158" />
        <path className="ink-line" opacity={0.7} d="M34 90 L34 160 M34 124 L57 124 M52 128 L52 160" />
      </PopIn>
    </IllustrationSvg>
  );
}
