import { IllustrationSvg, Loop, PopIn, StickFigure } from './primitives';

/** "Baila en la cocina." — un muñeco de palo bailando junto a la estufa, notas flotando. */
export default function KitchenDance() {
  return (
    <IllustrationSvg>
      <PopIn delay={0.5}>
        <path
          className="ink-line"
          opacity={0.4}
          d="M14 190 H120 M100 190 V158 H150 V190 M106 166 h10 M106 178 h10 M128 166 h10 M128 178 h10"
        />
      </PopIn>
      <PopIn>
        <Loop kind="walk">
          <StickFigure
            head={[72, 100]}
            torso={[[72, 110], [72, 144]]}
            armL={[[72, 118], [54, 122], [46, 108]]}
            armR={[[72, 118], [90, 122], [98, 108]]}
            legL={[[72, 144], [58, 162], [54, 182], [48, 183]]}
            legR={[[72, 144], [86, 162], [90, 182], [96, 183]]}
          />
        </Loop>
      </PopIn>
      <PopIn delay={0.7}>
        <Loop kind="float">
          <circle className="ink-line" cx={150} cy={60} r={5} />
          <path className="ink-line" d="M155 60 V32 h12" />
        </Loop>
      </PopIn>
      <PopIn delay={1}>
        <Loop kind="float" delay={0.4}>
          <circle className="ink-line" cx={46} cy={90} r={4.4} />
          <path className="ink-line" d="M50 90 V70" />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
