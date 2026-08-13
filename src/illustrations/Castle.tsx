import { DrawPath, IllustrationSvg, Loop, PopIn, StickFigure } from './primitives';

/** "Trata de llegar." — un muñeco de palo con bastón se acerca al castillo. */
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
          <StickFigure
            head={[52, 88]}
            torso={[[52, 98], [52, 134]]}
            armR={[[52, 106], [64, 118], [75, 128]]}
            armL={[[52, 106], [44, 120], [42, 132]]}
            legR={[[52, 134], [61, 150], [66, 168], [72, 168]]}
            legL={[[52, 134], [44, 150], [37, 166], [31, 166]]}
          />
          <path className="ink-line" d="M80 106 L66 174" />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
