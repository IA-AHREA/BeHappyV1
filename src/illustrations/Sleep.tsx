import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Duerme lo suficiente." — dormido en la cama; por la ventana, la luna y las estrellas. */
export default function Sleep() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath duration={1.3} d="M34 172 v-56 q0 -8 8 -8 h12 M34 172 h156 v-24 q0 -6 -6 -6" />
        <path className="ink-line" opacity={0.5} d="M186 172 v10 M38 172 v10" />
        <path className="ink-line" d="M52 132 q0 -10 12 -10 h18 q10 0 10 10 v10 h-40 z" />
        <DrawPath duration={0.7} delay={0.3} d="M68 110 m -12 0 a 12 12 0 1 0 24 0 a 12 12 0 1 0 -24 0" />
        <path className="ink-line" opacity={0.7} d="M63 110 q3 3 6 0 M72 110 q3 3 6 0" />
        <path className="ink-line" opacity={0.7} d="M66 117 q3 2 6 0" />
        <path className="ink-line" opacity={0.6} d="M58 144 Q120 132 186 144" />
      </PopIn>
      <PopIn delay={0.7}>
        <DrawPath duration={0.9} d="M148 34 h52 v52 h-52 z" />
        <path className="ink-line" opacity={0.5} d="M174 34 V86 M148 60 H200" />
        <path className="ink-line" d="M186 42 a9 9 0 1 0 3 16 a8 8 0 0 1 -3 -16 z" />
        <Loop kind="twinkle">
          <circle cx={158} cy={46} r={1.5} fill="#2b2a28" />
        </Loop>
        <Loop kind="twinkle" delay={0.7}>
          <circle cx={165} cy={72} r={1.5} fill="#2b2a28" />
        </Loop>
      </PopIn>
      <PopIn delay={0.5}>
        <Loop kind="zz">
          <text x={100} y={100} fontFamily="Caveat, cursive" fontSize={22} fill="#2b2a28">
            z
          </text>
        </Loop>
        <Loop kind="zz" delay={0.7}>
          <text x={114} y={84} fontFamily="Caveat, cursive" fontSize={26} fill="#2b2a28">
            z
          </text>
        </Loop>
        <Loop kind="zz" delay={1.4}>
          <text x={128} y={68} fontFamily="Caveat, cursive" fontSize={30} fill="#b5542c">
            z
          </text>
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
