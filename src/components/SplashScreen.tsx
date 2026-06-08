import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MapPin } from 'lucide-react';

interface Props {
  onUnlock: () => void;
}


export default function SplashScreen({ onUnlock }: Props) {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();

    if (input.trim().toLowerCase() === 'turijn') {
      setError(false);
      // Korte vertraging zodat de gebruiker visueel feedback krijgt
      setTimeout(onUnlock, 300);
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setInput('');
      inputRef.current?.focus();
    }
  };

  return (
    // motion.div hier: AnimatePresence in App.tsx regelt de exit
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.55, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-espresso px-6"
    >
      {/* Decoratieve achtergrond-gloed */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-wine/10 -translate-y-1/3 translate-x-1/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gold/5 translate-y-1/3 -translate-x-1/3 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-sm flex flex-col items-center gap-8">

        {/* Icoon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="w-16 h-16 rounded-full bg-wine/20 border border-wine/30 flex items-center justify-center"
        >
          <MapPin size={28} className="text-gold" strokeWidth={1.5} />
        </motion.div>

        {/* Titels */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center"
        >
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">Sherlock homies</p>
          <h1 className="font-heading text-3xl text-cream font-bold">Waar gaan we naartoe?</h1>
        </motion.div>

        {/* Formulier */}
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-3"
        >
          <motion.div
            animate={shake ? { x: [0, -8, 8, -6, 6, -3, 3, 0] } : {}}
            transition={{ duration: 0.45 }}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => { setInput(e.target.value); setError(false); }}
              placeholder="Raad de bestemming..."
              autoComplete="off"
              className={`w-full bg-white/[0.08] border rounded-xl px-4 py-3 text-cream placeholder-cream/30 text-base outline-none transition-all focus:bg-white/[0.12]
                ${error
                  ? 'border-red-400/70 focus:border-red-400'
                  : 'border-wine/30 focus:border-gold/60'
                }`}
            />
          </motion.div>

          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-red-400/90 text-xs text-center"
              >
                Helaas, dat is niet de juiste bestemming. Probeer het opnieuw!
              </motion.p>
            )}
          </AnimatePresence>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-wine hover:bg-wine-light text-cream font-semibold py-3 rounded-xl transition-colors text-base"
          >
            Onthullen <Send size={15} strokeWidth={1.8} />
          </button>
        </motion.form>

      </div>
    </motion.div>
  );
}
