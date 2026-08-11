import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Suelta lo que pesa." — a continuous-line figure letting go of balloons, watching them drift off. */
export default function Balloons() {
  return (
    <IllustrationSvg>
      <PopIn delay={0.2}>
        <Loop kind="float">
          <DrawPath duration={0.6} d="M120 52 m -14 0 a 14 17 0 1 0 28 0 a 14 17 0 1 0 -28 0" />
          <path className="ink-line" d="M120 69 q-4 20 4 38" />
        </Loop>
      </PopIn>
      <PopIn delay={0.7}>
        <Loop kind="float" delay={0.5}>
          <DrawPath duration={0.6} d="M156 42 m -12 0 a 12 15 0 1 0 24 0 a 12 15 0 1 0 -24 0" />
          <path className="ink-line" d="M156 57 q-8 24 -24 44" />
        </Loop>
      </PopIn>
      <PopIn delay={1.1}>
        <Loop kind="float" delay={1}>
          <DrawPath duration={0.6} d="M88 44 m -11 0 a 11 14 0 1 0 22 0 a 11 14 0 1 0 -22 0" />
          <path className="ink-line" d="M88 58 q12 26 30 48" />
        </Loop>
      </PopIn>
      <PopIn delay={0.5}>
        <DrawPath duration={1} d="M90 122 C82 121 76 127 76 135 C76 141 80 145 86 147" />
        <path className="ink-line" d="M90 122 C98 121 104 127 102 133 C101 138 97 141 92 142" />
        <path className="ink-line" d="M86 147 C80 154 76 164 78 176 C79 184 83 190 89 194" />
        <path className="ink-line" d="M89 194 C91 202 89 210 84 216" />
        <path className="ink-line" d="M89 194 C96 200 100 208 97 216" />
        <path className="ink-line" d="M92 142 C104 132 114 118 122 104" />
      </PopIn>
      <PopIn delay={0.7}>
        <path className="ink-line" opacity={0.4} d="M30 196 h150" />
      </PopIn>
    </IllustrationSvg>
  );
}
