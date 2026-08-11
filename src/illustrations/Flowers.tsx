import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Compra flores." — a continuous-line figure at a café table with a vase of flowers. */
export default function Flowers() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath
          duration={2.2}
          d="M 90 48
             C 80 47 72 54 72 64
             C 72 72 77 78 84 82
             C 78 90 72 104 72 120
             C 72 138 74 156 78 172
             C 79 178 78 183 76 186"
        />
        <DrawPath duration={0.6} delay={0.3} d="M 86 52 C 80 54 76 60 78 68" />
        <DrawPath
          duration={1.1}
          delay={0.2}
          d="M 90 48
             C 98 47 104 53 103 60
             C 102 65 99 68 95 70
             C 93 71 92 73 93 75"
        />
        <DrawPath
          duration={1.8}
          delay={0.5}
          d="M 93 75
             C 96 82 100 86 106 89
             C 100 96 96 110 96 128
             C 96 146 97 162 98 174
             C 99 179 98 183 96 186"
        />
        <DrawPath duration={0.4} delay={1.9} d="M 76 186 C 78 190 82 191 86 189" />
        <DrawPath duration={0.4} delay={2} d="M 96 186 C 98 190 102 191 106 189" />
        <DrawPath duration={0.9} delay={0.9} d="M 106 89 C 116 92 126 96 134 102 C 139 106 143 108 148 108" />
        <path className="ink-line" opacity={0.6} d="M 64 122 C 72 126 88 126 94 121" />
        <path className="ink-line" opacity={0.6} d="M 68 125 L 66 197 M 90 123 L 94 197" />
      </PopIn>

      <PopIn delay={0.9}>
        <DrawPath duration={0.7} d="M 148 104 C 148 98 172 98 172 104 C 172 110 148 110 148 104 Z" />
        <path className="ink-line" d="M 160 109 L 158 170 M 149 170 h18" />
      </PopIn>

      <PopIn delay={1.1}>
        <Loop kind="sway" style={{ transformOrigin: '163px 101px' }}>
          <path className="ink-line" d="M 156 82 C 153 87 153 96 157 101 L 169 101 C 173 96 173 87 170 82 Z" />
          <path className="ink-line" d="M 157 82 C 157 78 169 78 169 82" />
          <path className="ink-line" d="M 159 82 C 156 70 158 60 155 50" />
          <path className="ink-line" d="M 163 82 C 163 68 163 56 163 46" />
          <path className="ink-line" d="M 167 82 C 170 70 168 60 171 50" />
          <circle className="ink-line" cx={154} cy={47} r={4.5} />
          <circle className="ink-line" cx={163} cy={42} r={4.5} />
          <circle className="ink-line" cx={172} cy={47} r={4.5} />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
