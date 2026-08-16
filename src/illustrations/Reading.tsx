import readingImg from '../assets/illustrations/01-lee.png';
import { ImageIllustration, Loop } from './primitives';

/**
 * "Lee." — ilustración importada (imagen estática) de una persona sentada leyendo un libro
 * grande. El swirl de ideas y las chispitas se dibujan encima como acentos animados, no
 * están horneados en la imagen, para que la escena conserve algo de movimiento.
 */
export default function Reading() {
  return (
    <ImageIllustration src={readingImg} alt="">
      <svg viewBox="0 0 220 220" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
        <Loop kind="sway" style={{ transformOrigin: '55px 90px' }}>
          <path
            className="ink-line"
            opacity={0.75}
            d="M60 95 C50 78 68 65 55 50 C45 38 60 28 50 15"
          />
          <path className="ink-line" opacity={0.6} d="M50 30 q-6 -2 -6 -8 q0 -5 5 -5 q4 0 4 4" />
        </Loop>
        <Loop kind="twinkle">
          <circle cx={44} cy={55} r={1.6} fill="#2b2a28" />
        </Loop>
        <Loop kind="twinkle" delay={0.5}>
          <circle cx={35} cy={70} r={1.3} fill="#2b2a28" />
        </Loop>
        <Loop kind="twinkle" delay={0.9}>
          <circle cx={60} cy={20} r={1.4} fill="#b5542c" />
        </Loop>
      </svg>
    </ImageIllustration>
  );
}
