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

  if (!isOpen || !driver) return null;


  return (
<dialog className="modal modal-open backdrop-blur-md" onClick={handleBackgroundClick}>
  <div className="modal-box p-0 bg-[#15151e] border-b-8 shadow-2xl overflow-hidden relative max-w-2xl"
       style={{ borderColor: `#${driver.team_colour}` }}>

      <div className='absolute -bottom-10 right-5 text-[14rem] text-white/[0.03] italic select-none pointer-events-none z-0'>
      <GiCheckeredFlag className='text-white text-xl'/>
      <span className="font-black">#{driver.driver_number}</span>
      </div>



    <div className='p-8 relative z-10'>
      <div className='flex justify-between items-start'>
        <div>
          <div className='flex items-center gap-2 mb-1'>
            <div className='w-1 h-6' style={{ backgroundColor: `#${driver.team_colour}` }} />
            <span className='text-sm font-bold tracking-[0.2em] text-gray-400 uppercase'>
              {driver.team_name || "Formula 1 Professional"}
            </span>
          </div>
          <div className='flex items-end'>
          <h3 className='text-5xl font-black italic uppercase text-white tracking-tighter flex flex-wrap gap-2'>
            <span className='text-white'>{driver.full_name.split(' ')[0]}</span>
            <span className='text-white/70'>{driver.full_name.split(' ').slice(1).join(' ')}</span>
          </h3>
          </div>
          </div>
          <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors text-2xl font-light cursor-pointer"
            >✕</button>
          </div>
      <img
        src={driver.headshot_url}
        alt='Driver'
        className='w-32 h-32 object-contain rounded-full border-2 border-red-600 shadow-[0_0_25px_rgba(255,0,0,0.7)] bg-black mt-4'
      />
    </div>
  </div>
</dialog>
  )
});