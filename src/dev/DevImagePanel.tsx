import { useRef, useState } from 'react';
import type { ChangeEvent } from 'react';
import { fileToCompressedDataUrl } from './imageUtils';

interface DevImagePanelProps {
  hasCustomImage: boolean;
  onSave?: (dataUrl: string) => void;
  onRemove?: () => void;
}

/** Dev-mode overlay on an art page: pick a photo, preview it, and save it in place of the illustration. */
export default function DevImagePanel({ hasCustomImage, onSave, onRemove }: DevImagePanelProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [pending, setPending] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    setBusy(true);
    setError(null);
    try {
      const dataUrl = await fileToCompressedDataUrl(file);
      setPending(dataUrl);
    } catch {
      setError('No se pudo leer la imagen');
    } finally {
      setBusy(false);
    }
  }

  function handleSave() {
    if (!pending || !onSave) return;
    try {
      onSave(pending);
      setPending(null);
    } catch {
      setError('Se aplicó, pero no se pudo guardar (memoria llena)');
    }
  }

  return (
    <div
      onClick={(event) => event.stopPropagation()}
      className="absolute inset-x-3 bottom-3 z-10 flex flex-col gap-2 rounded-xl border border-accent/40 bg-[#241c17]/90 p-3 text-left shadow-lg backdrop-blur"
    >
      <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-accent">Modo desarrollador</span>

      {pending && <img src={pending} alt="Vista previa" className="h-16 w-full rounded-md object-cover" />}

      {error && <p className="font-sans text-[10px] text-accent">{error}</p>}

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={busy}
          className="rounded-full border border-[#f7f3ea]/25 px-3 py-1.5 font-sans text-[10px] font-semibold uppercase tracking-wide text-[#f3ead9] disabled:opacity-50"
        >
          {busy ? 'Cargando…' : 'Elegir imagen'}
        </button>
        {pending && (
          <button
            type="button"
            onClick={handleSave}
            className="rounded-full bg-accent px-3 py-1.5 font-sans text-[10px] font-semibold uppercase tracking-wide text-[#f7f3ea]"
          >
            Guardar
          </button>
        )}
        {hasCustomImage && !pending && (
          <button
            type="button"
            onClick={onRemove}
            className="rounded-full border border-[#f7f3ea]/15 px-3 py-1.5 font-sans text-[10px] font-semibold uppercase tracking-wide text-[#cbb9a0]"
          >
            Quitar
          </button>
        )}
      </div>

      <input ref={inputRef} type="file" accept="image/*" onChange={handleFile} className="hidden" />
    </div>
  );
}
