import { DrawPath, IllustrationSvg, Loop, PopIn, StickFigure } from './primitives';

/** "Mira las estrellas." — telescopio en trípode bajo una constelación, entre pinos y colinas. */
export default function Telescope() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath duration={1.2} opacity={0.4} d="M30 44 L48 34 L66 40 L82 30 L98 38 L114 30" />
        <circle cx={30} cy={44} r={1.8} fill="#2b2a28" />
        <circle cx={48} cy={34} r={1.8} fill="#2b2a28" />
        <circle cx={66} cy={40} r={1.8} fill="#2b2a28" />
        <circle cx={82} cy={30} r={1.8} fill="#2b2a28" />
        <circle cx={98} cy={38} r={1.8} fill="#2b2a28" />
        <circle cx={114} cy={30} r={1.8} fill="#2b2a28" />
      </PopIn>
      <PopIn delay={0.6}>
        <Loop kind="twinkle">
          <path className="ink-line" d="M172 62 l2.5 6 l6 2.5 l-6 2.5 l-2.5 6 l-2.5 -6 l-6 -2.5 l6 -2.5 z" />
        </Loop>
        <Loop kind="twinkle" delay={0.5}>
          <path className="ink-line" opacity={0.8} d="M56 84 l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 l5 -2 z" />
        </Loop>
        <Loop kind="twinkle" delay={1}>
          <circle cx={140} cy={26} r={1.6} fill="#2b2a28" />
        </Loop>
        <Loop kind="twinkle" delay={0.8}>
          <circle cx={186} cy={30} r={1.6} fill="#2b2a28" />
        </Loop>
        <circle cx={160} cy={44} r={1.6} fill="#2b2a28" />
        <circle cx={38} cy={66} r={1.6} fill="#2b2a28" />
        <circle cx={200} cy={60} r={1.6} fill="#2b2a28" />
      </PopIn>
      <PopIn delay={0.3}>
        <DrawPath duration={0.6} d="M106 114 L162 66" strokeWidth={6} />
        <path className="ink-line" strokeWidth={3} d="M104 120 L112 112" />
        <path className="ink-line" opacity={0.7} d="M134 90 L114 168 M134 90 L154 168 M134 90 L134 162" />
        <path className="ink-line" opacity={0.5} d="M122 140 H146" />
      </PopIn>
      <PopIn delay={0.5}>
        <Loop kind="breathe" style={{ transformOrigin: '98px 196px' }}>
          <StickFigure
            head={[92, 118]}
            torso={[[94, 128], [98, 162]]}
            armR={[[95, 136], [106, 126], [111, 117]]}
            armL={[[95, 136], [86, 148], [84, 160]]}
            legL={[[98, 162], [92, 178], [90, 196], [84, 196]]}
            legR={[[98, 162], [104, 178], [106, 196], [112, 196]]}
          />
        </Loop>
        <path className="ink-line" opacity={0.4} d="M12 200 Q60 188 110 196 T208 192" />
        <path className="ink-line" opacity={0.6} d="M26 190 l8 -20 l8 20 z M30 190 l4 8" />
        <path className="ink-line" opacity={0.6} d="M188 186 l7 -18 l7 18 z M192 186 l3 8" />
      </PopIn>
    </IllustrationSvg>
  );
}
