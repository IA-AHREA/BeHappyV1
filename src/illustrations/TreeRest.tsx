import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Haz una pausa." — resting on a bench under a tree, leaves drifting down. */
export default function TreeRest() {
  return (
    <IllustrationSvg>
      <PopIn>
        <path className="ink-line" d="M84 190 Q90 140 86 108" />
        <DrawPath
          fill="#f7f3ea"
          d="M86 108 q-42 4 -44 -30 q-2 -30 30 -30 q6 -22 32 -20 q26 2 28 22 q30 -2 28 26 q-2 28 -40 30 q-18 2 -34 2 z"
        />
      </PopIn>
      <PopIn delay={0.5}>
        <path className="ink-line" opacity={0.85} d="M110 158 h74 M118 158 v32 M176 158 v32 M110 166 h74" />
        <circle className="ink-fill" cx={140} cy={130} r={8} />
        <path className="ink-line" d="M142 138 Q146 150 146 158 M144 146 L158 150" />
        <path className="ink-line" opacity={0.9} d="M146 158 L146 178 L160 178" />
      </PopIn>
      <PopIn delay={0.8}>
        <Loop kind="fall">
          <path className="accent-fill" d="M70 110 q6 -2 8 4 q-6 2 -8 -4 z" />
        </Loop>
        <Loop kind="fall" delay={1.1}>
          <path className="accent-fill" d="M100 116 q6 -2 8 4 q-6 2 -8 -4 z" />
        </Loop>
        <Loop kind="fall" delay={2}>
          <path className="accent-fill" d="M56 122 q6 -2 8 4 q-6 2 -8 -4 z" />
        </Loop>
      </PopIn>
      <PopIn delay={0.6}>
        <path className="ink-line" opacity={0.35} d="M40 196 h150" />
      </PopIn>
    </IllustrationSvg>
  );
}
