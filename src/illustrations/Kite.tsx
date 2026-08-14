import { DrawPath, IllustrationSvg, Loop, PopIn, StickFigure } from './primitives';

/** "Vuelve a intentarlo." — remontando la cometa de lazos en el campo, junto a la cerca. */
export default function Kite() {
  return (
    <IllustrationSvg>
      <PopIn delay={0.3}>
        <Loop kind="float">
          <DrawPath duration={0.7} d="M148 32 L176 62 L148 92 L120 62 Z" />
          <path className="ink-line" opacity={0.6} d="M148 32 L148 92 M120 62 L176 62" />
          <path className="ink-line" d="M148 92 Q142 108 148 120 Q154 130 148 142" />
          <path className="ink-line" opacity={0.7} d="M141 104 l10 -6 M141 104 l10 6 M152 126 l-10 -6 M152 126 l-10 6" />
        </Loop>
      </PopIn>
      <PopIn delay={0.5}>
        <path className="ink-line" opacity={0.5} d="M148 92 Q120 114 90 120" />
      </PopIn>
      <PopIn delay={0.7}>
        <StickFigure
          head={[64, 120]}
          torso={[[64, 130], [64, 166]]}
          armR={[[64, 138], [78, 130], [88, 120]]}
          armL={[[64, 138], [56, 152], [54, 164]]}
          legL={[[64, 166], [58, 182], [56, 200], [50, 200]]}
          legR={[[64, 166], [70, 182], [72, 200], [78, 200]]}
        />
      </PopIn>
      <PopIn delay={0.9}>
        <path className="ink-line" d="M30 142 V122" />
        <Loop kind="sway" style={{ transformOrigin: '30px 124px' }}>
          <path className="ink-line" opacity={0.7} d="M30 124 q-14 2 -12 -12 q2 -12 14 -10 q12 -2 12 10 q2 14 -14 12 z" />
        </Loop>
        <path className="ink-line" opacity={0.6} d="M168 176 V194 M186 173 V191 M204 170 V188" />
        <path className="ink-line" opacity={0.5} d="M162 181 L210 174 M162 189 L210 182" />
        <path className="ink-line" opacity={0.5} d="M40 198 l3 -6 l3 6 M92 206 l3 -6 l3 6 M120 200 l3 -6 l3 6 M150 204 l3 -6 l3 6" />
        <path className="ink-line" opacity={0.4} d="M28 204 H140" />
      </PopIn>
    </IllustrationSvg>
  );
}
