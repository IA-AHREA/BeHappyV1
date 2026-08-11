import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "No te compares con los demás." — a continuous-line orange and apple, each reading their own paper. */
export default function Fruits() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath duration={1.1} d="M24 158 h172" />
        <path className="ink-line" opacity={0.6} d="M40 158 L36 196 M180 158 L184 196 M110 158 L110 196" />
      </PopIn>
      <PopIn delay={0.4}>
        <DrawPath duration={1} d="M66 122 m -33 0 a 33 33 0 1 0 66 0 a 33 33 0 1 0 -66 0" />
        <Loop kind="sway" style={{ transformOrigin: '66px 89px' }}>
          <path className="ink-line" d="M66 89 q-2 -8 5 -12" />
        </Loop>
        <circle cx={57} cy={112} r={2.6} fill="#2b2a28" />
        <circle cx={75} cy={112} r={2.6} fill="#2b2a28" />
        <path className="ink-line" d="M60 122 Q66 127 72 122" />
        <path className="ink-line" d="M38 124 L66 132 L94 124 L94 152 L66 144 L38 152 Z" />
        <path className="ink-line" opacity={0.5} d="M66 132 L66 144" />
      </PopIn>
      <PopIn delay={0.7}>
        <path className="ink-line" opacity={0.6} d="M152 88 Q140 78 152 68" />
        <DrawPath duration={1} d="M154 86 Q118 96 124 128 Q128 152 154 156 Q180 152 184 128 Q190 96 154 86 Z" />
        <circle cx={145} cy={112} r={2.6} fill="#2b2a28" />
        <circle cx={163} cy={112} r={2.6} fill="#2b2a28" />
        <path className="ink-line" d="M148 122 Q154 127 160 122" />
        <path className="ink-line" d="M126 124 L154 132 L182 124 L182 152 L154 144 L126 152 Z" />
        <path className="ink-line" opacity={0.5} d="M154 132 L154 144" />
      </PopIn>
    </IllustrationSvg>
  );
}
