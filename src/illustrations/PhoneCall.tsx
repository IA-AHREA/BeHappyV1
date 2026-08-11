import { DrawPath, Face, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Llama a quien extrañas." — two people on a call, a heart pulsing between them. */
export default function PhoneCall() {
  return (
    <IllustrationSvg>
      <PopIn>
        <circle className="ink-fill" cx={52} cy={102} r={10} />
        <Face cx={52} cy={102} r={10} expression="smile" />
        <path className="ink-line" d="M52 112 Q50 140 52 162" />
        <path className="ink-line" d="M52 122 L68 110" />
        <path className="ink-line" d="M64 96 h9 v16 h-9 z" />
      </PopIn>
      <PopIn delay={0.4}>
        <circle className="ink-fill" cx={168} cy={102} r={10} />
        <Face cx={168} cy={102} r={10} expression="smile" blinkDelay={0.6} />
        <circle className="ink-line" cx={168} cy={88} r={6} />
        <path className="ink-line" opacity={0.8} d="M158 104 a5 5 0 1 0 8 0 M163 104 h10 M172 104 a5 5 0 1 0 8 0" />
        <path className="ink-line" d="M168 112 Q170 140 168 162" />
        <path className="ink-line" d="M168 122 L152 110" />
        <path className="ink-line" d="M147 96 h9 v16 h-9 z" />
      </PopIn>
      <PopIn delay={0.7}>
        <DrawPath className="ink-line" opacity={0.55} strokeDasharray="5 6" d="M78 84 Q90 74 100 84 Q110 94 120 84 Q130 74 142 84" />
        <Loop kind="pulse" style={{ transformOrigin: '110px 56px' }}>
          <path className="accent-fill" d="M110 66 q-12 -10 -8 -18 q4 -7 8 -1 q4 -6 8 1 q4 8 -8 18 z" />
        </Loop>
      </PopIn>
      <PopIn delay={0.9}>
        <path className="ink-line" opacity={0.5} d="M30 176 h160" />
      </PopIn>
    </IllustrationSvg>
  );
}
