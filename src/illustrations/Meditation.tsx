import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Regálate silencio." — a continuous-line figure meditating inside soft breathing rings. */
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
        <Loop kind="breathe" style={{ transformOrigin: '110px 112px' }}>
          <DrawPath duration={1} d="M110 84 C100 83 92 91 92 101 C92 109 97 115 105 117" />
          <path className="ink-line" d="M110 84 C120 83 128 91 128 101 C128 109 123 115 115 117" />
          <path className="ink-line" d="M105 117 C96 122 90 130 90 140" />
          <path className="ink-line" d="M115 117 C124 122 130 130 130 140" />
          <path className="ink-line" d="M90 140 C74 148 66 150 54 148" />
          <path className="ink-line" d="M130 140 C146 148 154 150 166 148" />
          <path className="ink-line" d="M54 148 C60 154 70 156 78 152" />
          <path className="ink-line" d="M166 148 C160 154 150 156 142 152" />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
