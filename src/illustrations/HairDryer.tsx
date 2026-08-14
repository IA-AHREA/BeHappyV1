import { DrawPath, IllustrationSvg, Loop, PopIn, StickFigure } from './primitives';

/** "Programa un plan realista." — secándose el pelo alborotado frente al espejo de pared. */
export default function HairDryer() {
  return (
    <IllustrationSvg>
      <PopIn>
        <StickFigure
          head={[82, 88]}
          torso={[[82, 98], [82, 134]]}
          armR={[[82, 106], [103, 120], [124, 112]]}
          armL={[[82, 106], [71, 120], [67, 132]]}
          legL={[[82, 134], [75, 154], [73, 174], [67, 174]]}
          legR={[[82, 134], [89, 154], [91, 174], [99, 174]]}
        />
        <path className="ink-line" opacity={0.4} d="M60 178 H150" />
      </PopIn>
      <PopIn delay={0.5}>
        <DrawPath duration={0.6} d="M117 86 h26 q6 0 6 7 t-6 7 h-26 z" />
        <path className="ink-line" d="M117 89 L103 90 L103 96 L117 97" />
        <path className="ink-line" d="M129 100 L124 112" />
        <path className="ink-line" opacity={0.5} d="M124 114 q-6 16 2 30" />
        <Loop kind="twinkle">
          <path className="ink-line" opacity={0.4} d="M99 90 L93 88 M99 95 L93 95" />
        </Loop>
      </PopIn>
      <PopIn delay={0.7}>
        <Loop kind="sway" style={{ transformOrigin: '82px 80px' }}>
          <path
            className="ink-line"
            opacity={0.55}
            d="M77 79 C71 68 63 62 53 60 M82 78 C80 64 75 54 67 48 M87 78 C89 64 87 52 83 42 M91 81 C97 71 101 60 99 50"
          />
        </Loop>
      </PopIn>
      <PopIn delay={0.9}>
        <DrawPath duration={1} d="M156 54 h40 q6 0 6 6 v76 q0 6 -6 6 h-40 q-6 0 -6 -6 v-76 q0 -6 6 -6 z" />
        <path
          className="ink-line"
          opacity={0.35}
          d="M158 60 h36 q2 0 2 2 v72 q0 2 -2 2 h-36 q-2 0 -2 -2 v-72 q0 -2 2 -2 z"
        />
        <circle className="ink-line" opacity={0.4} cx={176} cy={88} r={8} />
        <path className="ink-line" opacity={0.35} d="M171 81 l-3 -5 M176 79 l0 -6 M181 81 l3 -5" />
        <path className="ink-line" opacity={0.4} d="M176 96 L176 116 M170 122 q6 -6 12 0" />
      </PopIn>
    </IllustrationSvg>
  );
}
