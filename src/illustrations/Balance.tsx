import { DrawPath, IllustrationSvg, Loop, PopIn, StickFigure } from './primitives';

/** "Vive el momento." — un muñeco de palo en equilibrio con pértiga entre PASADO y FUTURO. */
export default function Balance() {
  return (
    <IllustrationSvg>
      <PopIn>
        <path className="ink-line" opacity={0.4} d="M40 180 V96 M180 180 V96" />
        <DrawPath duration={1.2} d="M40 96 C90 108 130 108 180 96" />
        <text x={16} y={196} fontFamily="Nunito Sans, sans-serif" fontSize={10} fill="#6b665c" letterSpacing={2}>
          PASADO
        </text>
        <text x={150} y={196} fontFamily="Nunito Sans, sans-serif" fontSize={10} fill="#6b665c" letterSpacing={2}>
          FUTURO
        </text>
      </PopIn>
      <PopIn delay={0.6}>
        <Loop kind="sway" style={{ transformOrigin: '110px 103px' }}>
          <StickFigure
            head={[110, 30]}
            torso={[[110, 40], [110, 72]]}
            armL={[[110, 48], [99, 55], [88, 59]]}
            armR={[[110, 48], [121, 55], [132, 59]]}
            legL={[[110, 72], [105, 88], [104, 103]]}
            legR={[[110, 72], [115, 88], [117, 103]]}
          />
          <path className="ink-line" d="M56 62 L164 57" />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
