import { motion } from 'framer-motion';
import { assetUrl } from '../utils/assetUrl';
import {
  ChevronDown,
  Landmark, Coffee, GlassWater, Wine, UtensilsCrossed, Gem
} from 'lucide-react';

const funFacts = [
  { icon: Landmark,        text: 'Stad van barokke paleizen en zuilengalerijen' },
  { icon: Coffee,          text: 'Chocoladehoofdstad: geboorteplaats van gianduja en de iconische warme drank bicerin' },
  { icon: GlassWater,      text: 'Slow food, aperitivo en elegante cafés' },
  { icon: Wine,            text: 'Geboorteplaats van Barolo en verbonden met Martini' },
  { icon: UtensilsCrossed, text: 'Klassiekers zoals Vitello Tonnato' },
  { icon: Gem,             text: 'Verborgen parel van Italië' },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${assetUrl('/images/background-image.jpg')}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 via-espresso/60 to-espresso/90" />
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">11 – 14 juni 2026</p>
            <h1 className="font-heading text-cream leading-tight">
              <span className="block text-4xl md:text-6xl font-bold">Benvenute in</span>
              <span className="block text-5xl md:text-7xl font-black tracking-tight">Turijn</span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-cream/80 text-lg md:text-xl leading-relaxed"
          >
            Een weekendje vriendinnen, Italiaans genieten en puur geluk
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-wine/80 backdrop-blur-sm border border-gold/30 rounded-2xl px-6 py-3"
          >
            <p className="text-gold font-heading text-base font-semibold">
              Donderdag 11 juni – Zondag 14 juni 2026
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/50"
        >
          <ChevronDown size={28} className="animate-bounce" />
        </motion.div>
      </section>

      {/* Fun Facts */}
      <section className="py-16 px-4 max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-2xl md:text-3xl text-espresso text-center mb-10"
        >
          Wist je dat over Turijn?
        </motion.h2>
        <div className="flex flex-col gap-3">
          {funFacts.map(({ icon: Icon, text }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-start gap-4 bg-white rounded-2xl shadow-sm border border-cream-dark/30 p-4"
            >
              <Icon size={18} className="text-wine shrink-0 mt-0.5" strokeWidth={1.5} />
              <p className="text-espresso/80 text-sm leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Date Banner */}
      <section className="py-12 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto bg-gradient-to-br from-wine to-wine-dark rounded-3xl p-8 text-center shadow-xl"
        >
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Het weekend van het jaar</p>
          <h2 className="font-heading text-3xl text-cream font-bold mb-2">Do 11 – Zo 14 juni</h2>
          <p className="text-cream/70 text-base">2026 · Turijn, Piëmont, Italië</p>
          <div className="flex justify-center gap-6 mt-6">
            {[['Do', 11], ['Vr', 12], ['Za', 13], ['Zo', 14]].map(([d, n]) => (
              <div key={d} className="flex flex-col items-center gap-1">
                <span className="text-cream/50 text-xs">{d}</span>
                <span className="text-cream font-heading font-bold text-lg">{n}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
