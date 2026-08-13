import { DrawPath, IllustrationSvg, Loop, PopIn, StickFigure } from './primitives';

/** "Programa un plan realista." — un muñeco de palo se seca el pelo alborotado con la secadora. */
export default function HairDryer() {
  return (
    <IllustrationSvg>
      <PopIn>
        <StickFigure
          head={[95, 88]}
          torso={[[95, 98], [95, 134]]}
          armR={[[95, 106], [116, 120], [137, 112]]}
          armL={[[95, 106], [84, 120], [80, 132]]}
          legL={[[95, 134], [88, 154], [86, 174], [80, 174]]}
          legR={[[95, 134], [102, 154], [104, 174], [112, 174]]}
        />
        <path className="ink-line" opacity={0.4} d="M60 178 H150" />
      </PopIn>
      <PopIn delay={0.5}>
        <DrawPath duration={0.6} d="M130 86 h26 q6 0 6 7 t-6 7 h-26 z" />
        <path className="ink-line" d="M130 89 L116 90 L116 96 L130 97" />
        <path className="ink-line" d="M142 100 L137 112" />
        <path className="ink-line" opacity={0.5} d="M160 98 C170 108 170 122 162 134" />
        <Loop kind="twinkle">
          <path className="ink-line" opacity={0.4} d="M112 90 L106 88 M112 95 L106 95" />
        </Loop>
      </PopIn>
      <PopIn delay={0.7}>
        <Loop kind="sway" style={{ transformOrigin: '95px 80px' }}>
          <path
            className="ink-line"
            opacity={0.55}
            d="M90 79 C84 68 76 62 66 60 M95 78 C93 64 88 54 80 48 M100 78 C102 64 100 52 96 42 M104 81 C110 71 114 60 112 50"
          />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
