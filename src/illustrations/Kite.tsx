import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Vuelve a intentarlo." — a kite climbing again, tugged along by its flyer. */
export default function Kite() {
  return (
    <IllustrationSvg>
      <PopIn delay={0.3}>
        <Loop kind="float">
          <path className="ink-line" fill="#b5542c" fillOpacity={0.16} d="M148 32 L176 62 L148 92 L120 62 Z" />
          <path className="ink-line" opacity={0.7} d="M148 32 L148 92 M120 62 L176 62" />
          <path className="ink-line" d="M148 92 Q142 108 148 120 Q154 130 148 142" />
          <path className="ink-line" opacity={0.8} d="M143 106 l10 6 M152 124 l-10 6" />
        </Loop>
      </PopIn>
      <PopIn delay={0.6}>
        <DrawPath className="ink-line" opacity={0.7} d="M148 92 Q110 130 76 132" />
        <circle className="ink-fill" cx={64} cy={112} r={8} />
        <path className="ink-line" d="M64 120 L64 152" />
        <path className="ink-line" d="M64 128 L78 132 M64 128 L50 138" />
        <path className="ink-line" d="M64 152 L54 182 M64 152 L74 182" />
        <path className="ink-line" opacity={0.35} d="M34 188 h80" />
      </PopIn>
      <PopIn delay={0.9}>
        <path className="ink-line" opacity={0.4} d="M40 52 h14 M32 64 h20" />
      </PopIn>
    </IllustrationSvg>
  );
}
