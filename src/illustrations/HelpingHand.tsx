import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Pide ayuda." — one figure reaching down to pull another up from a pit. */
export default function HelpingHand() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath d="M28 196 v-72 h72 v72" />
        <path className="ink-line" opacity={0.4} d="M40 140 h20 M44 160 h24 M38 180 h18" />
      </PopIn>
      <PopIn delay={0.3}>
        <circle className="ink-fill" cx={64} cy={78} r={9} />
        <path className="ink-line" d="M64 87 Q68 104 66 122" />
        <path className="ink-line" d="M66 96 L104 120" />
        <path className="ink-line" opacity={0.7} d="M66 122 l-12 0 M66 122 l10 2" />
      </PopIn>
      <PopIn delay={0.6}>
        <Loop kind="walk">
          <circle className="ink-fill" cx={140} cy={120} r={9} />
          <path className="ink-line" d="M138 129 Q134 150 136 168" />
          <path className="ink-line" d="M136 138 L106 122" />
          <path className="ink-line" d="M136 168 L126 196 M136 168 L148 194" />
        </Loop>
      </PopIn>
      <PopIn delay={0.9}>
        <Loop kind="pulse" style={{ transformOrigin: '105px 121px' }}>
          <circle className="accent-fill" cx={105} cy={121} r={4} />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
