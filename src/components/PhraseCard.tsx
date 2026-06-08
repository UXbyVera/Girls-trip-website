import { useState } from 'react';
import { Heart, Copy, Check } from 'lucide-react';

interface Phrase {
  categorie: string;
  nl: string;
  it: string;
  uitspraak: string;
}

interface PhraseCardProps {
  phrase: Phrase;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export default function PhraseCard({ phrase, isFavorite, onToggleFavorite }: PhraseCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(phrase.it).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-cream-dark/30 shadow-sm p-4 flex flex-col gap-2">
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm font-semibold text-espresso/70">{phrase.nl}</p>
        <button
          onClick={onToggleFavorite}
          className="shrink-0 p-1 rounded-full hover:bg-wine/10 transition-colors"
          aria-label="Favoriet"
        >
          <Heart
            size={16}
            className={isFavorite ? 'fill-wine text-wine' : 'text-espresso/30'}
          />
        </button>
      </div>
      <div className="flex items-center justify-between gap-2">
        <p className="font-heading text-lg font-semibold text-wine leading-tight">{phrase.it}</p>
        <button
          onClick={handleCopy}
          className="shrink-0 p-1.5 rounded-xl bg-cream hover:bg-cream-dark/40 transition-colors"
          aria-label="Kopieer"
        >
          {copied ? <Check size={13} className="text-sage" /> : <Copy size={13} className="text-espresso/40" />}
        </button>
      </div>
      <p className="text-xs text-espresso/50 italic">🔊 {phrase.uitspraak}</p>
    </div>
  );
}
