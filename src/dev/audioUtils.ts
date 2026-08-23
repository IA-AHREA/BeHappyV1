/** Reads an audio file as a data URL — unlike images, no compression: just pass the file through. */
export function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(reader.error ?? new Error('No se pudo leer el archivo'));
    reader.onload = () => resolve(reader.result as string);
    reader.readAsDataURL(file);
  });
}
