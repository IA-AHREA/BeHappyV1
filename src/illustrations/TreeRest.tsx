import { DrawPath, IllustrationSvg, Loop, PopIn, line } from './primitives';

/** "Haz una pausa." — un muñeco de palo sentado en la banca bajo el árbol, hojas cayendo. */
export default function TreeRest() {
  return (
    <IllustrationSvg>
      <PopIn>
        <path className="ink-line" d="M132 190 Q136 150 132 118" />
        <DrawPath
          duration={1.4}
          d="M132 118 q-42 4 -44 -30 q-2 -30 30 -30 q6 -22 32 -20 q26 2 28 22 q30 -2 28 26 q-2 28 -40 30 q-18 2 -34 2 z"
        />
      </PopIn>
      <PopIn delay={0.5}>
        <path className="ink-line" opacity={0.5} d="M44 166 h74 M52 166 v28 M110 166 v28 M44 174 h74" />
        <Loop kind="breathe" style={{ transformOrigin: '75px 150px' }}>
          <circle className="ink-line" cx={72} cy={128} r={10} />
          <path className="ink-line" d={line([73, 138], [76, 166])} />
          <path className="ink-line" d={line([73, 144], [84, 154], [92, 164])} />
          <path className="ink-line" d={line([73, 144], [64, 156], [62, 166])} />
          <path className="ink-line" d={line([76, 166], [96, 166], [96, 192], [102, 192])} />
          <path className="ink-line" d={line([76, 166], [90, 168], [88, 192], [94, 192])} />
        </Loop>
      </PopIn>
      <PopIn delay={0.8}>
        <Loop kind="fall">
          <path className="ink-line" opacity={0.6} d="M60 120 q6 -2 8 4 q-6 2 -8 -4 z" />
        </Loop>
        <Loop kind="fall" delay={1.1}>
          <path className="ink-line" opacity={0.6} d="M100 126 q6 -2 8 4 q-6 2 -8 -4 z" />
        </Loop>
        <Loop kind="fall" delay={2}>
          <path className="ink-line" opacity={0.6} d="M150 132 q6 -2 8 4 q-6 2 -8 -4 z" />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
