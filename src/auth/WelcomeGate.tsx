import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';

const PASSWORD = 'mymelody';

interface WelcomeGateProps {
  onUnlock: () => void;
}

/** Password gate shown before the book: "Bienvenida" + hardcoded password. */
export default function WelcomeGate({ onUnlock }: WelcomeGateProps) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (value.trim().toLowerCase() === PASSWORD) {
      onUnlock();
    } else {
      setError(true);
      setValue('');
    }
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8 px-6 text-center">
      <div className="flex flex-col gap-2">
        <span className="font-sans text-xs uppercase tracking-[0.35em] text-[#cbb9a0]/70">
          31 razones para ser feliz
        </span>
        <h1 className="font-caveat text-5xl font-semibold text-[#f3ead9]">Bienvenida</h1>
        <p className="font-sans text-sm text-[#cbb9a0]/80">
          Para ingresar, introduce la contraseña y continúa
        </p>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        animate={error ? { x: [0, -8, 8, -6, 6, 0] } : { x: 0 }}
        transition={{ duration: 0.4 }}
        className="flex w-full max-w-xs flex-col items-center gap-4"
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
        {error && <p className="font-sans text-xs text-accent">Contraseña incorrecta, intenta de nuevo</p>}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          className="rounded-full bg-accent px-8 py-3 font-sans text-sm font-semibold uppercase tracking-wide text-[#f7f3ea] shadow-lg"
        >
          Continuar
        </motion.button>
      </motion.form>
    </div>
  );
}
