import { useEffect, useRef, useState } from 'react';
import type { ChangeEvent } from 'react';

interface DevTextPanelProps {
  phrase: string;
  onSave: (phrase: string) => Promise<void>;
  onDelete: () => Promise<void>;
}

type Status = 'idle' | 'busy' | 'done' | 'error';

/** Dev-mode overlay on a text page: edit its phrase (auto-saves) and delete the page. */
export default function DevTextPanel({ phrase, onSave, onDelete }: DevTextPanelProps) {
  const [value, setValue] = useState(phrase);
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState<string | null>(null);
  const [confirmingDelete, setConfirmingDelete] = useState(false);
  const savedRef = useRef(phrase);
  const debounceRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    setValue(phrase);
    savedRef.current = phrase;
  }, [phrase]);

  useEffect(() => {
    if (status !== 'done' && status !== 'error') return;
    const timer = setTimeout(() => setStatus('idle'), 2000);
    return () => clearTimeout(timer);
  }, [status]);

  useEffect(() => {
    if (!confirmingDelete) return;
    const timer = setTimeout(() => setConfirmingDelete(false), 3000);
    return () => clearTimeout(timer);
  }, [confirmingDelete]);

  useEffect(() => () => clearTimeout(debounceRef.current), []);

  async function save(next: string) {
    const trimmed = next.trim();
    if (!trimmed || trimmed === savedRef.current) return;
    setStatus('busy');
    setMessage(null);
    try {
      await onSave(trimmed);
      savedRef.current = trimmed;
      setStatus('done');
      setMessage('Guardado');
    } catch {
      setStatus('error');
      setMessage('No se pudo guardar');
    }
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const next = event.target.value;
    setValue(next);
    clearTimeout(debounceRef.current);
    debounceRef.current = window.setTimeout(() => save(next), 1000);
  }

  function handleBlur() {
    clearTimeout(debounceRef.current);
    save(value);
  }

  async function handleDelete() {
    if (!confirmingDelete) {
      setConfirmingDelete(true);
      return;
    }
    setConfirmingDelete(false);
    setStatus('busy');
    setMessage(null);
    try {
      await onDelete();
    } catch {
      setStatus('error');
      setMessage('No se pudo eliminar la página');
    }
  }

  return (
    <div
      onClick={(event) => event.stopPropagation()}
      // react-pageflip listens for mousedown/touchstart on the whole book to start its drag-to-flip
      // gesture, exempting only <a>/<button> tags — a <textarea> isn't exempt, so without stopping
      // propagation here *before* that (capture fires before the flip library's bubble-phase
      // listener even runs) tapping into the field gets swallowed as a page flip instead of focusing it.
      onMouseDownCapture={(event) => event.stopPropagation()}
      onTouchStartCapture={(event) => event.stopPropagation()}
      className="absolute inset-x-3 bottom-3 z-10 flex flex-col gap-2 rounded-xl border border-accent/40 bg-[#241c17]/90 p-3 text-left shadow-lg backdrop-blur"
    >
      <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-accent">Modo desarrollador</span>

      <textarea
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        rows={2}
        className="w-full resize-none rounded-md border border-[#f7f3ea]/20 bg-[#f7f3ea]/5 px-2 py-1.5 font-sans text-xs text-[#f3ead9] outline-none focus:border-accent"
      />

      {message && (
        <p className={`font-sans text-[10px] ${status === 'error' ? 'text-accent' : 'text-[#cbb9a0]'}`}>{message}</p>
      )}

      <button
        type="button"
        onClick={handleDelete}
        className={`self-start rounded-full border px-3 py-1.5 font-sans text-[10px] font-semibold uppercase tracking-wide ${
          confirmingDelete ? 'border-accent bg-accent text-[#f7f3ea]' : 'border-[#f7f3ea]/15 text-[#cbb9a0]'
        }`}
      >
        {confirmingDelete ? '¿Seguro? Tocá de nuevo' : 'Eliminar página'}
      </button>
    </div>
  );
}
