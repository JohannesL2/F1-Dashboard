import React from 'react'
import { FaGithub } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='w-full bottom-0 bg-black text-white p-4 shadow-md flex items-center justify-center gap-6 hover:bg-neutral-900 transition-colors'>
    <h1 className="text-xs sm:text-sm font-extrabold tracking-widest uppercase select-none">
      Created by Johannesl2 using OpenF1 API
    </h1>
    <a href="https://github.com/JohannesL2/F1-Dashboard" target="_blank" rel="noopener noreferrer">
    <FaGithub size={32} className='hover:text-stone-300'/>
    </a>
    </div>
  )
}

export default Footer