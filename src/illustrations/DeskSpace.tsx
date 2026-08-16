import deskImg from '../assets/illustrations/01-espacio.png';
import { ImageIllustration, Loop } from './primitives';

/**
 * "Disfruta tu espacio." — ilustración importada de alguien con audífonos en su escritorio,
 * taza de café y monitor. Las notas musicales flotan encima como acento animado; el resto
 * de la imagen queda estático.
 */
export default function DeskSpace() {
  return (
    <ImageIllustration src={deskImg} alt="">
      <svg viewBox="0 0 220 220" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
        <Loop kind="float">
          <circle className="ink-line" cx={100} cy={54} r={5} />
          <path className="ink-line" d="M105 54 V30 h11" />
        </Loop>
        <Loop kind="float" delay={0.5}>
          <circle className="ink-line" cx={120} cy={42} r={4.6} />
          <path className="ink-line" d="M124.6 42 V22 h10" />
        </Loop>
      </svg>
    </ImageIllustration>
  );
}
