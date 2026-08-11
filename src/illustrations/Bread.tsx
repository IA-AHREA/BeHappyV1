import { IllustrationSvg, Loop, PopIn } from './primitives';

/** "Comparte tu pan." — two people breaking bread together at a shared table. */
export default function Bread() {
  return (
    <IllustrationSvg>
      <PopIn>
        <path className="ink-line" opacity={0.6} d="M28 176 Q110 160 192 176" />
      </PopIn>
      <PopIn delay={0.3}>
        <circle className="ink-fill" cx={56} cy={94} r={9} />
        <path className="ink-line" d="M58 103 Q62 130 60 154" />
        <path className="ink-line" d="M60 114 L92 108" />
        <path className="ink-line" d="M60 154 L48 176 M60 154 L74 174" />
      </PopIn>
      <PopIn delay={0.5}>
        <circle className="ink-fill" cx={164} cy={94} r={9} />
        <path className="ink-line" d="M162 103 Q158 130 160 154" />
        <path className="ink-line" d="M160 114 L128 108" />
        <path className="ink-line" d="M160 154 L172 176 M160 154 L146 174" />
      </PopIn>
      <PopIn delay={0.8}>
        <Loop kind="float">
          <path className="ink-line" fill="#e8973f" fillOpacity={0.2} d="M88 100 Q110 88 132 100 Q110 112 88 100 Z" />
          <path className="ink-line" opacity={0.7} d="M100 96 l4 6 M110 94 l4 6 M120 96 l4 6" />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
