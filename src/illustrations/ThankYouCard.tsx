import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Da las gracias." — a continuous-line thank-you note, sealed with a small heart. */
export default function ThankYouCard() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath duration={1.2} d="M62 120 L62 190 L158 190 L158 120 L110 138 Z" />
        <path className="ink-line" opacity={0.5} strokeDasharray="4 5" d="M110 138 V190" />
        <path className="ink-line" opacity={0.45} d="M76 154 h24 M76 168 h20 M124 154 h24 M124 168 h20" />
      </PopIn>
      <PopIn delay={0.6}>
        <DrawPath duration={0.9} d="M70 66 h80 v46 h-80 z" />
        <path className="ink-line" d="M70 66 L110 94 L150 66" />
        <Loop kind="pulse" style={{ transformOrigin: '110px 112px' }}>
          <path className="ink-line" d="M110 100 C101 92 88 98 88 108 C88 118 101 127 110 133 C119 127 132 118 132 108 C132 98 119 92 110 100 Z" />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
