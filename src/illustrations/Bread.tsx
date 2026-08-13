import { IllustrationSvg, Loop, PopIn, StickFigure } from './primitives';

/** "Comparte tu pan." — dos muñecos de palo sostienen juntos una hogaza de pan. */
export default function Bread() {
  return (
    <IllustrationSvg>
      <PopIn>
        <path className="ink-line" opacity={0.4} d="M28 176 Q110 160 192 176" />
      </PopIn>
      <PopIn delay={0.3}>
        <StickFigure
          head={[60, 84]}
          torso={[[60, 94], [60, 130]]}
          armR={[[60, 102], [76, 106], [90, 100]]}
          armL={[[60, 102], [54, 116], [52, 128]]}
          legL={[[60, 130], [54, 148], [52, 166], [46, 166]]}
          legR={[[60, 130], [66, 148], [68, 166], [74, 166]]}
        />
      </PopIn>
      <PopIn delay={0.5}>
        <StickFigure
          head={[160, 84]}
          torso={[[160, 94], [160, 130]]}
          armL={[[160, 102], [144, 106], [130, 100]]}
          armR={[[160, 102], [166, 116], [168, 128]]}
          legR={[[160, 130], [166, 148], [168, 166], [174, 166]]}
          legL={[[160, 130], [154, 148], [152, 166], [146, 166]]}
        />
      </PopIn>
      <PopIn delay={0.8}>
        <Loop kind="breathe" style={{ transformOrigin: '110px 100px' }}>
          <path className="ink-line" d="M88 100 Q110 88 132 100 Q110 112 88 100 Z" />
          <path className="ink-line" opacity={0.6} d="M100 96 l4 6 M110 94 l4 6 M120 96 l4 6" />
        </Loop>
        <Loop kind="twinkle">
          <path className="ink-line" opacity={0.5} d="M104 76 l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 l5 -2 z" />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
