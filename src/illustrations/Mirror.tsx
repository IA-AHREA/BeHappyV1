import { DrawPath, IllustrationSvg, Loop, PopIn, StickFigure, line } from './primitives';

/** "Ríete de ti." — un muñeco de palo se ríe frente a su reflejo en el espejo. */
export default function Mirror() {
  return (
    <IllustrationSvg>
      <PopIn>
        <ellipse className="ink-line" cx={148} cy={102} rx={32} ry={50} />
        <path className="ink-line" opacity={0.5} d="M134 150 L126 186 M162 150 L170 186 M126 186 h44" />
      </PopIn>
      <PopIn delay={0.6}>
        <Loop kind="breathe" style={{ transformOrigin: '140px 105px' }}>
          <circle className="ink-line" opacity={0.5} cx={140} cy={90} r={8} />
          <path className="ink-line" opacity={0.5} d={line([141, 98], [143, 124])} />
          <path className="ink-line" opacity={0.5} d={line([141, 104], [134, 112], [136, 120])} />
        </Loop>
      </PopIn>
      <PopIn delay={0.4}>
        <Loop kind="walk">
          <StickFigure
            head={[64, 86]}
            torso={[[66, 96], [66, 132]]}
            armR={[[66, 104], [78, 116], [70, 124]]}
            armL={[[66, 104], [54, 114], [58, 100]]}
            legL={[[66, 132], [60, 155], [58, 180], [52, 180]]}
            legR={[[66, 132], [72, 155], [74, 180], [80, 180]]}
          />
        </Loop>
        <DrawPath duration={0.4} delay={0.8} d="M36 186 H190" opacity={0.4} />
      </PopIn>
      <PopIn delay={0.9}>
        <Loop kind="float">
          <text x={26} y={58} fontFamily="Caveat, cursive" fontSize={24} fill="#b5542c">
            ja ja
          </text>
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
