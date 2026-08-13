import { IllustrationSvg, Loop, PopIn, line } from './primitives';

/** "Abraza fuerte." — dos muñecos de palo abrazados, brazos cruzados sobre la espalda del otro. */
export default function Hug() {
  return (
    <IllustrationSvg>
      <PopIn>
        <Loop kind="breathe" style={{ transformOrigin: '110px 130px' }}>
          <circle className="ink-line" cx={98} cy={84} r={10} />
          <circle className="ink-line" cx={122} cy={84} r={10} />
          <path className="ink-line" d={line([101, 93], [96, 132])} />
          <path className="ink-line" d={line([119, 93], [124, 132])} />
          <path className="ink-line" d={line([100, 101], [116, 108], [130, 114])} />
          <path className="ink-line" d={line([120, 101], [104, 108], [90, 114])} />
          <path className="ink-line" d={line([96, 132], [91, 152], [89, 172], [83, 172])} />
          <path className="ink-line" d={line([96, 132], [101, 152], [103, 172], [108, 172])} />
          <path className="ink-line" d={line([124, 132], [129, 152], [131, 172], [137, 172])} />
          <path className="ink-line" d={line([124, 132], [119, 152], [117, 172], [112, 172])} />
        </Loop>
      </PopIn>
      <PopIn delay={0.6}>
        <Loop kind="pulse" style={{ transformOrigin: '110px 40px' }}>
          <path className="ink-line" d="M110 50 q-13 -11 -9 -19 q4 -7 9 -1 q5 -6 9 1 q4 8 -9 19 z" />
        </Loop>
      </PopIn>
      <PopIn delay={0.5}>
        <path className="ink-line" opacity={0.4} d="M60 178 H160" />
      </PopIn>
    </IllustrationSvg>
  );
}
