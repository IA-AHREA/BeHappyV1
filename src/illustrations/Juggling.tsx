import { IllustrationSvg, Loop, PopIn, StickFigure } from './primitives';

/** "Aprende algo inútil." — malabarista en un escenario con telones. */
export default function Juggling() {
  return (
    <IllustrationSvg>
      <PopIn>
        <path className="ink-line" d="M20 30 Q110 20 200 30" />
        <path className="ink-line" opacity={0.6} d="M20 30 q22 10 44 0 q22 10 44 0 q22 10 44 0 q22 10 44 0 q22 10 24 0" />
        <Loop kind="sway" style={{ transformOrigin: '36px 32px' }}>
          <path className="ink-line" opacity={0.6} d="M30 32 Q36 90 26 148 M42 34 Q46 88 40 140" />
        </Loop>
        <Loop kind="sway" delay={0.6} style={{ transformOrigin: '184px 32px' }}>
          <path className="ink-line" opacity={0.6} d="M190 32 Q184 90 194 148 M178 34 Q174 88 180 140" />
        </Loop>
      </PopIn>
      <PopIn delay={0.3}>
        <Loop kind="walk">
          <StickFigure
            head={[110, 100]}
            torso={[[110, 110], [110, 146]]}
            armL={[[110, 118], [94, 124], [86, 110]]}
            armR={[[110, 118], [126, 124], [134, 110]]}
            legL={[[110, 146], [103, 164], [101, 184], [95, 184]]}
            legR={[[110, 146], [117, 164], [119, 184], [125, 184]]}
          />
        </Loop>
        <path className="ink-line" opacity={0.6} d="M36 188 H184" />
        <path className="ink-line" opacity={0.4} d="M24 196 Q110 208 196 196" />
      </PopIn>
      <PopIn delay={0.5}>
        <Loop kind="float">
          <circle className="ink-line" cx={80} cy={76} r={7} />
        </Loop>
      </PopIn>
      <PopIn delay={1}>
        <Loop kind="float" delay={0.5}>
          <circle className="ink-line" cx={110} cy={50} r={7} />
        </Loop>
      </PopIn>
      <PopIn delay={1.5}>
        <Loop kind="float" delay={1}>
          <circle className="ink-line" cx={140} cy={76} r={7} />
        </Loop>
      </PopIn>
      <PopIn delay={0.7}>
        <path className="ink-line" opacity={0.35} strokeDasharray="3 6" d="M78 64 Q110 28 142 64" />
      </PopIn>
    </IllustrationSvg>
  );
}
