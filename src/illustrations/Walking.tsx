import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Camina sin rumbo." — a continuous-line solitary walker along a winding path. */
export default function Walking() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath
          duration={2}
          className="ink-line"
          opacity={0.5}
          strokeDasharray="6 7"
          d="M20 190 Q70 168 60 140 Q50 112 104 104 Q160 96 150 64 Q146 48 170 40"
        />
      </PopIn>
      <PopIn delay={0.5}>
        <path className="ink-line" d="M174 130 V190" />
        <path className="ink-line" d="M174 140 h26 l10 8 l-10 8 h-26 z" />
        <path className="ink-line" opacity={0.55} d="M174 112 h-24 l-10 8 l10 8 h24 z" />
      </PopIn>
      <PopIn delay={0.8}>
        <Loop kind="walk">
          <DrawPath duration={0.9} d="M94 108 C86 107 80 113 80 121 C80 127 84 131 90 133" />
          <path className="ink-line" d="M94 108 C102 107 108 113 106 119 C105 124 101 128 97 129" />
          <path className="ink-line" d="M90 133 C82 140 78 150 80 162 C81 170 85 176 91 180" />
          <path className="ink-line" d="M91 180 C93 188 91 196 86 202" />
          <path className="ink-line" d="M91 180 C98 184 102 192 99 202" />
          <path className="ink-line" d="M90 133 C98 140 104 148 106 158" />
        </Loop>
      </PopIn>
      <PopIn delay={0.4}>
        <Loop kind="spin" style={{ transformOrigin: '42px 46px' }}>
          <circle className="ink-line" opacity={0.55} cx={42} cy={46} r={12} />
          <path className="ink-line" opacity={0.55} d="M42 28 v-6 M42 64 v6 M24 46 h-6 M60 46 h6" />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
