import { NavLink } from 'react-router-dom';
import { Home, Utensils, Calendar, MapPin, Cloud, Building2, MessageSquare } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/restaurants', label: 'Restaurants', icon: Utensils },
  { to: '/planning', label: 'Planning', icon: Calendar },
  { to: '/bezienswaardigheden', label: 'Bezienswaardigheden', icon: MapPin },
  { to: '/weer', label: 'Weer', icon: Cloud },
  { to: '/accommodatie', label: 'Accommodatie', icon: Building2 },
  { to: '/italiaans', label: 'Italiaans', icon: MessageSquare },
];

export default function TopNav() {
  return (
    <nav className="hidden md:flex sticky top-0 z-50 bg-espresso border-b border-wine/30 shadow-lg">
      <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
        <span className="font-heading text-gold text-xl py-3 whitespace-nowrap">🍷 Turijn 2026</span>
        <div className="flex items-center gap-1">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-3 py-4 text-sm transition-colors border-b-2 ` +
                (isActive
                  ? 'text-gold border-gold font-semibold'
                  : 'text-cream/70 border-transparent hover:text-cream hover:border-cream/30')
              }
            >
              <Icon size={15} strokeWidth={1.8} />
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
