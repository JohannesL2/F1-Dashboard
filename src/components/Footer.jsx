import React from 'react'
import { FaGithub } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='bg-black text-white p-4 shadow-md flex gap-4 items-center'>
    <h1 className="text-xl font-extrabold tracking-widest text-white uppercase">
      Created by Johannesl2 using OpenF1 API
    </h1>
    <a href="https://github.com/JohannesL2/F1-Dashboard" target="_blank">
    <FaGithub size={32} className='hover:text-stone-300'/>
    </a>
    </div>
  )
}

export default Footer