import { DrawPath, IllustrationSvg, Loop, PopIn, StickFigure } from './primitives';

/** "Vuelve a intentarlo." — un muñeco de palo remonta la cometa; el hilo llega hasta su mano. */
export default function Kite() {
  return (
    <IllustrationSvg>
      <PopIn delay={0.3}>
        <Loop kind="float">
          <DrawPath duration={0.7} d="M148 32 L176 62 L148 92 L120 62 Z" />
          <path className="ink-line" opacity={0.6} d="M148 32 L148 92 M120 62 L176 62" />
          <path className="ink-line" d="M148 92 Q142 108 148 120 Q154 130 148 142" />
          <path className="ink-line" opacity={0.6} d="M143 106 l10 6 M152 124 l-10 6" />
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
        <path className="ink-line" opacity={0.4} d="M30 204 H120" />
      </PopIn>
    </IllustrationSvg>
  );
}
