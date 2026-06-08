import { Home, Map, Wine, Bike, Utensils, Train, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

interface PlanningItem {
  tijd: string;
  activiteit: string;
  beschrijving?: string;
  type: string;
  icon: string;
}

interface DayData {
  dag: string;
  datum: string;
  emoji: string;
  items: PlanningItem[];
}

const iconMap: Record<string, React.ElementType> = {
  home:     Home,
  map:      Map,
  wine:     Wine,
  bike:     Bike,
  utensils: Utensils,
  train:    Train,
  shopping: ShoppingBag,
};

export default function PlanningDay({ day, index }: { day: DayData; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-white rounded-2xl shadow-sm border border-cream-dark/30 overflow-hidden"
    >
      {/* Day header — geen emoji */}
      <div className="bg-espresso px-5 py-4">
        <p className="font-heading text-gold text-lg font-semibold">{day.dag}</p>
        <p className="text-cream/60 text-sm">{day.datum} 2026</p>
      </div>

      {/* Timeline items — één kleur */}
      <div className="p-4 flex flex-col gap-0">
        {day.items.map((item, i) => {
          const Icon = iconMap[item.icon] || Home;
          return (
            <div key={i} className="flex gap-3">
              {/* Verticale lijn + dot */}
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full mt-1.5 shrink-0 bg-wine/60" />
                {i < day.items.length - 1 && (
                  <div className="w-px flex-1 bg-cream-dark/50 my-1" />
                )}
              </div>

              {/* Card */}
              <div className="mb-4 flex-1 rounded-xl border border-cream-dark/40 bg-cream/40 p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Icon size={13} className="text-wine/70 shrink-0" strokeWidth={1.5} />
                  <span className="text-xs font-semibold text-espresso/50 uppercase tracking-wide">{item.tijd}</span>
                </div>
                <p className="font-semibold text-espresso text-sm">{item.activiteit}</p>
                {item.beschrijving && (
                  <p className="text-xs text-espresso/60 mt-1 leading-relaxed">{item.beschrijving}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
