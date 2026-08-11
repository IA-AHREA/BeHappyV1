import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Celebra lo pequeño." — a little cake with a single flickering candle. */
export default function BirthdayCake() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath d="M74 130 h72 l-10 54 h-52 z" />
        <path className="ink-line" opacity={0.6} d="M84 136 l-6 44 M100 136 l-3 46 M120 136 l3 46 M136 136 l6 44" />
        <path className="ink-line" fill="#f7f3ea" d="M70 130 q-6 -22 20 -22 q4 -14 20 -14 t20 14 q26 0 20 22 z" />
      </PopIn>
      <PopIn delay={0.5}>
        <path className="ink-line" fill="#b5542c" fillOpacity={0.15} d="M106 94 v-22 h8 v22" />
        <Loop kind="flame" style={{ transformOrigin: '110px 62px' }}>
          <path className="accent-fill" d="M110 64 q-7 -9 0 -18 q7 9 0 18 z" />
        </Loop>
      </PopIn>
      <PopIn delay={0.8}>
        <Loop kind="twinkle">
          <circle className="accent-fill" cx={58} cy={86} r={3} />
        </Loop>
        <Loop kind="twinkle" delay={0.6}>
          <circle className="ink-fill" cx={164} cy={78} r={3} />
        </Loop>
        <Loop kind="twinkle" delay={1.1}>
          <circle className="accent-fill" cx={172} cy={120} r={3} />
        </Loop>
        <Loop kind="twinkle" delay={0.3}>
          <circle className="ink-fill" cx={48} cy={122} r={3} />
        </Loop>
      </PopIn>
      <PopIn delay={0.6}>
        <path className="ink-line" opacity={0.35} d="M56 192 h108" />
      </PopIn>
    </IllustrationSvg>
  );
}
