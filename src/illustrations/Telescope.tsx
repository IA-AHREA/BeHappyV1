import { DrawPath, IllustrationSvg, Loop, PopIn, StickFigure } from './primitives';

/** "Mira las estrellas." — un muñeco de palo observa el cielo por un telescopio en trípode. */
export default function Telescope() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath duration={0.6} d="M118 100 L158 68" strokeWidth={5} />
        <path className="ink-line" opacity={0.7} d="M138 84 L124 150 M138 84 L152 150 M138 84 L138 148" />
      </PopIn>
      <PopIn delay={0.4}>
        <Loop kind="breathe" style={{ transformOrigin: '106px 186px' }}>
          <StickFigure
            head={[100, 104]}
            torso={[[102, 114], [106, 150]]}
            armR={[[103, 122], [114, 112], [121, 103]]}
            armL={[[103, 122], [94, 134], [92, 146]]}
            legL={[[106, 150], [100, 168], [98, 186], [92, 186]]}
            legR={[[106, 150], [112, 168], [114, 186], [120, 186]]}
          />
        </Loop>
        <path className="ink-line" opacity={0.4} d="M70 190 H170" />
      </PopIn>
      <PopIn delay={0.6}>
        <Loop kind="twinkle">
          <path className="ink-line" d="M150 50 l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3 l8 -3 z" />
        </Loop>
        <Loop kind="twinkle" delay={0.5}>
          <path className="ink-line" d="M180 84 l2.5 6 l6 2.5 l-6 2.5 l-2.5 6 l-2.5 -6 l-6 -2.5 l6 -2.5 z" />
        </Loop>
        <Loop kind="twinkle" delay={1}>
          <circle cx={130} cy={60} r={2} fill="#2b2a28" />
        </Loop>
        <Loop kind="twinkle" delay={0.8}>
          <circle cx={168} cy={40} r={2} fill="#2b2a28" />
        </Loop>
      </PopIn>
      <PopIn delay={0.5}>
        <path className="ink-line" opacity={0.55} d="M34 64 a20 20 0 1 1 22 -22" />
      </PopIn>
    </IllustrationSvg>
  );
}
