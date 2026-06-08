import { Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import { assetUrl } from '../utils/assetUrl';

interface Attraction {
  id: number;
  naam: string;
  beschrijving: string;
  waarom: string;
  tip: string;
  categorie: string;
  image?: string;
}

const catColors: Record<string, string> = {
  Architectuur: 'bg-wine/10 text-wine',
  Museum: 'bg-sage/20 text-sage',
  Plein: 'bg-gold/20 text-gold-dark',
  Paleis: 'bg-wine/10 text-wine',
  Historisch: 'bg-espresso/10 text-espresso',
  Wijk: 'bg-sage/20 text-sage',
  Park: 'bg-sage/30 text-sage',
  Kerk: 'bg-cream-dark/50 text-espresso',
  Winkelen: 'bg-gold/20 text-gold-dark',
  Markt: 'bg-gold/20 text-gold-dark',
};

export default function AttractionCard({ attraction, index }: { attraction: Attraction; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="bg-white rounded-2xl shadow-sm border border-cream-dark/30 overflow-hidden flex flex-col"
    >
      {attraction.image && (
        <div className="relative h-44 overflow-hidden">
          <img
            src={assetUrl(attraction.image)}
            alt={attraction.naam}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 to-transparent" />
          <div className="absolute bottom-2 left-3 right-3 flex items-end justify-between">
            <h3 className="font-heading text-sm font-semibold text-cream leading-tight drop-shadow">{attraction.naam}</h3>
            <span className={`text-xs px-2 py-0.5 rounded-full whitespace-nowrap backdrop-blur-sm bg-white/20 text-cream border border-white/30`}>
              {attraction.categorie}
            </span>
          </div>
        </div>
      )}
      <div className="p-4 flex flex-col gap-2">
        {!attraction.image && (
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-heading text-base font-semibold text-espresso leading-tight">{attraction.naam}</h3>
            <span className={`text-xs px-2 py-0.5 rounded-full whitespace-nowrap ${catColors[attraction.categorie] || 'bg-cream-dark/30 text-espresso'}`}>
              {attraction.categorie}
            </span>
          </div>
        )}
        <p className="text-sm text-espresso/70 leading-relaxed">{attraction.beschrijving}</p>
        <div className="bg-wine/5 rounded-xl p-3">
          <p className="text-xs text-espresso/80 italic leading-relaxed">
            <span className="font-semibold not-italic text-wine">Waarom: </span>
            {attraction.waarom}
          </p>
        </div>
        <div className="flex items-start gap-1.5 mt-1">
          <Lightbulb size={13} className="text-gold mt-0.5 shrink-0" />
          <p className="text-xs text-espresso/60 leading-relaxed">{attraction.tip}</p>
        </div>
      </div>
    </motion.div>
  );
}
