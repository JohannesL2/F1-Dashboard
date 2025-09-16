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
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/homepage-bg.jpg')" }}
    >
      {/* Overlay mörk transparent */}
      <div className="absolute bg-black bg-opacity-70"></div>

    <div className='relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 sm:p-10 text-xl sm:text-3xl font-semibold flex-grow min-h-[900px] items-center'>

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
      to=''
      className='bg-gray-400 text-gray-700 cursor-not-allowed text-white whitespace-normal break-words rounded-lg p-4 shadow-lg py-10 text-center text-3xl hover:text-black border-5 transition-all duration-300 ease-in-out'
      ><GoLocation className='inline mr-2'/>
      Location Dashboard</Link>

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