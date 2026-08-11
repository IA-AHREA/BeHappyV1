import { DrawPath, IllustrationSvg, Loop, PopIn } from './primitives';

/** "Vive el momento." — a continuous-line tightrope walker balanced between PASADO and FUTURO. */
export default function Balance() {
  return (
    <IllustrationSvg>
      <PopIn>
        <path className="ink-line" opacity={0.4} d="M40 180 V96 M180 180 V96" />
        <DrawPath duration={1.2} d="M40 96 C90 108 130 108 180 96" />
        <text x={16} y={196} fontFamily="Nunito Sans, sans-serif" fontSize={10} fill="#6b665c" letterSpacing={2}>
          PASADO
        </text>
        <text x={150} y={196} fontFamily="Nunito Sans, sans-serif" fontSize={10} fill="#6b665c" letterSpacing={2}>
          FUTURO
        </text>
      </PopIn>
      <PopIn delay={0.6}>
        <Loop kind="sway" style={{ transformOrigin: '105px 100px' }}>
          <DrawPath
            duration={1}
            d="M104 50 C94 49 86 57 86 67 C86 74 91 79 98 81"
          />
          <path className="ink-line" d="M104 50 C114 49 122 57 121 67 C120 74 115 79 108 80" />
          <path className="ink-line" d="M98 81 C96 90 97 98 100 104" />
          <path className="ink-line" d="M108 80 C111 90 111 98 108 104" />
          <path className="ink-line" d="M100 104 C99 110 99 116 101 120 M108 104 C109 110 109 116 107 120" />
          <path className="ink-line" d="M99 78 C82 74 64 74 52 78" />
          <path className="ink-line" d="M107 78 C124 74 142 74 154 78" />
        </Loop>
      </PopIn>
    </IllustrationSvg>
  );
}
