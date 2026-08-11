import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Lee." — a continuous-line figure climbing a ladder propped on a giant book. */
export default function Reading() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath duration={1.6} d="M120 40 C150 34 178 38 190 48 L190 178 C178 168 150 164 120 170 Z" />
        <path className="ink-line" opacity={0.55} d="M132 60 h46 M132 74 h40 M132 88 h46 M132 102 h34" />
        <path className="ink-line" opacity={0.4} d="M110 188 C140 180 170 180 200 188" />
      </PopIn>
      <PopIn delay={0.5}>
        <DrawPath duration={1} delay={0.1} d="M40 195 L96 60" />
        <DrawPath duration={1} delay={0.25} d="M64 195 L120 60" />
        <path className="ink-line" opacity={0.5} d="M50 172 l20 -5 M56 152 l20 -5 M62 132 l20 -5 M68 112 l20 -5 M74 92 l20 -5 M80 72 l20 -5" />
      </PopIn>
      <PopIn delay={1}>
        <Loop kind="walk">
          <DrawPath
            duration={1}
            d="M78 66 C70 65 64 71 64 79 C64 85 68 89 74 91 C68 96 62 106 64 116 C65 121 68 124 72 126"
          />
          <path className="ink-line" d="M78 66 C84 66 88 70 87 76 C86 80 83 83 79 84" />
          <path className="ink-line" d="M74 91 C84 88 94 84 100 78" />
          <path className="ink-line" d="M72 126 C74 132 72 138 68 142" />
          <path className="ink-line" d="M72 126 C78 130 82 136 80 142" />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
