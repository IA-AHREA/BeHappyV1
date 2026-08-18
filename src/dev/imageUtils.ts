const MAX_DIMENSION = 900;
const JPEG_QUALITY = 0.82;

/** Paper color from tailwind.config.js (`paper`) — the book page background custom images sit on. */
export const BOOK_BACKGROUND = '#f7f3ea';

/**
 * Reads an image file, downsizes it, and returns a compressed JPEG data URL (keeps localStorage
 * usage sane). The canvas is pre-filled with the book's paper color before drawing the image, so
 * a transparent PNG's empty areas blend into the page instead of turning black — JPEG has no
 * alpha channel, so without this the browser would flatten transparency to black on export.
 */
export function fileToCompressedDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(reader.error ?? new Error('No se pudo leer el archivo'));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('No se pudo leer la imagen'));
      img.onload = () => {
        const scale = Math.min(1, MAX_DIMENSION / Math.max(img.width, img.height));
        const width = Math.round(img.width * scale);
        const height = Math.round(img.height * scale);
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('No se pudo procesar la imagen'));
          return;
        }
        ctx.fillStyle = BOOK_BACKGROUND;
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', JPEG_QUALITY));
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  });
}
