import { IllustrationSvg, Loop, PopIn } from './primitives';

/** "Regálate silencio." — a seated figure meditating inside soft breathing rings. */
export default function Meditation() {
  return (
    <IllustrationSvg>
      <PopIn>
        <Loop kind="breathe" style={{ transformOrigin: '110px 112px' }}>
          <circle className="ink-line" cx={110} cy={112} r={62} opacity={0.2} />
        </Loop>
        <Loop kind="breathe" delay={0.6} style={{ transformOrigin: '110px 112px' }}>
          <circle className="ink-line" cx={110} cy={112} r={80} opacity={0.1} />
        </Loop>
      </PopIn>
      <PopIn delay={0.4}>
        <Loop kind="breathe" style={{ transformOrigin: '110px 130px' }}>
          <circle className="ink-fill" cx={110} cy={84} r={11} />
          <path className="ink-line" d="M110 95 Q106 120 108 138" />
          <path className="ink-line" d="M108 108 Q88 118 84 134 M110 108 Q132 118 136 134" />
          <path className="ink-line" d="M108 138 Q84 142 74 152 Q94 158 110 152 Q126 158 146 152 Q136 142 112 138" />
          <circle className="ink-fill" cx={84} cy={136} r={3} />
          <circle className="ink-fill" cx={136} cy={136} r={3} />
        </Loop>
      </PopIn>
      <PopIn delay={0.6}>
        <path className="ink-line" opacity={0.35} d="M56 168 h108" />
      </PopIn>
    </IllustrationSvg>
  );
}
