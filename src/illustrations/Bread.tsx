import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Comparte tu pan." — two continuous-line figures breaking bread together. */
export default function Bread() {
  return (
    <IllustrationSvg>
      <PopIn>
        <path className="ink-line" opacity={0.4} d="M28 176 Q110 160 192 176" />
      </PopIn>
      <PopIn delay={0.3}>
        <DrawPath duration={1} d="M56 94 C48 93 42 99 42 107 C42 113 46 117 52 119" />
        <path className="ink-line" d="M56 94 C64 93 70 99 68 105 C67 110 63 113 58 114" />
        <path className="ink-line" d="M52 119 C46 126 42 136 44 148 C45 156 49 162 55 166" />
        <path className="ink-line" d="M55 166 C57 174 55 182 50 188" />
        <path className="ink-line" d="M55 166 C62 172 66 180 63 188" />
        <path className="ink-line" d="M52 119 C62 116 72 112 78 106" />
      </PopIn>
      <PopIn delay={0.5}>
        <DrawPath duration={1} d="M164 94 C172 93 178 99 178 107 C178 113 174 117 168 119" />
        <path className="ink-line" d="M164 94 C156 93 150 99 152 105 C153 110 157 113 162 114" />
        <path className="ink-line" d="M168 119 C174 126 178 136 176 148 C175 156 171 162 165 166" />
        <path className="ink-line" d="M165 166 C163 174 165 182 170 188" />
        <path className="ink-line" d="M165 166 C158 172 154 180 157 188" />
        <path className="ink-line" d="M168 119 C158 116 148 112 142 106" />
      </PopIn>
      <PopIn delay={0.8}>
        <Loop kind="float">
          <path className="ink-line" d="M88 100 Q110 88 132 100 Q110 112 88 100 Z" />
          <path className="ink-line" opacity={0.6} d="M100 96 l4 6 M110 94 l4 6 M120 96 l4 6" />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
