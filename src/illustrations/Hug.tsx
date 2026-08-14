import { IllustrationSvg, Loop, PopIn, line } from './primitives';

/** "Abraza fuerte." — abrazados en el sofá; en la mesita, dos tazas humeando. */
export default function Hug() {
  return (
    <IllustrationSvg>
      <PopIn delay={0.5}>
        <path className="ink-line" opacity={0.7} d="M62 152 Q62 118 82 116 H138 Q158 118 158 152" />
        <path className="ink-line" opacity={0.7} d="M56 138 q-8 2 -8 12 v14 q0 8 8 8 M164 138 q8 2 8 12 v14 q0 8 -8 8" />
        <path className="ink-line" opacity={0.5} d="M62 150 H158" />
        <path className="ink-line" opacity={0.7} d="M56 172 H164 M64 172 v10 M156 172 v10" />
      </PopIn>
      <PopIn>
        <Loop kind="breathe" style={{ transformOrigin: '110px 130px' }}>
          <circle className="ink-line" cx={98} cy={92} r={10} />
          <circle className="ink-line" cx={122} cy={92} r={10} />
          <path className="ink-line" d={line([101, 101], [99, 146])} />
          <path className="ink-line" d={line([119, 101], [121, 146])} />
          <path className="ink-line" d={line([101, 109], [115, 115], [127, 121])} />
          <path className="ink-line" d={line([119, 109], [105, 115], [93, 121])} />
          <path className="ink-line" d={line([99, 146], [92, 156], [92, 182], [86, 182])} />
          <path className="ink-line" d={line([99, 146], [106, 156], [104, 182], [110, 182])} />
          <path className="ink-line" d={line([121, 146], [128, 156], [128, 182], [134, 182])} />
          <path className="ink-line" d={line([121, 146], [116, 158], [118, 182], [124, 182])} />
        </Loop>
      </PopIn>
      <PopIn delay={0.6}>
        <Loop kind="pulse" style={{ transformOrigin: '110px 42px' }}>
          <path className="ink-line" d="M110 52 q-13 -11 -9 -19 q4 -7 9 -1 q5 -6 9 1 q4 8 -9 19 z" />
        </Loop>
      </PopIn>
      <PopIn delay={0.8}>
        <ellipse className="ink-line" opacity={0.7} cx={188} cy={150} rx={14} ry={4} />
        <path className="ink-line" opacity={0.7} d="M188 154 V182 M180 182 h16" />
        <path className="ink-line" opacity={0.8} d="M180 144 v-6 h7 v6 z M193 144 v-6 h7 v6 z" />
        <Loop kind="steam">
          <path className="ink-line" opacity={0.45} d="M183 134 q2 -4 0 -8" />
        </Loop>
        <Loop kind="steam" delay={0.9}>
          <path className="ink-line" opacity={0.45} d="M196 134 q2 -4 0 -8" />
        </Loop>
      </PopIn>
      <PopIn delay={0.5}>
        <path className="ink-line" opacity={0.4} d="M46 186 H174" />
      </PopIn>
    </IllustrationSvg>
  );
}
