import { DrawEllipse, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Ríete de ti." — laughing at your own reflection in a standing mirror. */
export default function Mirror() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawEllipse cx={150} cy={100} rx={34} ry={52} />
        <path className="ink-line" opacity={0.8} d="M136 152 L128 188 M164 152 L172 188 M128 188 h44" />
        <circle className="ink-fill" cx={150} cy={92} r={7} opacity={0.45} />
        <path className="ink-line" opacity={0.45} d="M150 99 v28 M150 108 l-12 8 M150 108 l12 8" />
      </PopIn>
      <PopIn delay={0.5}>
        <Loop kind="walk">
          <circle className="ink-fill" cx={62} cy={84} r={9} />
          <path className="ink-line" d="M64 93 Q66 120 64 148" />
          <path className="ink-line" d="M65 104 L86 96 M65 110 L46 122" />
          <path className="ink-line" d="M64 148 L54 186 M64 148 L76 184" />
        </Loop>
      </PopIn>
      <PopIn delay={0.8}>
        <Loop kind="float">
          <text x={30} y={52} fontFamily="Caveat, cursive" fontSize={24} fill="#b5542c">
            ja ja
          </text>
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
