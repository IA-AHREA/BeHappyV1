import { IllustrationSvg, Loop, PopIn } from './primitives';

/** "Mira las estrellas." — a telescope pointed at a twinkling night sky. */
export default function Telescope() {
  return (
    <IllustrationSvg>
      <PopIn>
        <path className="ink-line" d="M172 44 a18 18 0 1 0 4 30 a15 15 0 0 1 -4 -30 z" />
      </PopIn>
      <PopIn delay={0.3}>
        <Loop kind="twinkle">
          <path className="accent-fill" d="M50 40 l2.5 6 l6 2.5 l-6 2.5 l-2.5 6 l-2.5 -6 l-6 -2.5 l6 -2.5 z" />
        </Loop>
        <Loop kind="twinkle" delay={0.5}>
          <path className="accent-fill" d="M96 28 l2.5 6 l6 2.5 l-6 2.5 l-2.5 6 l-2.5 -6 l-6 -2.5 l6 -2.5 z" />
        </Loop>
        <Loop kind="twinkle" delay={1}>
          <circle className="ink-fill" cx={76} cy={66} r={2.4} />
        </Loop>
        <Loop kind="twinkle" delay={1.3}>
          <circle className="ink-fill" cx={126} cy={48} r={2.4} />
        </Loop>
        <Loop kind="twinkle" delay={0.8}>
          <circle className="ink-fill" cx={140} cy={80} r={2.4} />
        </Loop>
      </PopIn>
      <PopIn delay={0.6}>
        <path className="ink-line" fill="#f7f3ea" d="M60 158 L118 108 M64 150 L112 108 L124 116 L72 160 Z" />
        <path className="ink-line" opacity={0.8} d="M92 138 L74 190 M92 138 L112 190 M92 138 L92 190" />
      </PopIn>
      <PopIn delay={0.9}>
        <circle className="ink-fill" cx={146} cy={140} r={8} />
        <path className="ink-line" d="M146 148 Q148 166 146 190 M146 156 L128 146" />
        <path className="ink-line" opacity={0.7} d="M146 190 l-8 0 M146 190 l0 0" />
      </PopIn>
      <PopIn delay={0.6}>
        <path className="ink-line" opacity={0.35} d="M40 194 h140" />
      </PopIn>
    </IllustrationSvg>
  );
}
