import { IllustrationSvg, Loop, PopIn, StickFigure, line } from './primitives';

/** "Acaricia a un perro." — arrodillado le ofrece un hueso al perro; correa floja y cola meneando. */
export default function Dog() {
  return (
    <IllustrationSvg>
      <PopIn>
        <ellipse className="ink-line" cx={148} cy={158} rx={28} ry={15} />
        <circle className="ink-line" cx={112} cy={138} r={12} />
        <path className="ink-line" d="M108 127 l-4 -12 l10 4" />
        <circle cx={106} cy={137} r={1.8} fill="#2b2a28" />
        <path className="ink-line" d="M100 144 q4 3 8 1" />
        <path className="ink-line" opacity={0.7} d="M117 147 q6 5 13 3" />
        <path className="ink-line" d="M128 170 V190 M140 172 V191 M156 172 V191 M168 170 V190" />
        <path className="ink-line" opacity={0.6} d="M128 190 h5 M140 191 h5 M156 191 h5 M168 190 h5" />
        <Loop kind="wag" style={{ transformOrigin: '174px 151px' }}>
          <path className="ink-line" d="M174 150 q10 -8 8 -18" />
        </Loop>
      </PopIn>
      <PopIn delay={0.5}>
        <StickFigure
          head={[46, 106]}
          torso={[[46, 116], [50, 148]]}
          armL={[[48, 124], [40, 138], [42, 150]]}
          legR={[[50, 148], [68, 158], [64, 178], [72, 179]]}
          legL={[[50, 148], [42, 164], [38, 180], [46, 181]]}
        />
        <Loop kind="sway" style={{ transformOrigin: '48px 124px' }}>
          <path className="ink-line" d={line([48, 124], [70, 132], [88, 136])} />
          <path className="ink-line" strokeWidth={3} d="M86 135 L97 133" />
          <circle className="ink-line" cx={85} cy={132} r={2.6} />
          <circle className="ink-line" cx={85} cy={138} r={2.6} />
          <circle className="ink-line" cx={98} cy={130} r={2.6} />
          <circle className="ink-line" cx={98} cy={136} r={2.6} />
        </Loop>
        <path className="ink-line" opacity={0.45} d="M43 151 Q76 172 118 150" />
      </PopIn>
      <PopIn delay={0.7}>
        <path className="ink-line" opacity={0.4} d="M26 190 H200" />
      </PopIn>
    </IllustrationSvg>
  );
}
