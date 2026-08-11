import { DrawPath, Face, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Vive el momento." — a tightrope walker balanced between PASADO and FUTURO. */
export default function Balance() {
  return (
    <IllustrationSvg>
      <PopIn>
        <path className="ink-line" d="M36 196 L36 108 M184 196 L184 108" />
        <circle className="ink-fill" cx={36} cy={108} r={3} />
        <circle className="ink-fill" cx={184} cy={108} r={3} />
        <DrawPath d="M36 108 Q110 126 184 108" />
        <text x={14} y={214} fontFamily="Nunito Sans, sans-serif" fontSize={11} fill="#6b665c" letterSpacing={2}>
          PASADO
        </text>
        <text x={160} y={214} fontFamily="Nunito Sans, sans-serif" fontSize={11} fill="#6b665c" letterSpacing={2}>
          FUTURO
        </text>
      </PopIn>
      <PopIn delay={0.6}>
        <Loop kind="sway" style={{ transformOrigin: '110px 117px' }}>
          <path className="ink-line" opacity={0.8} d="M72 96 L148 96" />
          <circle className="ink-fill" cx={110} cy={66} r={9} />
          <Face cx={110} cy={66} r={9} expression="content" />
          <path className="ink-line" d="M110 75 L110 102" />
          <path className="ink-line" d="M110 84 L84 95 M110 84 L136 95" />
          <path className="ink-line" d="M110 102 L102 117 M110 102 L118 117" />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
