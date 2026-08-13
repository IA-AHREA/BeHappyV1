import { DrawPath, IllustrationSvg, Loop, PopIn, StickFigure, line } from './primitives';

/** "Pide ayuda." — un muñeco de palo arrodillado ayuda a otro a salir del pozo. */
export default function HelpingHand() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath duration={1.2} d="M30 136 V204 H110 V136" />
        <path className="ink-line" opacity={0.7} d="M14 136 H30 M110 136 H200" />
        <path className="ink-line" opacity={0.4} d="M38 156 h16 M44 174 h20 M36 190 h14" />
      </PopIn>
      <PopIn delay={0.3}>
        <Loop kind="walk">
          <StickFigure
            head={[66, 150]}
            r={9}
            torso={[[66, 159], [66, 192]]}
            armR={[[66, 166], [78, 152], [88, 140]]}
            armL={[[66, 166], [56, 180], [58, 192]]}
            legL={[[66, 192], [61, 204]]}
            legR={[[66, 192], [71, 204]]}
          />
        </Loop>
      </PopIn>
      <PopIn delay={0.6}>
        <circle className="ink-line" cx={130} cy={88} r={10} />
        <path className="ink-line" d={line([130, 98], [134, 124])} />
        <path className="ink-line" d={line([130, 106], [114, 122], [97, 137])} />
        <path className="ink-line" d={line([130, 106], [141, 116], [139, 128])} />
        <path className="ink-line" d={line([134, 124], [148, 135], [164, 134])} />
        <path className="ink-line" d={line([134, 124], [142, 137], [158, 138])} />
      </PopIn>
      <PopIn delay={0.9}>
        <Loop kind="pulse" style={{ transformOrigin: '93px 139px' }}>
          <circle cx={93} cy={139} r={3} fill="#2b2a28" opacity={0.5} />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
