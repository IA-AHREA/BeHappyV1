import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Vuelve a intentarlo." — a continuous-line figure flying a kite that climbs again. */
export default function Kite() {
  return (
    <IllustrationSvg>
      <PopIn delay={0.3}>
        <Loop kind="float">
          <DrawPath duration={0.7} d="M148 32 L176 62 L148 92 L120 62 Z" />
          <path className="ink-line" opacity={0.6} d="M148 32 L148 92 M120 62 L176 62" />
          <path className="ink-line" d="M148 92 Q142 108 148 120 Q154 130 148 142" />
          <path className="ink-line" opacity={0.6} d="M143 106 l10 6 M152 124 l-10 6" />
        </Loop>
      </PopIn>
      <PopIn delay={0.5}>
        <path className="ink-line" opacity={0.5} d="M148 92 Q110 130 76 132" />
      </PopIn>
      <PopIn delay={0.7}>
        <DrawPath duration={1} d="M64 112 C56 111 50 117 50 125 C50 131 54 135 60 137" />
        <path className="ink-line" d="M64 112 C72 111 78 117 76 123 C75 128 71 132 66 133" />
        <path className="ink-line" d="M60 137 C54 144 50 154 52 166 C53 174 57 180 63 184" />
        <path className="ink-line" d="M63 184 C65 192 63 200 58 206" />
        <path className="ink-line" d="M63 184 C70 190 74 198 71 206" />
        <path className="ink-line" d="M60 137 C68 132 74 126 76 132" />
      </PopIn>
    </IllustrationSvg>
  );
}
