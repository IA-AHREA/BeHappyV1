import { DrawPath, GrowIn, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Planta algo." — a continuous-line pot with a growing seedling, watered from a can. */
export default function Planting() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath duration={0.9} d="M76 150 H144 L134 194 H86 Z" />
        <path className="ink-line" opacity={0.5} d="M84 158 L78 186 M100 158 L96 190 M120 158 L124 190 M136 158 L142 186" />
      </PopIn>
      <GrowIn style={{ transformOrigin: '110px 150px' }}>
        <path className="ink-line" d="M110 150 C108 122 110 96 110 74" />
        <path className="ink-line" d="M110 96 C92 92 86 76 88 60 C106 62 112 80 110 96 Z" />
        <path className="ink-line" d="M110 84 C128 80 136 64 134 48 C116 50 108 68 110 84 Z" />
      </GrowIn>
      <PopIn delay={0.9}>
        <path className="ink-line" d="M150 78 h28 v20 h-28 z" transform="rotate(-18 164 88)" />
        <path className="ink-line" d="M178 82 c10 -2 18 2 20 10" transform="rotate(-18 164 88)" />
        <path className="ink-line" d="M150 82 l-14 -4" transform="rotate(-18 164 88)" />
        <Loop kind="drop">
          <path className="ink-line" opacity={0.6} d="M140 112 l-3 10" />
        </Loop>
        <Loop kind="drop" delay={0.3}>
          <path className="ink-line" opacity={0.6} d="M148 116 l-3 10" />
        </Loop>
        <Loop kind="drop" delay={0.6}>
          <path className="ink-line" opacity={0.6} d="M156 118 l-3 10" />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
