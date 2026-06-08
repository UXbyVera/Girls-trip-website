import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { zinnen } from '../data/italiaans';
import PhraseCard from '../components/PhraseCard';

const STORAGE_KEY = 'italiaans-favorieten';
const categories = ['Alle', ...Array.from(new Set(zinnen.map(z => z.categorie)))];

export default function Italiaans() {
  const [activecat, setActivecat] = useState('Alle');
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (phrase: string) => {
    setFavorites(prev =>
      prev.includes(phrase) ? prev.filter(f => f !== phrase) : [...prev, phrase]
    );
  };

  const filtered = activecat === 'Alle'
    ? zinnen
    : zinnen.filter(z => z.categorie === activecat);

  const favoritePhrases = zinnen.filter(z => favorites.includes(z.it));

  return (
    <div className="min-h-screen">
      <div className="bg-espresso px-4 pt-8 pb-6">
        <div className="max-w-xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-1">Parlare italiano</p>
            <h1 className="font-heading text-3xl text-cream font-bold">Spoedcursus Italiaans</h1>
            <p className="text-cream/60 text-sm mt-1">Alles wat je nodig hebt voor een geweldig weekend</p>
          </motion.div>
        </div>
      </div>

      {/* Category tabs */}
      <div className="sticky top-0 md:top-[57px] z-30 bg-cream/95 backdrop-blur border-b border-cream-dark/20 px-4 py-2">
        <div className="max-w-xl mx-auto overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="flex gap-1.5 w-max">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActivecat(cat)}
                className={`px-2.5 py-0.5 rounded-full text-xs whitespace-nowrap transition-colors ` +
                  (activecat === cat
                    ? 'bg-wine text-cream font-medium'
                    : 'text-espresso/50 hover:text-espresso/80')}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-4 py-6 flex flex-col gap-3">
        {activecat !== 'Alle' && (
          <p className="text-xs text-espresso/40">{filtered.length} zinnen</p>
        )}
        {filtered.map((phrase, i) => (
          <motion.div
            key={phrase.it}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
          >
            <PhraseCard
              phrase={phrase}
              isFavorite={favorites.includes(phrase.it)}
              onToggleFavorite={() => toggleFavorite(phrase.it)}
            />
          </motion.div>
        ))}

        {/* Favorites section */}
        {favoritePhrases.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Heart size={16} className="fill-wine text-wine" />
              <h2 className="font-heading text-lg font-semibold text-espresso">Mijn favorieten</h2>
            </div>
            <div className="flex flex-col gap-3">
              {favoritePhrases.map((phrase) => (
                <PhraseCard
                  key={`fav-${phrase.it}`}
                  phrase={phrase}
                  isFavorite={true}
                  onToggleFavorite={() => toggleFavorite(phrase.it)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
