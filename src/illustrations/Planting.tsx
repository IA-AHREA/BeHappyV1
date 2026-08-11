import { DrawPath, GrowIn, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Planta algo." — a seedling sprouting from a pot, watered by a can. */
export default function Planting() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath d="M82 128 h64 l-8 56 h-48 z" />
        <path className="ink-line" opacity={0.6} d="M86 140 h56" />
      </PopIn>
      <GrowIn style={{ transformOrigin: '114px 128px' }}>
        <path className="ink-line" d="M114 128 Q112 96 114 76" />
        <path className="ink-line" d="M114 100 Q94 96 90 78 Q110 78 114 96 Z" />
        <path className="ink-line" d="M114 90 Q134 86 140 68 Q118 68 114 86 Z" />
        <circle className="accent-fill" cx={114} cy={72} r={5} />
      </GrowIn>
      <PopIn delay={0.8}>
        <path
          className="ink-line"
          transform="rotate(-24 170 110)"
          d="M160 96 h22 q8 0 8 8 v12 q0 8 -8 8 h-22 z"
        />
        <path className="ink-line" transform="rotate(-24 170 110)" d="M158 104 l-14 10" />
        <Loop kind="drop" delay={0.2}>
          <path className="ink-line" opacity={0.7} d="M142 122 l-2 8" />
        </Loop>
        <Loop kind="drop" delay={0.7}>
          <path className="ink-line" opacity={0.7} d="M150 124 l-2 8" />
        </Loop>
      </PopIn>
      <PopIn delay={0.5}>
        <path className="ink-line" opacity={0.35} d="M60 190 h110" />
      </PopIn>
    </IllustrationSvg>
  );
}
