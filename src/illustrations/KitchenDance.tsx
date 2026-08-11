import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Baila en la cocina." — a continuous-line figure dancing by the stove, notes floating. */
export default function KitchenDance() {
  return (
    <IllustrationSvg>
      <PopIn delay={0.5}>
        <path
          className="ink-line"
          opacity={0.4}
          d="M14 190 H120 M100 190 V158 H150 V190 M106 166 h10 M106 178 h10 M128 166 h10 M128 178 h10"
        />
      </PopIn>
      <PopIn>
        <Loop kind="walk">
          <DrawPath
            duration={1}
            d="M76 62 C68 60 60 66 60 76 C60 84 65 90 72 92"
          />
          <path className="ink-line" d="M76 62 C84 61 90 67 89 75 C88 80 84 84 79 85" />
          <path className="ink-line" d="M72 92 C60 100 52 114 54 130" />
          <path className="ink-line" d="M72 92 C82 100 92 112 92 128" />
          <path className="ink-line" d="M54 130 C50 140 52 150 58 156" />
          <path className="ink-line" d="M92 128 C98 122 106 118 114 118" />
          <path className="ink-line" d="M74 82 C64 74 56 62 56 50" />
          <path className="ink-line" d="M78 82 C90 78 100 70 104 58" />
        </Loop>
      </PopIn>
      <PopIn delay={0.7}>
        <Loop kind="float">
          <circle className="ink-line" cx={150} cy={60} r={5} />
          <path className="ink-line" d="M155 60 V32 h12" />
        </Loop>
      </PopIn>
      <PopIn delay={1}>
        <Loop kind="float" delay={0.4}>
          <circle className="ink-line" cx={46} cy={90} r={4.4} />
          <path className="ink-line" d="M50 90 V70" />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
