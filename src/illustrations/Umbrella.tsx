import { DrawPath, IllustrationSvg, Loop, PopIn, StickFigure } from './primitives';

/** "Escucha la lluvia." — un muñeco de palo sostiene el paraguas mientras cae la lluvia. */
export default function Umbrella() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath
          duration={1.4}
          d="M60 76 C60 52 82 38 110 38 C138 38 160 52 160 76 C150 70 140 74 132 80 C124 74 114 70 106 76 C98 70 88 74 80 80 C72 74 68 70 60 76 Z"
        />
        <path className="ink-line" d="M110 38 V28" />
        <path className="ink-line" d="M110 76 V148 C110 156 118 156 118 148" />
      </PopIn>
      <PopIn delay={0.5}>
        <Loop kind="drop">
          <path className="ink-line" opacity={0.6} d="M40 60 l-6 16" />
        </Loop>
        <Loop kind="drop" delay={0.25}>
          <path className="ink-line" opacity={0.6} d="M64 40 l-6 16" />
        </Loop>
        <Loop kind="drop" delay={0.5}>
          <path className="ink-line" opacity={0.6} d="M150 44 l-6 16" />
        </Loop>
        <Loop kind="drop" delay={0.15}>
          <path className="ink-line" opacity={0.6} d="M176 66 l-6 16" />
        </Loop>
        <Loop kind="drop" delay={0.6}>
          <path className="ink-line" opacity={0.6} d="M30 100 l-6 16" />
        </Loop>
        <Loop kind="drop" delay={0.4}>
          <path className="ink-line" opacity={0.6} d="M182 104 l-6 16" />
        </Loop>
      </PopIn>
      <PopIn delay={0.7}>
        <StickFigure
          head={[94, 104]}
          torso={[[94, 114], [94, 150]]}
          armR={[[94, 122], [104, 132], [110, 130]]}
          armL={[[94, 122], [86, 136], [84, 148]]}
          legL={[[94, 150], [88, 168], [86, 186], [80, 186]]}
          legR={[[94, 150], [100, 168], [102, 186], [108, 186]]}
        />
        <path className="ink-line" opacity={0.4} d="M60 190 H160" />
      </PopIn>
    </IllustrationSvg>
  );
}
