import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react'
import { GiCheckeredFlag } from "react-icons/gi";

export const ImageModal = forwardRef((props, ref) => {
  const [driver, setDriver] = useState(null)
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    show: (driverData) => {
      setDriver(driverData)
      setIsOpen(true)
    },
    close: () => setIsOpen(false)
  }));

    const handleBackgroundClick = (e) => {
    if (e.target.classList.contains('modal')) {
      setIsOpen(false)
    }
  }


  return (
  <>
  {isOpen && (
<dialog className="modal modal-open">
<div className="modal modal-open" onClick={handleBackgroundClick}>
  <div className="modal-box relative bg-gradient-to-r from-red-700 via-black to-gray-800 border-4 border-red-600 shadow-lg shadow-red-700 p-6 rounded-xl">
    
    <h3 className="flex flex-col items-center text-center mb-6">
    
    <span
    className="flex items-center gap-2 px-5 py-2 rounded-md shadow-lg border-2 border-red-600 text-xl font-bold italic" style={{ backgroundColor: `#${driver.team_colour}` }}
    >
      <GiCheckeredFlag className='text-white text-2xl'/>
      <span className="text-white">#{driver.driver_number}</span>
    </span>

    <span className="block text-5xl font-extrabold italic tracking-wider text-white drop-shadow-[0_0_15px_rgba(255,0,0,0.9)]">{driver.full_name.toUpperCase()}</span>
    </h3>

    <div className='flex justify-center mb-6'>
      <img
        src={driver.headshot_url}
        alt='Driver'
        className='w-64 h-64 object-contain rounded-full border-4 border-red-600 shadow-[0_0_25px_rgba(255,0,0,0.7)] bg-black p-2'
      />
    </div>
    <div className='modal-action flex justify-center'>
      <button className='hidden md:inline-block btn px-6 py-2 bg-gradient-to-r from-red-700 via-red-600 to-black text-white font-bold uppercase rounded-lg shadow-lg hover:scale-105 hover:shadow-red-500/50 transition-all duration-300' onClick={() => setIsOpen(false)}>
        Close
      </button>
    </div>
  </div>
</div>
</dialog>
)}
</>
  )
});
