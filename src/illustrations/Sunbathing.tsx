import { IllustrationSvg, Loop, PopIn, line } from './primitives';

/** "Toma el sol." — en la playa: mar de fondo, tumbona, gafas de sol y chanclas. */
export default function Sunbathing() {
  return (
    <IllustrationSvg>
      <PopIn>
        <Loop kind="spin" style={{ transformOrigin: '110px 46px' }}>
          <path
            className="ink-line"
            opacity={0.8}
            d="M110 18 v9 M110 65 v9 M82 46 h9 M139 46 h9 M90 26 l7 7 M123 59 l7 7 M130 26 l-7 7 M97 59 l-7 7"
          />
        </Loop>
        <circle className="ink-line" cx={110} cy={46} r={15} />
      </PopIn>
      <PopIn delay={0.3}>
        <Loop kind="breathe" style={{ transformOrigin: '110px 112px' }}>
          <path
            className="ink-line"
            opacity={0.35}
            d="M14 108 q8 -5 16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0"
          />
          <path className="ink-line" opacity={0.25} d="M26 118 q8 -4 16 0 t16 0 t16 0 M138 118 q8 -4 16 0 t16 0 t16 0" />
        </Loop>
      </PopIn>
      <PopIn delay={0.45}>
        <path className="ink-line" opacity={0.7} d="M52 124 L80 152 L170 152" />
        <path className="ink-line" opacity={0.7} d="M92 152 L88 174 M156 152 L160 174" />
        <ellipse className="ink-line" opacity={0.6} cx={66} cy={182} rx={7} ry={3.6} />
        <ellipse className="ink-line" opacity={0.6} cx={84} cy={184} rx={7} ry={3.6} />
        <path className="ink-line" opacity={0.6} d="M63 180 l3 3 M81 182 l3 3" />
        <path className="ink-line" opacity={0.4} d="M40 194 H190" />
      </PopIn>
      <PopIn delay={0.6}>
        <Loop kind="breathe" style={{ transformOrigin: '105px 138px' }}>
          <circle className="ink-line" cx={68} cy={126} r={10} />
          <path className="ink-line" strokeWidth={3.4} d="M62 124 h5 M71 124 h5" />
          <path className="ink-line" d={line([76, 133], [108, 148])} />
          <path className="ink-line" d={line([82, 136], [76, 117], [63, 120])} />
          <path className="ink-line" d={line([108, 148], [130, 138], [148, 148])} />
          <path className="ink-line" d={line([108, 148], [134, 144], [152, 152])} />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
