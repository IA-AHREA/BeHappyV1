import { DrawPath, IllustrationSvg, Loop, PopIn, StickFigure } from './primitives';

/** "Compra flores." — un muñeco de palo alcanza el jarrón de rosas sobre la mesa. */
export default function Flowers() {
  return (
    <IllustrationSvg>
      <PopIn>
        <path className="ink-line" d="M104 146 H200 M108 152 H196" />
        <path className="ink-line" d="M104 146 L104 152 M200 146 L200 152" />
        <path className="ink-line" opacity={0.6} d="M114 152 L110 196 M190 152 L194 196 M118 152 L116 194 M186 152 L188 194" />
      </PopIn>
      <PopIn delay={0.4}>
        <DrawPath duration={0.8} d="M140 112 C136 124 137 138 146 148 L162 148 C171 138 172 124 168 112 Z" />
        <path className="ink-line" opacity={0.7} d="M140 112 C140 108 168 108 168 112" />
      </PopIn>
      <PopIn delay={0.7}>
        <Loop kind="sway" style={{ transformOrigin: '154px 110px' }}>
          <path
            className="ink-line"
            opacity={0.7}
            d="M148 110 C146 98 148 88 146 80 M154 110 C154 96 154 86 154 76 M160 110 C162 98 160 88 163 80"
          />
          <circle className="ink-line" cx={140} cy={74} r={6} />
          <path className="ink-line" opacity={0.6} d="M137 74 a3 3 0 1 1 3 3" />
          <circle className="ink-line" cx={154} cy={64} r={6} />
          <path className="ink-line" opacity={0.6} d="M151 64 a3 3 0 1 1 3 3" />
          <circle className="ink-line" cx={168} cy={74} r={6} />
          <path className="ink-line" opacity={0.6} d="M165 74 a3 3 0 1 1 3 3" />
          <circle className="ink-line" cx={146} cy={88} r={5.5} />
          <path className="ink-line" opacity={0.6} d="M143.25 88 a2.75 2.75 0 1 1 2.75 2.75" />
          <circle className="ink-line" cx={163} cy={88} r={5.5} />
          <path className="ink-line" opacity={0.6} d="M160.25 88 a2.75 2.75 0 1 1 2.75 2.75" />
          <path className="ink-line" opacity={0.6} d="M147 96 q-10 -2 -13 -10 q9 -1 13 10 z M158 94 q10 -4 12 -12 q-9 0 -12 12 z" />
        </Loop>
      </PopIn>
      <PopIn delay={0.5}>
        <StickFigure
          head={[74, 106]}
          torso={[[74, 116], [74, 154]]}
          armR={[[74, 124], [104, 130], [134, 124]]}
          armL={[[74, 124], [66, 138], [64, 150]]}
          legL={[[74, 154], [67, 172], [65, 190], [59, 190]]}
          legR={[[74, 154], [81, 172], [83, 190], [89, 190]]}
        />
        <path className="ink-line" opacity={0.4} d="M40 196 H208" />
      </PopIn>
    </IllustrationSvg>
  );
}
