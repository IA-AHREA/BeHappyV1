import { DrawPath, IllustrationSvg, Loop, PopIn, StickFigure } from './primitives';

/** "Lee." — un muñeco de palo subiendo una escalera apoyada en un libro gigante. */
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
          <StickFigure
            head={[88, 78]}
            r={9}
            torso={[[86, 87], [80, 120]]}
            armL={[[85, 94], [76, 102], [82, 110]]}
            armR={[[85, 94], [92, 88], [98, 84]]}
            legL={[[80, 120], [72, 134], [64, 148]]}
            legR={[[80, 120], [86, 136], [76, 150]]}
          />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
