import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Llama a quien extrañas." — two continuous-line figures on a call, a heart pulsing between them. */
export default function PhoneCall() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath duration={1} d="M50 90 C42 89 36 95 36 103 C36 109 40 113 46 115 C40 122 36 132 38 144 C39 152 43 158 49 162" />
        <path className="ink-line" d="M50 90 C58 90 63 95 62 101 C61 106 57 109 53 110" />
        <path className="ink-line" d="M49 162 C51 172 49 182 44 190" />
        <path className="ink-line" d="M49 162 C56 168 60 178 57 190" />
        <path className="ink-line" d="M46 115 C56 112 64 108 68 102" />
      </PopIn>
      <PopIn delay={0.3}>
        <DrawPath duration={1} d="M168 90 C176 89 182 95 182 103 C182 109 178 113 172 115" />
        <path className="ink-line" d="M168 90 C160 90 155 95 156 101 C157 106 161 109 165 110" />
        <path className="ink-line" d="M172 115 C178 122 182 132 180 144 C179 152 175 158 169 162" />
        <path className="ink-line" d="M169 162 C167 172 169 182 174 190" />
        <path className="ink-line" d="M169 162 C162 168 158 178 161 190" />
        <path className="ink-line" d="M172 115 C162 112 154 108 150 102" />
      </PopIn>
      <PopIn delay={0.7}>
        <path className="ink-line" opacity={0.5} strokeDasharray="4 5" d="M70 100 Q90 88 108 100" />
        <Loop kind="pulse" style={{ transformOrigin: '109px 110px' }}>
          <path className="ink-line" d="M109 92 C100 82 84 88 84 100 C84 112 100 122 109 128 C118 122 134 112 134 100 C134 88 118 82 109 92 Z" />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
