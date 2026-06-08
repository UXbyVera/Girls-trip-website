import { Sun, Cloud, CloudRain, CloudSnow, CloudLightning, CloudDrizzle, Wind } from 'lucide-react';

interface WeatherDay {
  date: string;
  dayName: string;
  tempMax: number;
  tempMin: number;
  precipProbability: number;
  weatherCode: number;
}

function getWeatherInfo(code: number): { label: string; Icon: React.ElementType; color: string } {
  if (code === 0) return { label: 'Stralend zonnig', Icon: Sun, color: 'text-gold' };
  if (code <= 2) return { label: 'Gedeeltelijk bewolkt', Icon: Cloud, color: 'text-espresso/50' };
  if (code === 3) return { label: 'Bewolkt', Icon: Cloud, color: 'text-espresso/50' };
  if (code <= 49) return { label: 'Nevelig', Icon: Wind, color: 'text-sage' };
  if (code <= 57) return { label: 'Lichte motregen', Icon: CloudDrizzle, color: 'text-blue-400' };
  if (code <= 67) return { label: 'Regen', Icon: CloudRain, color: 'text-blue-500' };
  if (code <= 77) return { label: 'Sneeuw', Icon: CloudSnow, color: 'text-blue-200' };
  if (code <= 82) return { label: 'Regenbuien', Icon: CloudRain, color: 'text-blue-500' };
  if (code <= 86) return { label: 'Sneeuwbuien', Icon: CloudSnow, color: 'text-blue-200' };
  return { label: 'Onweer', Icon: CloudLightning, color: 'text-yellow-500' };
}

function getClothingTip(tempMax: number, precip: number): string {
  if (precip >= 60) return 'Neem een paraplu mee!';
  if (tempMax >= 28) return 'Zonnebrandcrème en een zonnebril zijn een must.';
  if (tempMax >= 22) return 'Licht gekleed, misschien een vest voor de avond.';
  if (tempMax >= 16) return 'Een jasje is zeker handig mee te nemen.';
  return 'Trek een warme jas aan — het is fris buiten.';
}

export default function WeatherCard({ day }: { day: WeatherDay }) {
  const { label, Icon, color } = getWeatherInfo(day.weatherCode);
  const tip = getClothingTip(day.tempMax, day.precipProbability);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-cream-dark/30 p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-heading font-semibold text-espresso">{day.dayName}</p>
          <p className="text-xs text-espresso/50">{day.date}</p>
        </div>
        <Icon size={32} className={color} />
      </div>
      <p className="text-sm text-espresso/70">{label}</p>
      <div className="flex items-center gap-3">
        <span className="text-2xl font-heading font-bold text-wine">{Math.round(day.tempMax)}°</span>
        <span className="text-lg text-espresso/40">/</span>
        <span className="text-lg text-espresso/50">{Math.round(day.tempMin)}°</span>
      </div>
      <div>
        <div className="flex items-center justify-between text-xs text-espresso/60 mb-1">
          <span>Kans op neerslag</span>
          <span className="font-semibold">{day.precipProbability}%</span>
        </div>
        <div className="h-1.5 bg-cream-dark/40 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-blue-400 transition-all"
            style={{ width: `${day.precipProbability}%` }}
          />
        </div>
      </div>
      <p className="text-xs text-espresso/60 bg-cream/80 rounded-xl px-3 py-2">{tip}</p>
    </div>
  );
}
