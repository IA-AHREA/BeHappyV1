import { useRef, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { DEV_KEY } from './devKey';
import { fileToDataUrl } from './audioUtils';

interface ConfigGearProps {
  devModeEnabled: boolean;
  onToggleDevMode: (value: boolean) => void;
  onAddPage?: () => Promise<unknown>;
  musicUrl?: string | null;
  onSaveMusic?: (dataUrl: string) => Promise<void>;
  onRemoveMusic?: () => Promise<void>;
}

type Stage = 'closed' | 'password' | 'panel';
type AsyncStatus = 'idle' | 'busy' | 'done' | 'error';

/** Gear button visible from the very start of the app; gates developer settings behind a password. */
export default function ConfigGear({
  devModeEnabled,
  onToggleDevMode,
  onAddPage,
  musicUrl,
  onSaveMusic,
  onRemoveMusic,
}: ConfigGearProps) {
  const [stage, setStage] = useState<Stage>('closed');
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [addPageStatus, setAddPageStatus] = useState<AsyncStatus>('idle');
  const [musicStatus, setMusicStatus] = useState<AsyncStatus>('idle');
  const musicInputRef = useRef<HTMLInputElement>(null);

  async function handleAddPage() {
    setAddPageStatus('busy');
    try {
      await onAddPage?.();
      setAddPageStatus('done');
    } catch {
      setAddPageStatus('error');
    }
    setTimeout(() => setAddPageStatus('idle'), 2500);
  }

  async function handleMusicFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    setMusicStatus('busy');
    try {
      const dataUrl = await fileToDataUrl(file);
      await onSaveMusic?.(dataUrl);
      setMusicStatus('done');
    } catch {
      setMusicStatus('error');
    }
    setTimeout(() => setMusicStatus('idle'), 2500);
  }

  async function handleRemoveMusic() {
    setMusicStatus('busy');
    try {
      await onRemoveMusic?.();
      setMusicStatus('idle');
    } catch {
      setMusicStatus('error');
      setTimeout(() => setMusicStatus('idle'), 2500);
    }
  }

  function open() {
    setStage('password');
    setValue('');
    setError(false);
  }

  function close() {
    setStage('closed');
    setValue('');
    setError(false);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (value.trim().toLowerCase() === DEV_KEY) {
      setStage('panel');
    } else {
      setError(true);
      setValue('');
    }
  }

  return (
    <>
      <motion.button
        type="button"
        onClick={open}
        aria-label="Configuración"
        whileHover={{ scale: 1.05, rotate: 25 }}
        whileTap={{ scale: 0.92 }}
        className="fixed left-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-[#f7f3ea]/25 bg-[#241c17]/70 text-[#f3ead9] shadow-lg backdrop-blur transition-colors hover:bg-[#241c17]/90"
      >
        <span className="text-lg leading-none" aria-hidden="true">
          ⚙️
        </span>
      </motion.button>

      <AnimatePresence>
        {stage !== 'closed' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 flex items-center justify-center bg-[#161110]/80 px-6 backdrop-blur-sm"
            onClick={close}
          >
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.97 }}
              onClick={(event) => event.stopPropagation()}
              className="flex w-full max-w-xs flex-col items-center gap-5 rounded-2xl border border-[#f7f3ea]/15 bg-[#241c17] px-6 py-7 text-center shadow-2xl"
            >
              {stage === 'password' ? (
                <>
                  <div className="flex flex-col gap-1">
                    <span className="font-sans text-xs uppercase tracking-[0.35em] text-[#cbb9a0]/70">
                      Configuración
                    </span>
                    <h2 className="font-caveat text-3xl font-semibold text-[#f3ead9]">Acceso restringido</h2>
                  </div>
                  <motion.form
                    onSubmit={handleSubmit}
                    animate={error ? { x: [0, -8, 8, -6, 6, 0] } : { x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex w-full flex-col items-center gap-3"
                  >
                    <input
                      type="password"
                      value={value}
                      onChange={(event) => {
                        setValue(event.target.value);
                        setError(false);
                      }}
                      placeholder="Contraseña"
                      autoFocus
                      className="w-full rounded-full border border-[#f7f3ea]/25 bg-[#f7f3ea]/10 px-5 py-3 text-center font-sans text-sm text-[#f3ead9] placeholder:text-[#cbb9a0]/50 outline-none focus:border-accent"
                    />
                    {error && <p className="font-sans text-xs text-accent">Contraseña incorrecta</p>}
                    <div className="flex w-full gap-2">
                      <button
                        type="button"
                        onClick={close}
                        className="flex-1 rounded-full border border-[#f7f3ea]/20 px-4 py-2.5 font-sans text-xs font-semibold uppercase tracking-wide text-[#cbb9a0]"
                      >
                        Cancelar
                      </button>
                      <button
                        type="submit"
                        className="flex-1 rounded-full bg-accent px-4 py-2.5 font-sans text-xs font-semibold uppercase tracking-wide text-[#f7f3ea] shadow-lg"
                      >
                        Entrar
                      </button>
                    </div>
                  </motion.form>
                </>
              ) : (
                <>
                  <div className="flex flex-col gap-1">
                    <span className="font-sans text-xs uppercase tracking-[0.35em] text-[#cbb9a0]/70">
                      Configuración
                    </span>
                    <h2 className="font-caveat text-3xl font-semibold text-[#f3ead9]">Modo desarrollador</h2>
                  </div>
                  <p className="font-sans text-xs leading-relaxed text-[#cbb9a0]/80">
                    Con el modo desarrollador activo, cada página muestra un panel para elegir tu
                    propia imagen, editar su texto, o eliminarla. También podés agregar páginas
                    nuevas al final del libro.
                  </p>
                  <button
                    type="button"
                    onClick={() => onToggleDevMode(!devModeEnabled)}
                    aria-pressed={devModeEnabled}
                    className={`flex w-full items-center justify-between rounded-full border px-5 py-3 font-sans text-sm font-semibold transition-colors ${
                      devModeEnabled
                        ? 'border-accent/60 bg-accent/20 text-[#f3ead9]'
                        : 'border-[#f7f3ea]/20 bg-[#f7f3ea]/5 text-[#cbb9a0]'
                    }`}
                  >
                    <span>Modo desarrollador</span>
                    <span
                      className={`flex h-6 w-11 items-center rounded-full px-0.5 transition-colors ${
                        devModeEnabled ? 'justify-end bg-accent' : 'justify-start bg-[#f7f3ea]/20'
                      }`}
                    >
                      <motion.span layout className="h-5 w-5 rounded-full bg-[#f7f3ea] shadow" />
                    </span>
                  </button>

                  {devModeEnabled && (
                    <div className="flex w-full flex-col items-center gap-2">
                      <button
                        type="button"
                        onClick={handleAddPage}
                        disabled={addPageStatus === 'busy'}
                        className="w-full rounded-full border border-[#f7f3ea]/20 bg-[#f7f3ea]/5 px-4 py-2.5 font-sans text-xs font-semibold uppercase tracking-wide text-[#f3ead9] disabled:opacity-50"
                      >
                        {addPageStatus === 'busy' ? 'Agregando…' : '+ Agregar página'}
                      </button>
                      {addPageStatus === 'done' && (
                        <p className="font-sans text-[11px] text-[#cbb9a0]">
                          Página agregada al final del libro
                        </p>
                      )}
                      {addPageStatus === 'error' && (
                        <p className="font-sans text-[11px] text-accent">No se pudo agregar la página</p>
                      )}

                      <div className="mt-2 flex w-full flex-col items-center gap-2 border-t border-[#f7f3ea]/10 pt-4">
                        <span className="self-start font-sans text-[10px] uppercase tracking-[0.25em] text-accent">
                          Música de fondo
                        </span>
                        <div className="flex w-full gap-2">
                          <button
                            type="button"
                            onClick={() => musicInputRef.current?.click()}
                            disabled={musicStatus === 'busy'}
                            className="flex-1 rounded-full border border-[#f7f3ea]/20 bg-[#f7f3ea]/5 px-4 py-2.5 font-sans text-xs font-semibold uppercase tracking-wide text-[#f3ead9] disabled:opacity-50"
                          >
                            {musicStatus === 'busy' ? 'Subiendo…' : musicUrl ? 'Cambiar canción' : 'Elegir canción'}
                          </button>
                          {musicUrl && musicStatus !== 'busy' && (
                            <button
                              type="button"
                              onClick={handleRemoveMusic}
                              className="rounded-full border border-[#f7f3ea]/15 px-4 py-2.5 font-sans text-xs font-semibold uppercase tracking-wide text-[#cbb9a0]"
                            >
                              Quitar
                            </button>
                          )}
                        </div>
                        {musicStatus === 'done' && (
                          <p className="font-sans text-[11px] text-[#cbb9a0]">Canción guardada — suena al entrar al libro</p>
                        )}
                        {musicStatus === 'error' && (
                          <p className="font-sans text-[11px] text-accent">No se pudo guardar la canción</p>
                        )}
                        <input
                          ref={musicInputRef}
                          type="file"
                          accept="audio/*"
                          onChange={handleMusicFile}
                          className="hidden"
                        />
                      </div>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={close}
                    className="w-full rounded-full border border-[#f7f3ea]/20 px-4 py-2.5 font-sans text-xs font-semibold uppercase tracking-wide text-[#cbb9a0]"
                  >
                    Cerrar
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
