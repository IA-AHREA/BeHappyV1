import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Escucha la lluvia." — someone under an umbrella as rain falls. */
export default function Umbrella() {
  return (
    <IllustrationSvg>
      <PopIn>
        <Loop kind="float">
          <DrawPath
            fill="#f7f3ea"
            d="M56 46 q-2 -16 16 -18 q6 -14 24 -12 q18 2 20 16 q16 0 16 14 q0 12 -14 12 h-62 q-12 0 -10 -12 q2 -10 10 0 z"
          />
        </Loop>
      </PopIn>
      <PopIn delay={0.4}>
        <Loop kind="drop">
          <path className="ink-line" d="M64 74 l-4 12" />
        </Loop>
        <Loop kind="drop" delay={0.3}>
          <path className="ink-line" d="M92 72 l-4 12" />
        </Loop>
        <Loop kind="drop" delay={0.6}>
          <path className="ink-line" d="M120 74 l-4 12" />
        </Loop>
        <Loop kind="drop" delay={0.9}>
          <path className="ink-line" d="M148 72 l-4 12" />
        </Loop>
        <Loop kind="drop" delay={0.45}>
          <path className="ink-line" d="M176 78 l-4 12" />
        </Loop>
      </PopIn>
      <PopIn delay={0.6}>
        <path className="ink-line" fill="#f7f3ea" d="M70 128 Q110 100 150 128 Q130 122 110 126 Q90 122 70 128 Z" />
        <path className="ink-line" d="M110 106 v-6 M110 126 v42 q0 8 8 8" />
        <circle className="ink-fill" cx={110} cy={142} r={8} />
        <path className="ink-line" d="M108 150 Q104 168 106 186 M112 150 Q116 168 114 186" />
        <path className="ink-line" opacity={0.35} d="M60 196 h100" />
      </PopIn>
    </IllustrationSvg>
  );
}
