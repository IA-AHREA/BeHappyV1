import { DrawPath, Face, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Trata de llegar." — a traveler with a walking stick nearing a castle on a hill. */
export default function Castle() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath d="M8 192 Q120 116 212 156" />
        <path className="ink-line" d="M142 140 v-38 h38 v38" />
        <path className="ink-line" opacity={0.9} d="M142 102 h6 v-7 h8 v7 h8 v-7 h8 v7 h8" />
        <path className="ink-line" d="M126 140 v-72 h16 v72 M126 68 L134 48 L142 68" />
        <path className="ink-line" d="M180 140 v-62 h14 v62 M180 78 L187 60 L194 78" />
        <path className="accent-fill" d="M134 48 v-15 l12 5 l-12 5 z" />
        <path className="ink-line" opacity={0.8} d="M155 140 v-14 a7 7 0 0 1 14 0 v14" />
        <circle className="ink-line" cx={134} cy={90} r={3} opacity={0.6} />
        <circle className="ink-line" cx={187} cy={96} r={3} opacity={0.6} />
      </PopIn>
      <PopIn delay={0.6}>
        <Loop kind="walk">
          <path className="ink-line" d="M38 158 Q38 144 52 142 L84 142 Q96 144 96 156 Q96 162 90 163 L46 163 Q38 162 38 158 Z" />
          <path className="ink-line" d="M46 163 L43 188 M58 163 L57 188 M80 163 L80 188 M90 161 L94 187" />
          <path className="ink-line" d="M88 142 Q94 122 106 116 L114 114 Q120 114 119 120 Q118 125 111 125 L104 127 Q96 132 94 142" />
          <path className="ink-line" d="M107 115 L105 108" />
          <path className="ink-line" d="M40 150 Q28 154 26 170" />
          <circle className="ink-fill" cx={68} cy={108} r={8} />
          <Face cx={68} cy={108} r={8} expression="smile" />
          <path className="ink-line" d="M68 116 L67 140 L62 158" />
          <path className="ink-line" d="M68 124 L92 128 L108 120" />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
