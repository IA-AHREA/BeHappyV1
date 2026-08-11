import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Trata de llegar." — a continuous-line traveler with a walking stick, nearing a castle. */
export default function Castle() {
  return (
    <IllustrationSvg>
      <PopIn>
        <path className="ink-line" opacity={0.4} d="M10 185 C70 155 140 155 205 178" />
        <DrawPath duration={1.4} d="M140 150 V110 H176 V150" />
        <path className="ink-line" d="M140 118 h6 v-8 h8 v8 h8 v-8 h8 v8 h6" />
        <DrawPath duration={1} delay={0.3} d="M126 150 V96 H150 V150 M126 96 L138 74 L150 96" />
        <DrawPath duration={1} delay={0.4} d="M176 150 V102 H196 V150 M176 102 L186 82 L196 102" />
        <path className="ink-line" d="M154 150 V128 C154 120 166 120 166 128 V150" />
      </PopIn>
      <PopIn delay={0.6}>
        <Loop kind="walk">
          <DrawPath
            duration={1}
            d="M54 108 C44 107 36 115 36 125 C36 132 41 138 48 140"
          />
          <path className="ink-line" d="M54 108 C62 108 68 114 66 122 C65 127 61 131 56 132" />
          <path className="ink-line" d="M48 140 C40 148 36 160 38 172 C39 178 42 184 46 188" />
          <path className="ink-line" d="M48 140 C56 146 62 156 64 168 C65 176 63 184 58 190" />
          <path className="ink-line" d="M64 168 L80 110" />
          <path className="ink-line" opacity={0.5} d="M46 188 h6 M58 190 h6" />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
