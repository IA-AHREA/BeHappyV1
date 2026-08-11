import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Da las gracias." — a handwritten thank-you note sealed with a small heart. */
export default function ThankYouCard() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath d="M62 116 q-12 0 -12 14 v20 q0 14 12 14 h74 v-48 z" />
        <path className="ink-line" d="M136 116 q14 0 14 14 v20 q0 14 -14 14" />
        <path className="ink-line" opacity={0.8} d="M136 128 h-18 v14 h18" />
        <path className="ink-line" opacity={0.9} d="M150 122 v-26 h10 v22" />
        <path className="ink-line" opacity={0.8} d="M96 164 v30 M84 194 h24" />
      </PopIn>
      <PopIn delay={0.6}>
        <Loop kind="float">
          <path className="ink-line" fill="#f7f3ea" d="M78 48 h64 v42 h-64 z" />
          <path className="ink-line" d="M78 48 L110 72 L142 48" />
          <Loop kind="pulse" style={{ transformOrigin: '110px 82px' }}>
            <path className="accent-fill" d="M110 88 q-8 -7 -6 -12 q3 -5 6 -1 q3 -4 6 1 q2 5 -6 12 z" />
          </Loop>
        </Loop>
      </PopIn>
      <PopIn delay={0.5}>
        <path className="ink-line" opacity={0.35} d="M40 198 h130" />
      </PopIn>
    </IllustrationSvg>
  );
}
