import { motion } from 'framer-motion';
import { restaurants } from '../data/restaurants';
import RestaurantCard from '../components/RestaurantCard';

export default function Restaurants() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-espresso px-4 pt-8 pb-6">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-1">Eten & drinken</p>
            <h1 className="font-heading text-3xl text-cream font-bold">Restaurants</h1>
            <p className="text-cream/60 text-sm mt-1">De beste plekken in Turijn voor elke gelegenheid</p>
          </motion.div>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {restaurants.map((r, i) => (
            <RestaurantCard key={r.id} restaurant={r} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
