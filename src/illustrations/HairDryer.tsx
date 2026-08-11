import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Programa un plan realista." — a continuous-line figure with wild hair and a hairdryer. */
export default function HairDryer() {
  return (
    <IllustrationSvg>
      <PopIn>
        <DrawPath
          duration={1.4}
          d="M96 70 C86 68 78 76 78 88 C78 96 83 102 90 105 C82 112 76 126 78 140 C79 148 83 153 89 156"
        />
        <path className="ink-line" d="M96 70 C106 68 114 76 112 86 C111 92 106 96 100 97" />
        <path className="ink-line" d="M89 156 C91 164 89 172 84 178" />
        <path className="ink-line" d="M89 156 C96 162 100 170 97 178" />
      </PopIn>
      <PopIn delay={0.5}>
        <Loop kind="sway" style={{ transformOrigin: '90px 60px' }}>
          <path
            className="ink-line"
            opacity={0.55}
            d="M82 66 C76 56 66 50 54 48 M90 62 C86 50 78 40 66 34 M100 62 C100 48 96 36 90 24 M108 66 C112 54 120 44 132 40"
          />
        </Loop>
      </PopIn>
      <PopIn delay={0.7}>
        <DrawPath duration={0.6} d="M118 88 h26 c8 0 8 16 0 16 h-26 z" />
        <path className="ink-line" d="M118 92 h-14 v8 h14" />
        <path className="ink-line" d="M144 96 L156 96 L166 88 M144 96 L160 104" />
        <path className="ink-line" opacity={0.5} d="M112 90 C104 84 96 78 90 74" />
      </PopIn>
    </IllustrationSvg>
  );
}
