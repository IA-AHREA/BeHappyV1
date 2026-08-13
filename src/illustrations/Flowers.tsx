import { DrawPath, IllustrationSvg, Loop, PopIn, StickFigure } from './primitives';

/** "Compra flores." — un muñeco de palo alcanza el jarrón de flores del puesto. */
export default function Flowers() {
  return (
    <IllustrationSvg>
      <PopIn>
        <StickFigure
          head={[100, 84]}
          torso={[[100, 94], [100, 132]]}
          armR={[[100, 102], [122, 106], [144, 103]]}
          armL={[[100, 102], [92, 118], [90, 130]]}
          legL={[[100, 132], [93, 152], [91, 172], [85, 172]]}
          legR={[[100, 132], [107, 152], [109, 172], [115, 172]]}
        />
        <path className="ink-line" opacity={0.4} d="M64 176 H190" />
      </PopIn>

      <PopIn delay={0.4}>
        <DrawPath duration={0.7} d="M 148 104 C 148 98 172 98 172 104 C 172 110 148 110 148 104 Z" />
        <path className="ink-line" d="M 160 109 L 158 170 M 149 170 h18" />
      </PopIn>

      <PopIn delay={0.7}>
        <Loop kind="sway" style={{ transformOrigin: '163px 101px' }}>
          <path className="ink-line" d="M 156 82 C 153 87 153 96 157 101 L 169 101 C 173 96 173 87 170 82 Z" />
          <path className="ink-line" d="M 157 82 C 157 78 169 78 169 82" />
          <path className="ink-line" d="M 159 82 C 156 70 158 60 155 50" />
          <path className="ink-line" d="M 163 82 C 163 68 163 56 163 46" />
          <path className="ink-line" d="M 167 82 C 170 70 168 60 171 50" />
          <circle className="ink-line" cx={154} cy={47} r={4.5} />
          <circle className="ink-line" cx={163} cy={42} r={4.5} />
          <circle className="ink-line" cx={172} cy={47} r={4.5} />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
