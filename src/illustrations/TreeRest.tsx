import { DrawPath, IllustrationSvg, Loop, PopIn, line } from './primitives';

/** "Haz una pausa." — leyendo en la banca bajo el árbol; hojas cayendo, flores al lado. */
export default function TreeRest() {
  return (
    <IllustrationSvg>
      <PopIn>
        <path className="ink-line" d="M132 190 Q136 150 132 118" />
        <DrawPath
          duration={1.4}
          d="M132 118 q-42 4 -44 -30 q-2 -30 30 -30 q6 -22 32 -20 q26 2 28 22 q30 -2 28 26 q-2 28 -40 30 q-18 2 -34 2 z"
        />
        <path
          className="ink-line"
          opacity={0.35}
          d="M104 76 q4 -4 8 0 M130 62 q4 -4 8 0 M156 82 q4 -4 8 0 M118 96 q4 -4 8 0 M146 100 q4 -4 8 0 M88 92 q4 -4 8 0"
        />
      </PopIn>
      <PopIn delay={0.5}>
        <path className="ink-line" opacity={0.5} d="M44 166 h74 M52 166 v28 M110 166 v28 M44 174 h74" />
        <Loop kind="breathe" style={{ transformOrigin: '78px 150px' }}>
          <circle className="ink-line" cx={72} cy={128} r={10} />
          <path className="ink-line" d={line([73, 138], [76, 166])} />
          <path className="ink-line" d={line([73, 144], [84, 152], [90, 157])} />
          <path className="ink-line" d={line([73, 144], [82, 154], [88, 160])} />
          <path className="ink-line" d="M84 162 L95 156 L106 162 M84 162 L95 166 L106 162 M95 156 V166" />
        </Loop>
        <path className="ink-line" d={line([76, 166], [96, 166], [96, 192], [102, 192])} />
        <path className="ink-line" d={line([76, 166], [90, 168], [88, 192], [94, 192])} />
      </PopIn>
      <PopIn delay={0.7}>
        <path className="ink-line" opacity={0.6} d="M180 194 v-10 M188 196 v-8" />
        <Loop kind="sway" style={{ transformOrigin: '184px 194px' }}>
          <circle className="ink-line" opacity={0.8} cx={180} cy={181} r={3} />
          <circle className="ink-line" opacity={0.8} cx={188} cy={185} r={2.6} />
        </Loop>
      </PopIn>
      <PopIn delay={0.8}>
        <Loop kind="fall">
          <path className="ink-line" opacity={0.6} d="M60 120 q6 -2 8 4 q-6 2 -8 -4 z" />
        </Loop>
        <Loop kind="fall" delay={1.1}>
          <path className="ink-line" opacity={0.6} d="M104 128 q6 -2 8 4 q-6 2 -8 -4 z" />
        </Loop>
        <Loop kind="fall" delay={2}>
          <path className="ink-line" opacity={0.6} d="M160 128 q6 -2 8 4 q-6 2 -8 -4 z" />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
