import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='grid grid-cols-2 gap-4 mt-10 p-10 text-3xl font-semibold'>

      <Link 
      to='/driver_dashboard'
      className='bg-red-600 text-white rounded-lg p-4 shadow-lg py-10 text-center hover:bg-teal-300 hover:text-black border-5 transition-all duration-300 ease-in-out'
      >
      Driver Dashboard</Link>

      <Link 
      to='/DriverDashboard'
      className='bg-red-600 text-white rounded-lg p-4 shadow-lg py-10 text-center hover:bg-teal-300 hover:text-black border-5 transition-all duration-300 ease-in-out'
      >
      Laps Dashboard</Link>
      
      <Link 
      to='/DriverDashboard'
      className='bg-red-600 text-white rounded-lg p-4 shadow-lg py-10 text-center hover:bg-teal-300 hover:text-black border-5 transition-all duration-300 ease-in-out'
      >
      Car Dashboard</Link>

      <Link 
      to='/DriverDashboard'
      className='bg-red-600 text-white rounded-lg p-4 shadow-lg py-10 text-center hover:bg-teal-300 hover:text-black border-5 transition-all duration-300 ease-in-out'
      >
      Location Dashboard</Link>

      <Link 
      to='/DriverDashboard'
      className='bg-red-600 text-white rounded-lg p-4 shadow-lg py-10 text-center hover:bg-teal-300 hover:text-black border-5 transition-all duration-300 ease-in-out'
      >
      Radio Dashboard</Link>
    </div>
  )
}

export default HomePage