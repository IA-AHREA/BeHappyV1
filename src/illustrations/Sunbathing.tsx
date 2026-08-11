import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Toma el sol." — a continuous-line figure reclining on a lounger under a spinning sun. */
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
        <path className="ink-line" opacity={0.4} d="M28 176 L58 138 H158 L172 176" />
        <path className="ink-line" opacity={0.4} d="M40 176 V192 M160 176 V192" />
      </PopIn>
      <PopIn delay={0.6}>
        <Loop kind="breathe" style={{ transformOrigin: '90px 130px' }}>
          <DrawPath
            duration={1.2}
            d="M60 128 C52 126 46 120 46 112 C46 105 51 100 58 100 C65 100 70 105 70 112 C70 118 66 124 60 128"
          />
          <path className="ink-line" d="M60 128 C76 132 92 133 106 132" />
          <path className="ink-line" d="M106 132 C118 132 126 128 130 120" />
          <path className="ink-line" d="M130 120 C136 124 142 126 150 126" />
          <path className="ink-line" d="M78 130 C82 138 82 146 78 152" />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
