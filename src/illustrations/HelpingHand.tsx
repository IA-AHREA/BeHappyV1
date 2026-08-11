import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Pide ayuda." — a continuous-line figure reaching down to pull another up from a pit. */
export default function HelpingHand() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath duration={1.2} d="M30 200 V128 H100 V200" />
        <path className="ink-line" opacity={0.4} d="M40 150 h18 M44 168 h22 M38 186 h16" />
      </PopIn>
      <PopIn delay={0.3}>
        <DrawPath duration={1} d="M56 90 C48 89 42 95 42 103 C42 109 46 113 52 115" />
        <path className="ink-line" d="M56 90 C64 89 70 95 68 101 C67 106 63 109 58 110" />
        <path className="ink-line" d="M52 115 C48 122 46 130 48 138" />
        <path className="ink-line" d="M52 115 C58 122 62 130 76 134" />
        <path className="ink-line" d="M48 138 C44 148 42 158 44 168" />
        <path className="ink-line" d="M48 138 C52 146 54 154 52 164" />
      </PopIn>
      <PopIn delay={0.6}>
        <Loop kind="walk">
          <DrawPath duration={1} d="M96 156 C104 155 110 161 110 169 C110 175 106 179 100 181" />
          <path className="ink-line" d="M96 156 C88 155 82 161 84 167 C85 172 89 175 94 176" />
          <path className="ink-line" d="M100 181 C104 190 106 198 104 206" />
          <path className="ink-line" d="M100 181 C94 188 92 196 96 206" />
          <path className="ink-line" d="M94 176 C86 168 80 160 78 150" />
        </Loop>
      </PopIn>
      <PopIn delay={0.9}>
        <Loop kind="pulse" style={{ transformOrigin: '77px 141px' }}>
          <circle cx={77} cy={141} r={3} fill="#2b2a28" opacity={0.5} />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
