import { IllustrationSvg, Loop, PopIn, StickFigure } from './primitives';

/** "Suelta lo que pesa." — en el parque, dos globos ya se alejan; el último aún en la mano. */
export default function Balloons() {
  return (
    <IllustrationSvg>
      <PopIn delay={0.2}>
        <Loop kind="sway" style={{ transformOrigin: '114px 106px' }}>
          <ellipse className="ink-line" cx={120} cy={52} rx={14} ry={17} />
          <path className="ink-line" d="M120 69 q-4 20 -6 37" />
        </Loop>
      </PopIn>
      <PopIn delay={0.7}>
        <Loop kind="float" delay={0.5}>
          <ellipse className="ink-line" cx={156} cy={42} rx={12} ry={15} />
          <path className="ink-line" opacity={0.8} d="M156 57 q-8 24 -24 44" />
        </Loop>
      </PopIn>
      <PopIn delay={1.1}>
        <Loop kind="float" delay={1}>
          <ellipse className="ink-line" cx={88} cy={44} rx={11} ry={14} />
          <path className="ink-line" opacity={0.8} d="M88 58 q12 26 24 46" />
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
        <path className="ink-line" d="M34 196 V172" />
        <Loop kind="sway" style={{ transformOrigin: '34px 174px' }}>
          <path className="ink-line" opacity={0.6} d="M34 174 q-16 2 -14 -14 q2 -14 16 -12 q14 -2 14 12 q2 16 -16 14 z" />
        </Loop>
        <path className="ink-line" d="M196 194 V174" />
        <Loop kind="sway" delay={0.7} style={{ transformOrigin: '196px 176px' }}>
          <path className="ink-line" opacity={0.6} d="M196 176 q-13 2 -12 -12 q2 -12 13 -10 q12 -2 12 10 q1 14 -13 12 z" />
        </Loop>
        <path className="ink-line" opacity={0.55} d="M138 178 h36 M142 178 v14 M170 178 v14 M138 172 h36 M138 172 v6" />
        <path className="ink-line" opacity={0.5} d="M52 202 l3 -6 l3 6 M120 204 l3 -6 l3 6 M182 202 l3 -6 l3 6" />
        <path className="ink-line" opacity={0.4} d="M40 202 H160" />
      </PopIn>
    </IllustrationSvg>
  );
}
