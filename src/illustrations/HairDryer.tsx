import { DrawPath, IllustrationSvg, PopIn } from './primitives';

/** "Programa un plan realista." — someone blow-drying wild hair, unfazed. */
export default function HairDryer() {
  return (
    <IllustrationSvg>
      <PopIn>
        <circle className="ink-line" cx={88} cy={86} r={24} />
        <DrawPath
          opacity={0.85}
          d="M74 68 L48 40 M82 64 L66 32 M92 62 L88 30 M100 64 L110 34 M106 70 L126 48"
        />
        <circle className="ink-fill" cx={80} cy={83} r={2.6} />
        <circle className="ink-fill" cx={96} cy={83} r={2.6} />
        <path className="ink-line" d="M79 96 Q88 102 97 96" />
        <path className="ink-line" d="M88 110 L88 158" />
        <path className="ink-line" d="M88 158 L74 196 M88 158 L102 196" />
        <path className="ink-line" d="M88 122 L64 142" />
        <path className="ink-line" d="M88 122 L120 132 L148 124" />
        <ellipse className="ink-line" cx={90} cy={200} rx={42} ry={6} opacity={0.35} />
      </PopIn>
      <PopIn delay={0.5}>
        <path className="ink-line" d="M136 88 h30 a10 10 0 0 1 0 20 h-30 z" />
        <path className="ink-line" d="M136 92 h-12 v12 h12" />
        <path className="ink-line" d="M152 108 L146 128 h14 L164 108" />
        <DrawPath opacity={0.6} d="M122 94 Q108 86 100 76 M122 100 Q106 100 97 95" />
      </PopIn>
    </IllustrationSvg>
  );
}
