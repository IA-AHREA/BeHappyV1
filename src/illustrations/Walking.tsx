import { DrawPath, Face, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Camina sin rumbo." — a solitary walk along a winding path past a signpost. */
export default function Walking() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath
          className="ink-line"
          opacity={0.6}
          strokeDasharray="7 8"
          d="M20 190 Q70 168 60 140 Q50 112 104 104 Q160 96 150 64 Q146 48 170 40"
        />
      </PopIn>
      <PopIn delay={0.4}>
        <path className="ink-line" d="M174 150 v40 M160 150 h28 l-6 -12 h-16 z" />
        <path className="ink-line" opacity={0.85} d="M162 128 h24 l8 8 l-8 8 h-24 z M186 106 h-24 l-8 8 l8 8 h24 z" />
      </PopIn>
      <PopIn delay={0.7}>
        <Loop kind="walk">
          <circle className="ink-fill" cx={94} cy={118} r={8} />
          <Face cx={94} cy={118} r={8} expression="content" />
          <path className="ink-line" d="M94 126 L94 152" />
          <path className="ink-line" d="M94 134 L80 146 M94 134 L108 144" />
          <path className="ink-line" d="M94 152 L82 176 M94 152 L106 174" />
        </Loop>
      </PopIn>
      <PopIn delay={1}>
        <circle className="ink-line" cx={42} cy={46} r={12} opacity={0.7} />
        <path className="ink-line" opacity={0.7} d="M42 28 v-6 M42 64 v6 M24 46 h-6 M60 46 h6" />
      </PopIn>
    </IllustrationSvg>
  );
}
