import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Escucha la lluvia." — a continuous-line figure sheltered under an umbrella as rain falls. */
export default function Umbrella() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath
          duration={1.4}
          d="M60 76 C60 52 82 38 110 38 C138 38 160 52 160 76 C150 70 140 74 132 80 C124 74 114 70 106 76 C98 70 88 74 80 80 C72 74 68 70 60 76 Z"
        />
        <path className="ink-line" d="M110 38 V28" />
        <path className="ink-line" d="M110 76 V150 C110 158 118 158 118 150" />
      </PopIn>
      <PopIn delay={0.5}>
        <Loop kind="drop">
          <path className="ink-line" opacity={0.6} d="M40 60 l-6 16" />
        </Loop>
        <Loop kind="drop" delay={0.25}>
          <path className="ink-line" opacity={0.6} d="M64 40 l-6 16" />
        </Loop>
        <Loop kind="drop" delay={0.5}>
          <path className="ink-line" opacity={0.6} d="M150 44 l-6 16" />
        </Loop>
        <Loop kind="drop" delay={0.15}>
          <path className="ink-line" opacity={0.6} d="M176 66 l-6 16" />
        </Loop>
        <Loop kind="drop" delay={0.6}>
          <path className="ink-line" opacity={0.6} d="M30 100 l-6 16" />
        </Loop>
        <Loop kind="drop" delay={0.4}>
          <path className="ink-line" opacity={0.6} d="M182 104 l-6 16" />
        </Loop>
      </PopIn>
      <PopIn delay={0.7}>
        <DrawPath duration={1} d="M96 100 C88 99 82 105 82 113 C82 119 86 123 92 125" />
        <path className="ink-line" d="M96 100 C104 99 110 105 109 111 C108 116 104 119 100 120" />
        <path className="ink-line" d="M92 125 C86 132 82 142 84 154 C85 162 89 168 95 172" />
        <path className="ink-line" d="M95 172 C97 180 95 188 90 194" />
        <path className="ink-line" d="M95 172 C102 176 106 184 103 194" />
      </PopIn>
    </IllustrationSvg>
  );
}
