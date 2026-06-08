import { motion } from 'framer-motion';
import { bezienswaardigheden } from '../data/bezienswaardigheden';
import AttractionCard from '../components/AttractionCard';

export default function Bezienswaardigheden() {
  return (
    <div className="min-h-screen">
      <div className="bg-espresso px-4 pt-8 pb-6">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-1">Turijn ontdekken</p>
            <h1 className="font-heading text-3xl text-cream font-bold">Bezienswaardigheden</h1>
            <p className="text-cream/60 text-sm mt-1">De mooiste plekken die je niet mag missen</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bezienswaardigheden.map((b, i) => (
            <AttractionCard key={b.id} attraction={b} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
