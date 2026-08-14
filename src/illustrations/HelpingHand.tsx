import { DrawPath, IllustrationSvg, Loop, PopIn, StickFigure, line } from './primitives';

/** "Pide ayuda." — desde el borde del pozo, una figura tira de la cuerda para sacar a la otra. */
export default function HelpingHand() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath duration={1.2} d="M30 136 V204 H110 V136" />
        <path className="ink-line" opacity={0.7} d="M14 136 H30 M110 136 H200" />
        <path
          className="ink-line"
          opacity={0.35}
          d="M33 148 l6 -6 M33 164 l6 -6 M33 180 l6 -6 M101 150 l6 -6 M101 166 l6 -6 M101 182 l6 -6"
        />
        <path className="ink-line" opacity={0.35} d="M44 200 l6 -6 M64 200 l6 -6 M84 200 l6 -6" />
      </PopIn>
      <PopIn delay={0.3}>
        <Loop kind="walk">
          <StickFigure
            head={[66, 150]}
            r={9}
            torso={[[66, 159], [66, 192]]}
            armR={[[66, 166], [78, 152], [88, 141]]}
            armL={[[66, 166], [56, 180], [58, 192]]}
            legL={[[66, 192], [61, 204]]}
            legR={[[66, 192], [71, 204]]}
          />
        </Loop>
      </PopIn>
      <PopIn delay={0.6}>
        <circle className="ink-line" cx={136} cy={90} r={10} />
        <path className="ink-line" d={line([134, 100], [136, 126])} />
        <path className="ink-line" d={line([135, 108], [122, 114], [112, 120])} />
        <path className="ink-line" d={line([135, 108], [126, 120], [116, 126])} />
        <path className="ink-line" d={line([136, 126], [150, 136], [166, 135])} />
        <path className="ink-line" d={line([136, 126], [144, 139], [160, 140])} />
        <path className="ink-line" opacity={0.7} d="M114 122 L110 136 L90 142" />
      </PopIn>
      <PopIn delay={0.9}>
        <Loop kind="pulse" style={{ transformOrigin: '90px 142px' }}>
          <circle cx={90} cy={142} r={3} fill="#2b2a28" opacity={0.5} />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
