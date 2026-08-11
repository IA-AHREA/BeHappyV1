import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Mira las estrellas." — a continuous-line figure stargazing through a telescope. */
export default function Telescope() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath duration={1.1} d="M60 150 C52 149 46 155 46 163 C46 169 50 173 56 175" />
        <path className="ink-line" d="M60 150 C68 149 74 155 72 161 C71 166 67 170 62 171" />
        <path className="ink-line" d="M56 175 C50 182 46 192 48 202 C49 208 52 212 56 214" />
        <path className="ink-line" d="M56 214 L52 200 M56 214 L64 202" />
        <DrawPath duration={0.6} delay={0.3} d="M62 170 L104 110" strokeWidth={4} />
        <path className="ink-line" d="M96 122 L114 98 L124 106 L106 130 Z" />
        <path className="ink-line" d="M56 178 L86 158" />
        <path className="ink-line" d="M64 186 L92 168" />
      </PopIn>
      <PopIn delay={0.6}>
        <Loop kind="twinkle">
          <path className="ink-line" d="M150 50 l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3 l8 -3 z" />
        </Loop>
        <Loop kind="twinkle" delay={0.5}>
          <path className="ink-line" d="M180 84 l2.5 6 l6 2.5 l-6 2.5 l-2.5 6 l-2.5 -6 l-6 -2.5 l6 -2.5 z" />
        </Loop>
        <Loop kind="twinkle" delay={1}>
          <circle cx={130} cy={90} r={2} fill="#2b2a28" />
        </Loop>
        <Loop kind="twinkle" delay={0.8}>
          <circle cx={168} cy={40} r={2} fill="#2b2a28" />
        </Loop>
      </PopIn>
      <PopIn delay={0.5}>
        <path className="ink-line" opacity={0.55} d="M148 130 a20 20 0 1 1 22 -22" />
      </PopIn>
    </IllustrationSvg>
  );
}
