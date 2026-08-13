import { IllustrationSvg, Loop, PopIn, StickFigure, line } from './primitives';

/** "Acaricia a un perro." — un muñeco de palo en cuclillas acaricia al perro; la cola menea. */
export default function Dog() {
  return (
    <IllustrationSvg>
      <PopIn>
        <ellipse className="ink-line" cx={146} cy={166} rx={30} ry={17} />
        <circle className="ink-line" cx={113} cy={137} r={13} />
        <path className="ink-line" d="M110 125 l-5 -13 l11 5" />
        <circle cx={107} cy={136} r={1.8} fill="#2b2a28" />
        <path className="ink-line" d="M101 143 q4 3 8 1" />
        <path className="ink-line" d="M130 182 V196 M158 182 V196" />
        <Loop kind="wag" style={{ transformOrigin: '172px 161px' }}>
          <path className="ink-line" d="M172 160 q14 -4 12 -18" />
        </Loop>
      </PopIn>
      <PopIn delay={0.5}>
        <StickFigure
          head={[50, 112]}
          torso={[[50, 122], [54, 152]]}
          armL={[[52, 130], [44, 144], [46, 154]]}
          legR={[[54, 152], [72, 164], [66, 182], [74, 183]]}
          legL={[[54, 152], [46, 168], [42, 184], [50, 185]]}
        />
        <Loop kind="sway" style={{ transformOrigin: '52px 130px' }}>
          <path className="ink-line" d={line([52, 130], [76, 136], [98, 130])} />
        </Loop>
      </PopIn>
      <PopIn delay={0.7}>
        <path className="ink-line" opacity={0.4} d="M28 188 H200" />
      </PopIn>
    </IllustrationSvg>
  );
}
