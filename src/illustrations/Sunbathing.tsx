import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Toma el sol." — someone stretched out on a lounger under a spinning sun. */
export default function Sunbathing() {
  return (
    <IllustrationSvg>
      <PopIn>
        <Loop kind="spin" style={{ transformOrigin: '158px 52px' }}>
          <path
            className="ink-line"
            opacity={0.8}
            d="M158 22 v10 M158 72 v10 M128 52 h10 M178 52 h10 M137 31 l7 7 M172 66 l7 7 M179 31 l-7 7 M144 66 l-7 7"
          />
        </Loop>
        <circle className="ink-line" cx={158} cy={52} r={15} fill="#e8973f" fillOpacity={0.25} />
      </PopIn>
      <PopIn delay={0.4}>
        <DrawPath d="M40 105 L72 142 L168 142" />
        <path className="ink-line" d="M80 142 L74 174 M156 142 L162 174" />
        <circle className="ink-fill" cx={52} cy={102} r={8} />
        <path className="ink-line" d="M58 108 L92 140 L134 140" />
        <path className="ink-line" d="M134 140 L146 122 L160 140" />
        <path className="ink-line" opacity={0.7} d="M186 142 L186 116 M178 116 h16 M180 116 q6 -8 12 0" />
        <ellipse className="ink-line" cx={118} cy={182} rx={66} ry={6} opacity={0.3} />
      </PopIn>
    </IllustrationSvg>
  );
}
