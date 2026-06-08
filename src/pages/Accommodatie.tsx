import { motion } from 'framer-motion';
import { MapPin, Clock, Users } from 'lucide-react';
import { accommodatie } from '../data/accommodatie';

const MAPS_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.152!2d7.6750183!3d45.0641975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d6b9c900701%3A0x2fa2d37ae89d25d1!2sHouse%20Leo%20%26%20Leya!5e0!3m2!1snl!2snl!4v1748000000000!5m2!1snl!2snl';

export default function Accommodatie() {
  return (
    <div className="min-h-screen">
      <div className="bg-espresso px-4 pt-8 pb-6">
        <div className="max-w-xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-1">Waar we slapen</p>
            <h1 className="font-heading text-3xl text-cream font-bold">Accommodatie</h1>
            <p className="text-cream/60 text-sm mt-1">{accommodatie.locatie}</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-4 py-6 flex flex-col gap-5">

        {/* Naam + adres + check-in/out */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl border border-cream-dark/30 shadow-sm overflow-hidden"
        >
          <div className="bg-wine/10 px-5 py-4 border-b border-cream-dark/20">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-wine mt-0.5 shrink-0" strokeWidth={1.5} />
              <div>
                <h2 className="font-heading text-lg font-semibold text-espresso">{accommodatie.naam}</h2>
                <p className="text-espresso/60 text-sm">{accommodatie.buurt}</p>
              </div>
            </div>
          </div>
          <div className="p-5 grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-espresso/50">
                <Clock size={13} strokeWidth={1.5} />
                <span className="text-xs uppercase tracking-wide font-semibold">Check-in</span>
              </div>
              <p className="font-semibold text-espresso text-sm">{accommodatie.checkIn}</p>
              <p className="text-xs text-sage font-medium">{accommodatie.checkInTijd}</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-espresso/50">
                <Clock size={13} strokeWidth={1.5} />
                <span className="text-xs uppercase tracking-wide font-semibold">Check-out</span>
              </div>
              <p className="font-semibold text-espresso text-sm">{accommodatie.checkOut}</p>
              <p className="text-xs text-wine font-medium">{accommodatie.checkOutTijd}</p>
            </div>
            <div className="col-span-2 flex items-center gap-2 pt-1 border-t border-cream-dark/20">
              <Users size={14} className="text-espresso/40" strokeWidth={1.5} />
              <span className="text-sm text-espresso/70">{accommodatie.gasten} gasten</span>
            </div>
          </div>
        </motion.div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="rounded-2xl overflow-hidden border border-cream-dark/30 shadow-sm"
        >
          <iframe
            title="Locatie House Leo & Leya"
            src={MAPS_EMBED}
            width="100%"
            height="360"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

      </div>
    </div>
  );
}
