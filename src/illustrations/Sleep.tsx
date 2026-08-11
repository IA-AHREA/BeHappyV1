import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Duerme lo suficiente." — someone asleep in bed under a crescent moon. */
export default function Sleep() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath d="M34 172 v-56 q0 -8 8 -8 h12 M34 172 h156 v-28 h-152" />
        <path className="ink-line" d="M186 172 v10 M38 172 v10" />
        <path className="ink-line" fill="#f7f3ea" d="M52 132 q0 -10 12 -10 h18 q10 0 10 10 v10 h-40 z" />
        <circle className="ink-fill" cx={76} cy={126} r={8} />
        <path className="ink-line" opacity={0.85} d="M58 144 Q120 132 186 144" />
      </PopIn>
      <PopIn delay={0.5}>
        <Loop kind="zz">
          <text x={104} y={100} fontFamily="Caveat, cursive" fontSize={22} fill="#2b2a28">
            z
          </text>
        </Loop>
        <Loop kind="zz" delay={0.7}>
          <text x={120} y={86} fontFamily="Caveat, cursive" fontSize={26} fill="#2b2a28">
            z
          </text>
        </Loop>
        <Loop kind="zz" delay={1.4}>
          <text x={140} y={72} fontFamily="Caveat, cursive" fontSize={30} fill="#b5542c">
            z
          </text>
        </Loop>
      </PopIn>
      <PopIn delay={0.7}>
        <Loop kind="float">
          <path className="ink-line" d="M176 40 a14 14 0 1 0 4 24 a12 12 0 0 1 -4 -24 z" />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
