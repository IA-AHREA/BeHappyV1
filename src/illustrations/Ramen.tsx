import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Come despacio." — a steaming bowl enjoyed slowly, chopsticks resting nearby. */
export default function Ramen() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath fill="#f7f3ea" d="M52 110 h116 q0 44 -34 52 h-48 q-34 -8 -34 -52 z" />
        <path className="ink-line" opacity={0.6} d="M64 124 q10 8 20 0 q10 -8 20 0 q10 8 20 0 q10 -8 20 0 q10 8 12 2" />
        <path className="ink-line" opacity={0.7} d="M86 162 v14 h48" />
        <path className="ink-line" opacity={0.9} d="M150 104 L188 62 M158 108 L196 70" />
      </PopIn>
      <PopIn delay={0.5}>
        <Loop kind="steam">
          <path className="ink-line" opacity={0.6} d="M86 96 q4 -8 0 -16 q-4 -8 0 -14" />
        </Loop>
        <Loop kind="steam" delay={0.7}>
          <path className="ink-line" opacity={0.6} d="M110 94 q4 -8 0 -16 q-4 -8 0 -14" />
        </Loop>
        <Loop kind="steam" delay={1.3}>
          <path className="ink-line" opacity={0.6} d="M134 96 q4 -8 0 -16 q-4 -8 0 -14" />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
