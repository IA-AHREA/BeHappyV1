import { IllustrationSvg, Loop, PopIn, StickFigure } from './primitives';

/** "Regálate silencio." — un muñeco de palo medita con las piernas cruzadas entre anillos. */
export default function Meditation() {
  return (
    <IllustrationSvg>
      <PopIn>
        <Loop kind="breathe" style={{ transformOrigin: '110px 112px' }}>
          <circle className="ink-line" cx={110} cy={112} r={62} opacity={0.35} />
        </Loop>
        <Loop kind="breathe" delay={0.6} style={{ transformOrigin: '110px 112px' }}>
          <circle className="ink-line" cx={110} cy={112} r={80} opacity={0.2} />
        </Loop>
      </PopIn>
      <PopIn delay={0.4}>
        <Loop kind="breathe" style={{ transformOrigin: '110px 130px' }}>
          <StickFigure
            head={[110, 86]}
            torso={[[110, 96], [110, 130]]}
            armL={[[110, 104], [96, 118], [87, 130]]}
            armR={[[110, 104], [124, 118], [133, 130]]}
            legL={[[110, 130], [86, 138], [112, 148]]}
            legR={[[110, 130], [134, 138], [108, 148]]}
          />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
