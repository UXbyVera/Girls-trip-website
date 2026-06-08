import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { assetUrl } from '../utils/assetUrl';

interface Restaurant {
  id: number;
  name: string;
  type: string;
  description: string;
  waarom: string;
  tags: string[];
  adres: string;
  url: string | null;
  image?: string;
}

export default function RestaurantCard({ restaurant, index }: { restaurant: Restaurant; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="bg-white rounded-2xl shadow-sm border border-cream-dark/30 overflow-hidden flex flex-col"
    >
      {restaurant.image && (
        <div className="relative h-40 overflow-hidden">
          <img
            src={assetUrl(restaurant.image)}
            alt={restaurant.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent" />
          <span className="absolute bottom-2 left-3 text-xs text-cream font-medium uppercase tracking-wide bg-wine/70 backdrop-blur-sm px-2 py-0.5 rounded-full">
            {restaurant.type}
          </span>
        </div>
      )}
      <div className="p-4 flex flex-col flex-1 gap-2">
        <h3 className="font-heading text-base font-semibold text-espresso leading-tight">{restaurant.name}</h3>
        {!restaurant.image && (
          <span className="text-xs text-wine font-medium uppercase tracking-wide">{restaurant.type}</span>
        )}
        <p className="text-sm text-espresso/70 leading-relaxed">{restaurant.description}</p>
        <div className="bg-gold/10 rounded-xl p-3 mt-1">
          <p className="text-xs text-espresso/80 italic leading-relaxed">
            <span className="font-semibold not-italic text-gold-dark">Waarom hier: </span>
            {restaurant.waarom}
          </p>
        </div>
        <div className="flex items-center gap-1 text-xs text-espresso/50 mt-auto pt-2">
          <MapPin size={12} />
          <span>{restaurant.adres}</span>
        </div>
      </div>
    </motion.div>
  );
}
