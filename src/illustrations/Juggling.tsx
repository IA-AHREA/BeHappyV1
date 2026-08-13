import { IllustrationSvg, Loop, PopIn, StickFigure } from './primitives';

/** "Aprende algo inútil." — un muñeco de palo hace malabares con tres pelotas. */
export default function Juggling() {
  return (
    <IllustrationSvg>
      <PopIn>
        <Loop kind="walk">
          <StickFigure
            head={[110, 96]}
            torso={[[110, 106], [110, 142]]}
            armL={[[110, 114], [94, 120], [86, 106]]}
            armR={[[110, 114], [126, 120], [134, 106]]}
            legL={[[110, 142], [103, 160], [101, 180], [95, 180]]}
            legR={[[110, 142], [117, 160], [119, 180], [125, 180]]}
          />
        </Loop>
        <path className="ink-line" opacity={0.4} d="M70 184 H150" />
      </PopIn>
      <PopIn delay={0.4}>
        <Loop kind="float">
          <circle className="ink-line" cx={80} cy={72} r={7} />
        </Loop>
      </PopIn>
      <PopIn delay={0.9}>
        <Loop kind="float" delay={0.5}>
          <circle className="ink-line" cx={110} cy={46} r={7} />
        </Loop>
      </PopIn>
      <PopIn delay={1.4}>
        <Loop kind="float" delay={1}>
          <circle className="ink-line" cx={140} cy={72} r={7} />
        </Loop>
      </PopIn>
      <PopIn delay={0.6}>
        <path className="ink-line" opacity={0.35} strokeDasharray="3 6" d="M78 60 Q110 24 142 60" />
      </PopIn>
    </IllustrationSvg>
  );
}
