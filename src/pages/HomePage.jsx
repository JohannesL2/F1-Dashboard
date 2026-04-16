import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import { FaHelmetSafety, FaCarSide, FaHeadset } from 'react-icons/fa6'
import { GiStopwatch, GiTrophy } from 'react-icons/gi'
import { GoLocation } from 'react-icons/go'
import { Typewriter } from 'react-simple-typewriter'
import RaceInfoModal from '../components/racing/RaceInfoModal'


const HomePage = () => {
  const [session, setSession] = useState(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hrs: 0, min: 0});
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

useEffect(() => {
  const getData = async () => {
  try {
  const currentYear = new Date().getFullYear();
  const res = await fetch(`https://api.openf1.org/v1/sessions?year=${currentYear}`);
  const data = await res.json();

  if (data && data.length > 0) {
    setSession(data[data.length - 1]);

    const now = new Date();
    const nextSession = data.find(s => new Date(s.date_start) > now) || data[data.length - 1];
          setSession(nextSession);
  }
  } catch (err) {
    console.error("Could not get F1-data:", err);
  } finally {
    setLoading(false);
  }
};
  getData()
}, []);

useEffect(() => {
    if (!session) return;

    const timer = setInterval(() => {
      const target = new Date(session.date_start).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
          min: Math.floor((difference / 1000 / 60) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [session]);
  
  return (
    <div className="flex flex-col min-h-screen bg-[#0b0b0b] text-white font-sans">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Bakgrunds-effekt (tänk kolfiber eller suddig racingbild) */}
        <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069')] bg-cover bg-center" />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-[#0b0b0b]" />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-4">
            <span className="text-red-600">F1</span> Dashboard
          </h1>
          <div className="text-xl md:text-2xl font-light text-gray-300 h-8">
            <Typewriter
              key={loading ? 'loading' : 'ready'}
              words={['Real-time Telemetry', 'Live Radio Feeds', 'Track Insights', 'Driver Statistics']}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
            />
          </div>
        </div>
      </section>

      {/* NEXT RACE BANNER (Live-känsla) */}
      <div className="max-w-6xl mx-auto w-full -mt-12 z-20 px-4">
        <div className="bg-gradient-to-r from-red-700 to-red-900 rounded-xl p-6 shadow-2xl border border-white/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-3 rounded-full"><GiTrophy size={32} /></div>
            <div>
              <p className="text-xs uppercase tracking-widest text-red-200">{session?.session_name}</p>
              <h2 className="text-2xl font-bold">{session?.circuit_short_name}</h2>
            </div>
          </div>
          <div className="flex gap-8 text-center">
             <div className="flex gap-8 text-center bg-black/20 py-2 px-6 rounded-lg backdrop-blur-sm border border-white/5">
              <div><p className="text-3xl font-black tabular-nums">{String(timeLeft.days).padStart(2, '0')}</p><p className="text-[10px] uppercase text-red-300 font-bold">Days</p></div>
              <div className="w-px h-10 bg-white/10 self-center"></div>
              <div><p className="text-3xl font-black tabular-nums">{String(timeLeft.hrs).padStart(2, '0')}</p><p className="text-[10px] uppercase text-red-300 font-bold">Hrs</p></div>
              <div className="w-px h-10 bg-white/10 self-center"></div>
              <div><p className="text-3xl font-black tabular-nums">{String(timeLeft.min).padStart(2, '0')}</p><p className="text-[10px] uppercase text-red-300 font-bold">Min</p></div>
            </div>
          </div>

          <button
            className="bg-white text-black px-8 py-3 rounded-full font-black uppercase text-sm hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 shadow-lg leading-none cursor-pointer"
            onClick={() => setIsModalOpen(true)}
            >
              Race Info
          </button>

          <RaceInfoModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            session={session}
          />
        </div>
      </div>

      {/* MAIN DASHBOARD GRID */}
      <div className="max-w-6xl mx-auto w-full py-20 px-4">
        <h3 className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-10 text-center">Select Dashboard</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardCard 
            to="/driver_dashboard" 
            icon={<FaHelmetSafety />} 
            title="Driver" 
            desc="Live tracking & bio"
          />
          <DashboardCard 
            to="/radio_dashboard" 
            icon={<FaHeadset />} 
            title="Radio" 
            desc="Team comms feed"
          />
          <DashboardCard 
            to="/car_dashboard" 
            icon={<FaCarSide />} 
            title="Car" 
            desc="Telemetry & speed"
          />
          <DashboardCard 
            to="/circuit_dashboard" 
            icon={<GoLocation />} 
            title="Circuit" 
            desc="Track conditions"
          />
          <DashboardCard 
            to="/laps" 
            icon={<GiStopwatch />} 
            title="Laps" 
            desc="Coming Soon" 
            disabled 
          />
        </div>
      </div>
    </div>
  )
}

// Sub-komponent för korten för att hålla koden snygg
const DashboardCard = ({ to, icon, title, desc, disabled }) => {
  const content = (
    <div className={`
      relative group overflow-hidden rounded-2xl p-8 h-48 flex flex-col justify-end
      ${disabled ? 'bg-gray-900 opacity-50 cursor-not-allowed' : 'bg-[#151515] hover:bg-[#1f1f1f] border border-white/5 hover:border-red-500/50'}
      transition-all duration-300 shadow-xl
    `}>
      <div className={`text-4xl mb-4 transition-transform duration-500 ${!disabled && 'group-hover:scale-110 text-red-500'}`}>
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-bold uppercase tracking-tighter">{title}</h4>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
      {/* Dekorativt "race-nummer" i bakgrunden */}
      <div className="absolute top-4 right-4 text-6xl font-black text-white/[0.02] italic group-hover:text-white/[0.05] transition-colors">
        {title.substring(0,2)}
      </div>
    </div>
  )

  return disabled ? content : <Link to={to}>{content}</Link>
}

export default HomePage