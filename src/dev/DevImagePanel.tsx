import { useEffect, useRef, useState } from 'react';
import type { ChangeEvent } from 'react';
import { fileToCompressedDataUrl } from './imageUtils';

interface DevImagePanelProps {
  hasCustomImage: boolean;
  onSave?: (dataUrl: string) => void;
  onRemove?: () => void;
}

type Status = 'idle' | 'busy' | 'done' | 'error';

/** Dev-mode overlay on an art page: pick a photo and it's saved immediately, replacing the illustration. */
export default function DevImagePanel({ hasCustomImage, onSave, onRemove }: DevImagePanelProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (status !== 'done' && status !== 'error') return;
    const timer = setTimeout(() => setStatus('idle'), 2500);
    return () => clearTimeout(timer);
  }, [status]);

  async function handleFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    setStatus('busy');
    setMessage(null);
    try {
      const dataUrl = await fileToCompressedDataUrl(file);
      try {
        onSave?.(dataUrl);
        setStatus('done');
        setMessage('Imagen guardada');
      } catch {
        setStatus('done');
        setMessage('Se aplicó, pero no se pudo guardar (memoria llena)');
      }
    } catch {
      setStatus('error');
      setMessage('No se pudo leer la imagen');
    }
  }

  return (
    <div
      onClick={(event) => event.stopPropagation()}
      className="absolute inset-x-3 bottom-3 z-10 flex flex-col gap-2 rounded-xl border border-accent/40 bg-[#241c17]/90 p-3 text-left shadow-lg backdrop-blur"
    >
      <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-accent">Modo desarrollador</span>

      {message && (
        <p className={`font-sans text-[10px] ${status === 'error' ? 'text-accent' : 'text-[#cbb9a0]'}`}>{message}</p>
      )}

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={status === 'busy'}
          className="rounded-full border border-[#f7f3ea]/25 px-3 py-1.5 font-sans text-[10px] font-semibold uppercase tracking-wide text-[#f3ead9] disabled:opacity-50"
        >
          {status === 'busy' ? 'Guardando…' : 'Elegir imagen'}
        </button>
        {hasCustomImage && status !== 'busy' && (
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
