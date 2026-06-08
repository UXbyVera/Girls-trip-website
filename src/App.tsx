import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import Restaurants from './pages/Restaurants';
import Planning from './pages/Planning';
import Bezienswaardigheden from './pages/Bezienswaardigheden';
import Weer from './pages/Weer';
import Accommodatie from './pages/Accommodatie';
import Italiaans from './pages/Italiaans';
import SplashScreen from './components/SplashScreen';

const queryClient = new QueryClient();
const UNLOCK_KEY = 'girlstrip-unlocked';

export default function App() {
  const [unlocked, setUnlocked] = useState(
    () => localStorage.getItem(UNLOCK_KEY) === 'true'
  );

  const handleUnlock = () => {
    localStorage.setItem(UNLOCK_KEY, 'true');
    setUnlocked(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      {/* Hoofdapp staat altijd klaar achter het splashscherm */}
      <BrowserRouter basename={import.meta.env.PROD ? '/Girls-trip-website' : '/'}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/planning" element={<Planning />} />
            <Route path="/bezienswaardigheden" element={<Bezienswaardigheden />} />
            <Route path="/weer" element={<Weer />} />
            <Route path="/accommodatie" element={<Accommodatie />} />
            <Route path="/italiaans" element={<Italiaans />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* Splashscherm legt over de app heen en verdwijnt na unlock */}
      <AnimatePresence>
        {!unlocked && <SplashScreen key="splash" onUnlock={handleUnlock} />}
      </AnimatePresence>
    </QueryClientProvider>
  );
}
