import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { FaHelmetSafety } from 'react-icons/fa6'
import { GiStopwatch } from 'react-icons/gi'
import { FaCarSide } from 'react-icons/fa6'
import { GoLocation } from 'react-icons/go'
import { FaHeadset } from 'react-icons/fa6'

const HomePage = () => {
  return (
    <div>
        <div
      className="relative min-h-screen bg-cover bg-center bg-gradient-to-tr from-black to-[#dc2626]">
      {/* Overlay mörk transparent */}
      <div className="absolute bg-black bg-opacity-70"></div>
      
      <div className='p-4'>
      <h1 className="text-5xl sm:text-7xl font-extrabold text-white text-center">
  F1 Analytics Dashboard
</h1>
<p className="text-xl text-gray-200 mt-4 text-center">
  Real-time F1 analytics – drivers, cars, tracks and more.  
</p>
</div>

    <div className='relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 p-4 sm:p-10 text-xl sm:text-3xl font-semibold flex-grow min-h-[900px] md:min-h-[300px] items-center'>

      <Link 
      to='/driver_dashboard'
      className='bg-red-600 text-white whitespace-normal break-words rounded-lg p-4 shadow-lg py-10 text-center text-3xl hover:text-black border-5 transition-all duration-300 ease-in-out'
      ><FaHelmetSafety className='inline mr-2'/>
      Driver Dashboard</Link>

      <Link 
      to='/radio_dashboard'
      className='bg-red-600 text-white whitespace-normal break-words rounded-lg p-4 shadow-lg py-10 text-center text-3xl hover:text-black border-5 transition-all duration-300 ease-in-out'
      ><FaHeadset className='inline mr-2'/>
      Radio Dashboard</Link>
      
      <Link 
      to='/car_dashboard'
      className='bg-red-600 text-white whitespace-normal break-words rounded-lg p-4 shadow-lg py-10 text-center text-3xl hover:text-black border-5 transition-all duration-300 ease-in-out'
      ><FaCarSide className='inline mr-2'/>
      Car Dashboard</Link>

      <Link 
      to='/circuit_dashboard'
      className='bg-red-600 text-white whitespace-normal break-words rounded-lg p-4 shadow-lg py-10 text-center text-3xl hover:text-black border-5 transition-all duration-300 ease-in-out'
      ><GoLocation className='inline mr-2'/>
      Circuit Dashboard</Link>

      <Link 
      to=''
      className='bg-gray-400 text-gray-700 cursor-not-allowed text-white whitespace-normal break-words rounded-lg p-4 shadow-lg py-10 text-center text-3xl hover:text-black border-5 transition-all duration-300 ease-in-out'
      ><GiStopwatch className='inline mr-2'/>
      Laps Dashboard</Link>
    </div>
    <Footer/>
    </div>
    </div>
  )
}

export default HomePage