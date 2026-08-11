import { DrawPath, IllustrationSvg, Loop, PopIn, WriteLoop } from './primitives';

/** "Anota lo bueno de hoy." — a continuous-line open journal, filled in as you watch. */
export default function Journal() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath duration={1.4} d="M36 70 L36 168 Q108 152 184 168 L184 70 Q108 86 36 70 Z" />
        <path className="ink-line" opacity={0.5} strokeDasharray="4 6" d="M110 78 L110 160" />
        <path className="ink-line" opacity={0.45} d="M50 96 h40 M50 110 h34 M50 124 h42" />
      </PopIn>
      <PopIn delay={0.6}>
        <WriteLoop d="M124 100 q8 -8 14 0 q6 8 14 0 q8 -8 14 2" />
        <path className="ink-line" d="M168 128 L188 96 l6 4 L174 132 l-8 3 z" />
      </PopIn>
      <PopIn delay={1}>
        <Loop kind="twinkle">
          <path className="ink-line" d="M160 60 l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3 l8 -3 z" />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
