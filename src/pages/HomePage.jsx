import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { FaHelmetSafety, FaCarSide, FaHeadset } from 'react-icons/fa6'
import { GiStopwatch } from 'react-icons/gi'
import { GoLocation } from 'react-icons/go'
import { Typewriter } from 'react-simple-typewriter'

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
  Real-time F1 analytics –{' '} 
  <span className='text-red-500 font-bold'>
  <Typewriter words={['drivers', 'cars', 'tracks', 'Laps', 'radio', 'more...']}
      loop={0}
      cursor 
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}/> 
  </span>
</p>
</div>

    <div className='relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 p-4 sm:p-10 text-xl sm:text-3xl font-semibold flex-grow min-h-[900px] md:min-h-[300px] items-center'>

      <Link 
      to='/driver_dashboard'
      className='group bg-red-600 text-white rounded-lg p-6 shadow-lg text-center text-2xl sm:text-3xl font-semibold hover:bg-red-500 hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center gap-2'
      ><FaHelmetSafety className='inline mr-2 group-hover:rotate-12 group-hover:scale-125 duration-300'/>
      Driver Dashboard</Link>

      <Link 
      to='/radio_dashboard'
      className='group bg-red-600 text-white rounded-lg p-6 shadow-lg text-center text-2xl sm:text-3xl font-semibold hover:bg-red-500 hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center gap-2'
      ><FaHeadset className='inline mr-2 group-hover:rotate-12 group-hover:scale-125 duration-300'/>
      Radio Dashboard</Link>
      
      <Link 
      to='/car_dashboard'
      className='group bg-red-600 text-white rounded-lg p-6 shadow-lg text-center text-2xl sm:text-3xl font-semibold hover:bg-red-500 hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center gap-2'
      ><FaCarSide className='inline mr-2 group-hover:rotate-12 group-hover:scale-125 duration-300'/>
      Car Dashboard</Link>

      <Link 
      to='/circuit_dashboard'
      className='group bg-red-600 text-white rounded-lg p-6 shadow-lg text-center text-2xl sm:text-3xl font-semibold hover:bg-red-500 hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center gap-2'
      ><GoLocation className='inline mr-2 group-hover:rotate-12 group-hover:scale-125 duration-300'/>
      Circuit Dashboard</Link>

      <Link 
      to=''
      className='bg-gray-600 text-white rounded-lg p-6 shadow-lg text-center text-2xl sm:text-3xl font-semibold transition-transform duration-300 flex flex-col items-center justify-center gap-2 cursor-not-allowed'
      ><GiStopwatch className='inline mr-2'/>
      Laps Dashboard</Link>
    </div>
    <Footer/>
    </div>
    </div>
  )
}

export default HomePage