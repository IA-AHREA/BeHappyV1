import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Empieza hoy." — the sun rising over a quiet horizon. */
export default function Sunrise() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath d="M16 140 h188" />
        <path className="ink-line" opacity={0.4} d="M36 158 h44 M140 162 h48 M70 174 h60" />
      </PopIn>
      <PopIn delay={0.4}>
        <Loop kind="float">
          <path className="ink-line" fill="#e8973f" fillOpacity={0.25} d="M66 140 a44 44 0 0 1 88 0 z" />
          <path className="ink-line" opacity={0.8} d="M110 76 v-14 M74 88 l-10 -10 M146 88 l10 -10 M58 118 h-14 M162 118 h14" />
        </Loop>
      </PopIn>
      <PopIn delay={0.9}>
        <Loop kind="float">
          <path className="ink-line" d="M50 56 q6 -8 12 0 q6 -8 12 0" />
        </Loop>
      </PopIn>
      <PopIn delay={1.3}>
        <Loop kind="float" delay={0.4}>
          <path className="ink-line" d="M148 44 q5 -7 10 0 q5 -7 10 0" />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
