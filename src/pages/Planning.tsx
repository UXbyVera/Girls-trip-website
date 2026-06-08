import { motion } from 'framer-motion';
import { planning } from '../data/planning';
import PlanningDay from '../components/PlanningDay';

export default function Planning() {
  return (
    <div className="min-h-screen">
      <div className="bg-espresso px-4 pt-8 pb-6">
        <div className="max-w-xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-1">11 – 14 juni 2026</p>
            <h1 className="font-heading text-3xl text-cream font-bold">Weekendplanning</h1>
            <p className="text-cream/60 text-sm mt-1">Vier dagen vol Italiaans avontuur</p>
          </motion.div>
        </div>
      </div>
      <div className="max-w-xl mx-auto px-4 py-6 flex flex-col gap-5">
        {planning.map((day, i) => (
          <PlanningDay key={day.dag} day={day} index={i} />
        ))}
      </div>
    </div>
  );
}
