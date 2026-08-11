import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Acaricia a un perro." — a dog with a wagging tail, greeted by an outstretched hand. */
export default function Dog() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath d="M112 178 Q108 132 138 124" />
        <circle className="ink-line" cx={148} cy={106} r={16} />
        <path className="ink-line" d="M138 94 q-8 -8 -4 -16 q8 2 10 10" />
        <path className="ink-line" d="M160 96 q8 -8 4 -16 q-8 2 -10 10" />
        <circle className="ink-fill" cx={143} cy={104} r={2.4} />
        <circle className="ink-fill" cx={153} cy={104} r={2.4} />
        <path className="ink-line" d="M145 112 Q148 115 151 112" />
        <circle className="ink-fill" cx={148} cy={110} r={1.8} />
        <path className="ink-line" d="M120 178 L120 156 M136 178 L136 158" />
        <path className="ink-line" d="M112 178 h44 Q166 178 164 160 Q162 140 150 132" />
        <Loop kind="wag" style={{ transformOrigin: '164px 160px' }}>
          <path className="ink-line" d="M164 160 Q184 152 188 136" />
        </Loop>
        <path className="ink-line" opacity={0.35} d="M96 184 h96" />
      </PopIn>
      <PopIn delay={0.5}>
        <path className="ink-line" d="M20 70 Q70 62 122 84" />
        <path className="ink-line" d="M122 84 q8 2 6 8 q-2 5 -9 2" />
        <path className="ink-line" opacity={0.55} d="M132 70 q4 -5 2 -10 M140 76 q5 -4 5 -10" />
      </PopIn>
      <PopIn delay={0.8}>
        <Loop kind="pulse" style={{ transformOrigin: '184px 96px' }}>
          <path className="accent-fill" d="M184 104 q-10 -8 -7 -15 q3 -6 7 -1 q4 -5 7 1 q3 7 -7 15 z" />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
