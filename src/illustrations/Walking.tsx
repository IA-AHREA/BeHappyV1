import { DrawPath, IllustrationSvg, Loop, PopIn, StickFigure } from './primitives';

/** "Camina sin rumbo." — un muñeco de palo camina por el sendero, junto al letrero. */
export default function Walking() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath
          duration={2}
          className="ink-line"
          opacity={0.5}
          strokeDasharray="6 7"
          d="M20 190 Q70 168 60 140 Q50 112 104 104 Q160 96 150 64 Q146 48 170 40"
        />
      </PopIn>
      <PopIn delay={0.5}>
        <path className="ink-line" d="M174 130 V190" />
        <path className="ink-line" d="M174 140 h26 l10 8 l-10 8 h-26 z" />
        <path className="ink-line" opacity={0.55} d="M174 112 h-24 l-10 8 l10 8 h24 z" />
      </PopIn>
      <PopIn delay={0.8}>
        <Loop kind="walk">
          <StickFigure
            head={[94, 104]}
            torso={[[94, 114], [94, 150]]}
            armR={[[94, 122], [104, 134], [112, 144]]}
            armL={[[94, 122], [84, 134], [78, 146]]}
            legR={[[94, 150], [104, 166], [110, 184], [116, 184]]}
            legL={[[94, 150], [85, 167], [76, 182], [70, 181]]}
          />
        </Loop>
      </PopIn>
      <PopIn delay={0.4}>
        <Loop kind="spin" style={{ transformOrigin: '42px 46px' }}>
          <circle className="ink-line" opacity={0.55} cx={42} cy={46} r={12} />
          <path className="ink-line" opacity={0.55} d="M42 28 v-6 M42 64 v6 M24 46 h-6 M60 46 h6" />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
