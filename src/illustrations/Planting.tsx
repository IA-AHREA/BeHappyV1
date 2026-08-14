import { DrawPath, GrowIn, IllustrationSvg, Loop, PopIn, StickFigure, line } from './primitives';

/** "Planta algo." — maceta frondosa con platito; un muñeco de palo la riega. */
export default function Planting() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath duration={0.9} d="M84 148 H136 L130 186 H90 Z" />
        <path className="ink-line" opacity={0.5} d="M78 190 H142 M82 190 q28 8 56 0" />
        <path className="ink-line" opacity={0.4} d="M92 156 L88 182 M110 156 L110 184 M128 156 L132 182" />
      </PopIn>
      <GrowIn style={{ transformOrigin: '110px 148px' }}>
        <path className="ink-line" d="M110 148 C106 120 110 96 108 74" />
        <path className="ink-line" d="M110 130 C92 126 84 112 86 94 C102 98 112 112 110 130 Z" />
        <path className="ink-line" d="M109 112 C126 108 134 92 132 76 C116 78 108 94 109 112 Z" />
        <path className="ink-line" d="M108 90 C96 86 90 76 91 64 C103 68 110 78 108 90 Z" />
        <path className="ink-line" opacity={0.6} d="M96 148 q-8 10 -18 12 M124 148 q8 10 18 12" />
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
