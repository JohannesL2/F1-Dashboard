import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation();

  // En liten hjälpfunktion för att se vilken sida vi är på
  const isActive = (path) => location.pathname === path ? 'text-red-500' : 'text-gray-400 hover:text-white';

  return (
    <header className="fixed top-0 z-50 w-full bg-black/60 backdrop-blur-lg border-b border-white/5 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="text-xl font-black italic tracking-tighter group">
          <span className="text-red-600 group-hover:text-white transition-colors text-2xl">F1</span> DASH
        </Link>

        {/* NAVIGATION */}
        <nav className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold">
          <Link to="/driver_dashboard" className={`${isActive('/driver_dashboard')} transition-all`}>
            Drivers
          </Link>
          <Link to="/radio_dashboard" className={`${isActive('/radio_dashboard')} transition-all`}>
            Radio
          </Link>
          <Link to="/car_dashboard" className={`${isActive('/car_dashboard')} transition-all`}>
            Telemetry
          </Link>
          <Link to="/circuit_dashboard" className={`${isActive('/circuit_dashboard')} transition-all`}>
            Circuit
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header