import { IllustrationSvg, Loop, PopIn, line } from './primitives';

/** "Toma el sol." — un muñeco de palo reclinado en la tumbona, manos tras la cabeza. */
export default function Sunbathing() {
  return (
    <IllustrationSvg>
      <PopIn>
        <Loop kind="spin" style={{ transformOrigin: '110px 50px' }}>
          <path
            className="ink-line"
            opacity={0.8}
            d="M110 20 v10 M110 70 v10 M80 50 h10 M140 50 h10 M89 29 l7 7 M124 64 l7 7 M131 29 l-7 7 M96 64 l-7 7"
          />
        </Loop>
        <circle className="ink-line" cx={110} cy={50} r={16} />
      </PopIn>
      <PopIn delay={0.4}>
        <path className="ink-line" opacity={0.7} d="M52 120 L80 148 L170 148" />
        <path className="ink-line" opacity={0.7} d="M92 148 L88 170 M156 148 L160 170" />
        <path className="ink-line" opacity={0.4} d="M44 174 H186" />
      </PopIn>
      <PopIn delay={0.6}>
        <Loop kind="breathe" style={{ transformOrigin: '105px 135px' }}>
          <circle className="ink-line" cx={68} cy={122} r={10} />
          <path className="ink-line" d={line([76, 129], [108, 144])} />
          <path className="ink-line" d={line([82, 132], [76, 113], [63, 116])} />
          <path className="ink-line" d={line([108, 144], [130, 134], [148, 144])} />
          <path className="ink-line" d={line([108, 144], [134, 140], [152, 148])} />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
