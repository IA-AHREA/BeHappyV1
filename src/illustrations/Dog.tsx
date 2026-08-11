import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Acaricia a un perro." — a continuous-line dog, tail wagging, greeted by a hand. */
export default function Dog() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath duration={1.1} d="M92 172 m -38 0 a 38 26 0 1 0 76 0 a 38 26 0 1 0 -76 0" />
        <DrawPath duration={0.8} delay={0.3} d="M128 138 m -19 0 a 19 19 0 1 0 38 0 a 19 19 0 1 0 -38 0" />
        <path className="ink-line" d="M122 124 C112 120 104 126 106 136 C108 144 116 146 122 142 Z" />
        <path className="ink-line" d="M144 144 C152 144 155 150 152 156 C149 161 143 161 139 157" />
        <circle cx={134} cy={134} r={1.8} fill="#2b2a28" />
        <path className="ink-line" d="M140 157 C134 159 130 157 128 152" />
        <Loop kind="wag" style={{ transformOrigin: '52px 151px' }}>
          <path className="ink-line" d="M56 162 C46 156 44 146 50 140" />
        </Loop>
        <path className="ink-line" d="M72 196 L70 210 M92 198 L94 212" />
      </PopIn>
      <PopIn delay={0.6}>
        <DrawPath duration={0.7} d="M92 40 C104 46 114 58 119 72 C123 84 126 96 128 110" />
        <path className="ink-line" opacity={0.5} d="M76 38 l10 10 M92 28 l6 12 M108 30 l0 12" />
      </PopIn>
    </IllustrationSvg>
  );
}
