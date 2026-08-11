import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Ríete de ti." — a continuous-line figure laughing at their reflection. */
export default function Mirror() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath duration={1.3} d="M148 102 m -32 0 a 32 50 0 1 0 64 0 a 32 50 0 1 0 -64 0" />
        <path className="ink-line" opacity={0.5} d="M134 150 L126 186 M162 150 L170 186 M126 186 h44" />
      </PopIn>
      <PopIn delay={0.6}>
        <Loop kind="breathe" style={{ transformOrigin: '148px 90px' }}>
          <path className="ink-line" opacity={0.5} d="M148 76 C142 75 138 79 138 85 C138 89 141 92 145 93 C140 96 137 102 139 108" />
          <path className="ink-line" opacity={0.5} d="M148 76 C154 75 158 79 158 85 C158 89 155 92 151 93" />
        </Loop>
      </PopIn>
      <PopIn delay={0.4}>
        <Loop kind="walk">
          <DrawPath duration={1} d="M66 84 C58 83 52 89 52 97 C52 103 56 107 62 109" />
          <path className="ink-line" d="M66 84 C74 83 80 89 79 95 C78 100 74 104 69 105" />
          <path className="ink-line" d="M62 109 C56 116 52 126 54 138 C55 146 59 152 65 156" />
          <path className="ink-line" d="M65 156 C67 166 65 176 60 184" />
          <path className="ink-line" d="M65 156 C72 162 76 172 73 184" />
          <path className="ink-line" d="M62 109 C52 114 44 122 40 132" />
        </Loop>
      </PopIn>
      <PopIn delay={0.9}>
        <Loop kind="float">
          <text x={26} y={58} fontFamily="Caveat, cursive" fontSize={24} fill="#b5542c">
            ja ja
          </text>
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
