import React from 'react'
import { FaGithub } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='w-full bg-black text-white border-t-2 border-red-600'>

<div className='max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4'>
    
    <div className='flex flex-col items-center sm:items-start'>
    <h2 className="text-xs sm:text-sm font-extrabold tracking-widest uppercase select-none">
      F1 Dashboard
    </h2>
    <p className='text-[10px] text-stone-500 font-mono'>
      Data provided by <span className='text-white'>OpenF1 API</span>
    </p>
    </div>

    <div className='text-[11px] uppercase tracking-widest font-bold'>
    Created by <span className='text-red-600'>JohannesL2</span>
    </div>

    <a 
      href="https://github.com/JohannesL2/F1-Dashboard"
      target="_blank"
      rel="noopener noreferrer"
      className='transition-all duration-300 hover:scale-110 text-white hover:text-red-600'
    >
      <FaGithub size={28} />
    </a>
</div>

<div className='h-1 w-full bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-30'></div>
    </footer>
  )
}

export default Footer