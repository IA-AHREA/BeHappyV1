import { IllustrationSvg, Loop, PopIn, StickFigure } from './primitives';

/** "Llama a quien extrañas." — dos muñecos de palo al teléfono, un corazón late entre ellos. */
export default function PhoneCall() {
  return (
    <IllustrationSvg>
      <PopIn>
        <Loop kind="breathe" style={{ transformOrigin: '52px 178px' }}>
          <StickFigure
            head={[52, 96]}
            torso={[[52, 106], [52, 142]]}
            armR={[[52, 114], [66, 122], [61, 102]]}
            armL={[[52, 114], [46, 128], [44, 140]]}
            legL={[[52, 142], [46, 160], [44, 178], [38, 178]]}
            legR={[[52, 142], [58, 160], [60, 178], [66, 178]]}
          />
          <path className="ink-line" strokeWidth={5} d="M58 96 l8 6" />
        </Loop>
      </PopIn>
      <PopIn delay={0.3}>
        <Loop kind="breathe" delay={0.5} style={{ transformOrigin: '168px 178px' }}>
          <StickFigure
            head={[168, 96]}
            torso={[[168, 106], [168, 142]]}
            armL={[[168, 114], [154, 122], [159, 102]]}
            armR={[[168, 114], [174, 128], [176, 140]]}
            legR={[[168, 142], [174, 160], [176, 178], [182, 178]]}
            legL={[[168, 142], [162, 160], [160, 178], [154, 178]]}
          />
          <path className="ink-line" strokeWidth={5} d="M162 96 l-8 6" />
        </Loop>
      </PopIn>
      <PopIn delay={0.7}>
        <path className="ink-line" opacity={0.5} strokeDasharray="4 5" d="M70 92 Q110 74 150 92" />
        <Loop kind="pulse" style={{ transformOrigin: '110px 112px' }}>
          <path className="ink-line" d="M110 100 C101 92 88 98 88 108 C88 118 101 127 110 133 C119 127 132 118 132 108 C132 98 119 92 110 100 Z" />
        </Loop>
      </PopIn>
      <PopIn delay={0.5}>
        <path className="ink-line" opacity={0.4} d="M30 182 H190" />
      </PopIn>
    </IllustrationSvg>
  );
}
