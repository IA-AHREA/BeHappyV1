import { IllustrationSvg, Loop, PopIn, StickFigure } from './primitives';

/** "Regálate silencio." — meditando sobre el tapete, dentro de un mandala punteado que gira. */
export default function Meditation() {
  return (
    <IllustrationSvg>
      <PopIn>
        <Loop kind="breathe" style={{ transformOrigin: '110px 108px' }}>
          <circle className="ink-line" cx={110} cy={108} r={62} opacity={0.35} />
        </Loop>
        <Loop kind="breathe" delay={0.6} style={{ transformOrigin: '110px 108px' }}>
          <circle className="ink-line" cx={110} cy={108} r={80} opacity={0.2} />
        </Loop>
        <Loop kind="spin" style={{ transformOrigin: '110px 108px' }}>
          <circle className="ink-line" cx={110} cy={108} r={50} opacity={0.45} strokeWidth={3} strokeDasharray="1 12" />
        </Loop>
      </PopIn>
      <PopIn delay={0.4}>
        <Loop kind="breathe" style={{ transformOrigin: '110px 128px' }}>
          <StickFigure
            head={[110, 84]}
            torso={[[110, 94], [110, 128]]}
            armL={[[110, 102], [96, 116], [87, 128]]}
            armR={[[110, 102], [124, 116], [133, 128]]}
            legL={[[110, 128], [86, 136], [112, 146]]}
            legR={[[110, 128], [134, 136], [108, 146]]}
          />
        </Loop>
        <path className="ink-line" opacity={0.5} d="M70 156 q40 12 80 0" />
        <path className="ink-line" opacity={0.3} d="M78 162 q32 8 64 0" />
      </PopIn>
    </IllustrationSvg>
  );
}
