import { IllustrationSvg, Loop, PopIn, StickFigure } from './primitives';

/** "Suelta lo que pesa." — un muñeco de palo suelta los globos y los mira alejarse. */
export default function Balloons() {
  return (
    <IllustrationSvg>
      <PopIn delay={0.2}>
        <Loop kind="float">
          <ellipse className="ink-line" cx={120} cy={52} rx={14} ry={17} />
          <path className="ink-line" d="M120 69 q-4 20 4 38" />
        </Loop>
      </PopIn>
      <PopIn delay={0.7}>
        <Loop kind="float" delay={0.5}>
          <ellipse className="ink-line" cx={156} cy={42} rx={12} ry={15} />
          <path className="ink-line" d="M156 57 q-8 24 -24 44" />
        </Loop>
      </PopIn>
      <PopIn delay={1.1}>
        <Loop kind="float" delay={1}>
          <ellipse className="ink-line" cx={88} cy={44} rx={11} ry={14} />
          <path className="ink-line" d="M88 58 q12 26 30 48" />
        </Loop>
      </PopIn>
      <PopIn delay={0.5}>
        <StickFigure
          head={[86, 116]}
          torso={[[86, 126], [86, 162]]}
          armR={[[86, 134], [100, 122], [112, 108]]}
          armL={[[86, 134], [78, 148], [76, 160]]}
          legL={[[86, 162], [80, 180], [78, 198], [72, 198]]}
          legR={[[86, 162], [92, 180], [94, 198], [100, 198]]}
        />
      </PopIn>
      <PopIn delay={0.7}>
        <path className="ink-line" opacity={0.4} d="M40 202 H160" />
      </PopIn>
    </IllustrationSvg>
  );
}
