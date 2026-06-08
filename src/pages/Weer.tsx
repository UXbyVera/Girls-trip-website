import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { ExternalLink, RefreshCw } from 'lucide-react';
import WeatherCard from '../components/WeatherCard';

const DUTCH_DAYS = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
const DUTCH_MONTHS = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];

interface WeatherDay {
  date: string;
  dayName: string;
  tempMax: number;
  tempMin: number;
  precipProbability: number;
  weatherCode: number;
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getDate()} ${DUTCH_MONTHS[d.getMonth()]}`;
}

function getDayName(dateStr: string) {
  const d = new Date(dateStr);
  return DUTCH_DAYS[d.getDay()];
}

async function fetchWeather(): Promise<WeatherDay[]> {
  const url = 'https://api.open-meteo.com/v1/forecast?latitude=45.0703&longitude=7.6869&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,weathercode&timezone=Europe%2FRome&forecast_days=7';
  const res = await fetch(url);
  if (!res.ok) throw new Error('Weer ophalen mislukt');
  const data = await res.json();
  return data.daily.time.map((date: string, i: number) => ({
    date: formatDate(date),
    dayName: getDayName(date),
    tempMax: data.daily.temperature_2m_max[i],
    tempMin: data.daily.temperature_2m_min[i],
    precipProbability: data.daily.precipitation_probability_max[i],
    weatherCode: data.daily.weathercode[i],
  }));
}

export default function Weer() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['weather'],
    queryFn: fetchWeather,
    staleTime: 1000 * 60 * 30,
  });

  return (
    <div className="min-h-screen">
      <div className="bg-espresso px-4 pt-8 pb-6">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-1">Turijn · Live voorspelling</p>
            <h1 className="font-heading text-3xl text-cream font-bold">Weer</h1>
            <p className="text-cream/60 text-sm mt-1">7-daagse weersvoorspelling voor Turijn</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        {isLoading && (
          <div className="flex flex-col items-center gap-4 py-20 text-espresso/50">
            <RefreshCw size={32} className="animate-spin text-wine" />
            <p>Weerdata ophalen...</p>
          </div>
        )}

        {isError && (
          <div className="flex flex-col items-center gap-4 py-16 text-center">
            <p className="text-espresso/70 text-base max-w-sm">
              Het weer is even niet op te halen. Bekijk de verwachting rechtstreeks op Weeronline.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => refetch()}
                className="flex items-center gap-2 px-4 py-2 bg-wine text-cream rounded-xl text-sm font-semibold hover:bg-wine-light transition-colors"
              >
                <RefreshCw size={14} /> Opnieuw proberen
              </button>
              <a
                href="https://www.weeronline.nl/Europa/Italie/Turijn/4301958/weersverwachting-14dagen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-cream border border-cream-dark/40 text-espresso rounded-xl text-sm font-semibold hover:border-wine/50 transition-colors"
              >
                Weeronline <ExternalLink size={13} />
              </a>
            </div>
          </div>
        )}

        {data && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.map((day, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <WeatherCard day={day} />
                </motion.div>
              ))}
            </div>
            <p className="text-xs text-espresso/40 text-center mt-6">
              Weerdata via{' '}
              <a href="https://open-meteo.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-wine">
                Open-Meteo
              </a>
              {' · '}
              <a
                href="https://www.weeronline.nl/Europa/Italie/Turijn/4301958/weersverwachting-14dagen"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-wine"
              >
                Bekijk ook de 14-dagsverwachting op Weeronline
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
