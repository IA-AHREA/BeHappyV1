import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Abraza fuerte." — two continuous-line figures wrapped in a tight embrace. */
export default function Hug() {
  return (
    <IllustrationSvg>
      <PopIn>
        <Loop kind="breathe" style={{ transformOrigin: '110px 130px' }}>
          <DrawPath duration={1} d="M80 84 C72 83 66 89 66 97 C66 103 70 107 76 108" />
          <path className="ink-line" d="M80 84 C88 83 94 89 92 96 C91 101 87 104 82 105" />
          <path className="ink-line" d="M76 108 C68 112 62 120 60 130 C58 140 60 150 66 158" />
          <path className="ink-line" d="M66 158 C64 168 66 178 72 186" />
          <path className="ink-line" d="M66 158 C70 166 70 176 66 186" />
          <path className="ink-line" d="M78 106 C92 110 106 112 118 108" />
          <DrawPath duration={1} delay={0.15} d="M140 84 C148 83 154 89 154 97 C154 103 150 107 144 108" />
          <path className="ink-line" d="M140 84 C132 83 126 89 128 96 C129 101 133 104 138 105" />
          <path className="ink-line" d="M144 108 C152 112 158 120 160 130 C162 140 160 150 154 158" />
          <path className="ink-line" d="M154 158 C156 168 154 178 148 186" />
          <path className="ink-line" d="M154 158 C150 166 150 176 154 186" />
          <path className="ink-line" d="M142 106 C128 110 114 112 102 108" />
        </Loop>
      </PopIn>
      <PopIn delay={0.6}>
        <Loop kind="pulse" style={{ transformOrigin: '110px 40px' }}>
          <path className="ink-line" d="M110 50 q-13 -11 -9 -19 q4 -7 9 -1 q5 -6 9 1 q4 8 -9 19 z" />
        </Loop>
      </PopIn>
      <PopIn delay={0.5}>
        <path className="ink-line" opacity={0.4} d="M56 196 h108" />
      </PopIn>
    </IllustrationSvg>
  );
}
