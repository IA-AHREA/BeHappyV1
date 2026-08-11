import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Aprende algo inútil." — a continuous-line figure juggling three balls just for the joy of it. */
export default function Juggling() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath duration={1} d="M110 92 C102 91 96 97 96 105 C96 111 100 115 106 117" />
        <path className="ink-line" d="M110 92 C118 91 124 97 122 103 C121 108 117 112 112 113" />
        <path className="ink-line" d="M106 117 C100 124 96 134 98 146 C99 154 103 160 109 164" />
        <path className="ink-line" d="M109 164 C111 174 109 184 104 192" />
        <path className="ink-line" d="M109 164 C116 170 120 180 117 192" />
        <path className="ink-line" d="M106 117 C96 110 88 100 84 88" />
        <path className="ink-line" d="M112 113 C122 106 130 96 134 84" />
      </PopIn>
      <PopIn delay={0.4}>
        <Loop kind="float">
          <circle className="ink-line" cx={80} cy={72} r={7} />
        </Loop>
      </PopIn>
      <PopIn delay={0.9}>
        <Loop kind="float" delay={0.5}>
          <circle className="ink-line" cx={110} cy={46} r={7} />
        </Loop>
      </PopIn>
      <PopIn delay={1.4}>
        <Loop kind="float" delay={1}>
          <circle className="ink-line" cx={140} cy={72} r={7} />
        </Loop>
      </PopIn>
      <PopIn delay={0.6}>
        <path className="ink-line" opacity={0.35} strokeDasharray="3 6" d="M78 60 Q110 24 142 60" />
      </PopIn>
    </IllustrationSvg>
  );
}
