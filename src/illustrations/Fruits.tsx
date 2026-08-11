import { DrawPath, IllustrationSvg, PopIn } from './primitives';

/** "No te compares con los demás." — an orange and an apple, each reading their own paper. */
export default function Fruits() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath d="M24 158 h172" />
        <path className="ink-line" opacity={0.7} d="M40 158 L36 196 M180 158 L184 196 M110 158 L110 196" />
      </PopIn>
      <PopIn delay={0.4}>
        <circle className="ink-line" cx={66} cy={122} r={33} fill="#e8973f" fillOpacity={0.18} />
        <path className="ink-line" d="M66 89 q-2 -8 5 -12" />
        <circle className="ink-fill" cx={57} cy={112} r={2.6} />
        <circle className="ink-fill" cx={75} cy={112} r={2.6} />
        <path className="ink-line" strokeWidth={1.3} d="M60 118 Q66 122 72 118" />
        <path className="ink-line" fill="#f7f3ea" d="M38 124 L66 132 L94 124 L94 152 L66 144 L38 152 Z" />
        <path className="ink-line" opacity={0.5} d="M66 132 L66 144" />
        <path className="ink-line" opacity={0.45} d="M45 132 l15 4 M45 138 l15 4 M75 136 l14 -4 M75 142 l14 -4" />
      </PopIn>
      <PopIn delay={0.7}>
        <path className="ink-line" opacity={0.7} d="M152 88 Q140 78 152 68" />
        <path className="ink-line" fill="#c6432f" fillOpacity={0.16} d="M154 86 Q118 96 124 128 Q128 152 154 156 Q180 152 184 128 Q190 96 154 86 Z" />
        <circle className="ink-fill" cx={145} cy={112} r={2.6} />
        <circle className="ink-fill" cx={163} cy={112} r={2.6} />
        <path className="ink-line" strokeWidth={1.3} d="M148 118 Q154 122 160 118" />
        <path className="ink-line" fill="#f7f3ea" d="M126 124 L154 132 L182 124 L182 152 L154 144 L126 152 Z" />
        <path className="ink-line" opacity={0.5} d="M154 132 L154 144" />
        <path className="ink-line" opacity={0.45} d="M133 132 l15 4 M133 138 l15 4 M163 136 l14 -4 M163 142 l14 -4" />
      </PopIn>
    </IllustrationSvg>
  );
}
