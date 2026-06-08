import { NavLink } from 'react-router-dom';
import { Home, Utensils, Calendar, MapPin, Cloud, Building2, MessageSquare } from 'lucide-react';

const navItems = [
  { to: '/restaurants', label: 'Eten', icon: Utensils },
  { to: '/planning', label: 'Planning', icon: Calendar },
  { to: '/bezienswaardigheden', label: 'Zien', icon: MapPin },
  { to: '/', label: 'Home', icon: Home },
  { to: '/weer', label: 'Weer', icon: Cloud },
  { to: '/accommodatie', label: 'Verblijf', icon: Building2 },
  { to: '/italiaans', label: 'Italiaans', icon: MessageSquare },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-espresso border-t border-wine/30 md:hidden">
      <div className="flex items-stretch justify-around">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center py-2 px-1 flex-1 text-center transition-colors min-w-0 ` +
              (isActive
                ? 'text-gold'
                : 'text-cream/60 hover:text-cream')
            }
          >
            <Icon size={20} strokeWidth={1.8} />
            <span className="text-[10px] mt-0.5 font-body leading-tight truncate w-full text-center">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
