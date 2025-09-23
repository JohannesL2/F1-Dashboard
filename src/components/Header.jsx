import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Header = () => {
  return (
      <div className='py-8'>
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
  )
}

export default Header