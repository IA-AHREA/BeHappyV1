import { DrawPath, IllustrationSvg, Loop, PopIn, StickFigure } from './primitives';

/** "Comparte tu pan." — dos muñecos de palo comparten la hogaza bajo un arco. */
export default function Bread() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath duration={1.2} opacity={0.45} d="M52 162 V96 Q52 34 110 34 Q168 34 168 96 V162" />
        <path className="ink-line" opacity={0.25} d="M58 162 V98 Q58 40 110 40 Q162 40 162 98 V162" />
      </PopIn>
      <PopIn delay={0.3}>
        <StickFigure
          head={[76, 88]}
          torso={[[76, 98], [76, 132]]}
          armR={[[76, 106], [90, 110], [100, 104]]}
          armL={[[76, 106], [70, 120], [68, 130]]}
          legL={[[76, 132], [70, 148], [68, 166], [62, 166]]}
          legR={[[76, 132], [82, 148], [84, 166], [90, 166]]}
        />
      </PopIn>
      <PopIn delay={0.5}>
        <StickFigure
          head={[144, 88]}
          torso={[[144, 98], [144, 132]]}
          armL={[[144, 106], [130, 110], [120, 104]]}
          armR={[[144, 106], [150, 120], [152, 130]]}
          legR={[[144, 132], [150, 148], [152, 166], [158, 166]]}
          legL={[[144, 132], [138, 148], [136, 166], [130, 166]]}
        />
      </PopIn>
      <PopIn delay={0.8}>
        <Loop kind="breathe" style={{ transformOrigin: '110px 104px' }}>
          <path className="ink-line" d="M96 104 Q110 94 124 104 Q110 114 96 104 Z" />
          <path className="ink-line" opacity={0.6} d="M104 100 l3 5 M110 98 l3 5 M116 100 l3 5" />
        </Loop>
        <Loop kind="twinkle">
          <path className="ink-line" opacity={0.6} d="M104 82 l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 l5 -2 z" />
        </Loop>
      </PopIn>
      <PopIn delay={0.5}>
        <path className="ink-line" opacity={0.4} d="M40 172 H180" />
      </PopIn>
    </IllustrationSvg>
  );
}
