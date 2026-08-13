import { DrawPath, GrowIn, IllustrationSvg, Loop, PopIn, StickFigure, line } from './primitives';

/** "Planta algo." — un muñeco de palo riega la maceta donde crece la planta. */
export default function Planting() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath duration={0.9} d="M76 150 H144 L134 194 H86 Z" />
        <path className="ink-line" opacity={0.5} d="M84 158 L78 186 M100 158 L96 190 M120 158 L124 190 M136 158 L142 186" />
      </PopIn>
      <GrowIn style={{ transformOrigin: '110px 150px' }}>
        <path className="ink-line" d="M110 150 C108 122 110 96 110 74" />
        <path className="ink-line" d="M110 96 C92 92 86 76 88 60 C106 62 112 80 110 96 Z" />
        <path className="ink-line" d="M110 84 C128 80 136 64 134 48 C116 50 108 68 110 84 Z" />
      </GrowIn>
      <PopIn delay={0.7}>
        <StickFigure
          head={[178, 112]}
          torso={[[178, 122], [178, 158]]}
          armL={[[178, 130], [170, 144], [172, 156]]}
          legL={[[178, 158], [172, 174], [170, 190], [164, 190]]}
          legR={[[178, 158], [184, 174], [186, 190], [192, 190]]}
        />
        <Loop kind="sway" style={{ transformOrigin: '178px 130px' }}>
          <path className="ink-line" d={line([178, 130], [164, 122], [155, 107])} />
          <g transform="rotate(-20 145 102)">
            <path className="ink-line" d="M132 94 h26 v16 h-26 z" />
            <path className="ink-line" d="M132 98 L117 108" />
            <path className="ink-line" d="M158 98 q10 -2 12 6" />
          </g>
        </Loop>
        <path className="ink-line" opacity={0.4} d="M60 194 H206" />
      </PopIn>
      <PopIn delay={0.9}>
        <Loop kind="drop">
          <path className="ink-line" opacity={0.6} d="M112 116 l-3 10" />
        </Loop>
        <Loop kind="drop" delay={0.3}>
          <path className="ink-line" opacity={0.6} d="M120 120 l-3 10" />
        </Loop>
        <Loop kind="drop" delay={0.6}>
          <path className="ink-line" opacity={0.6} d="M116 126 l-3 10" />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
