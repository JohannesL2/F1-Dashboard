import React, { useEffect, useRef } from 'react'

export default function RaceInfoModal({ isOpen, onClose, session }) {
    const modalRef = useRef(null);

    const userLocale = navigator.language;

const localTime = new Date(session.date_start).toLocaleTimeString(userLocale, {
  hour: '2-digit',
  minute: '2-digit',
});

const localDate = new Date(session.date_start).toLocaleDateString(userLocale, {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
});

    useEffect(() => {
        if (isOpen) {
            modalRef.current?.showModal();
        } else {
            modalRef.current?.close();
        }
    }, [isOpen]);

    if (!session) return null;

  return (
<dialog
    ref={modalRef}
    className="modal modal-bottom sm:modal-middle backdrop-blur-sm"
    onClose={onClose}
    >
  <div className="modal-box bg-[#15151e] shadow-2xl overflow-hidden relative max-w-2xl">

    <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-8 h-8 flex items-center justify-center rounded-full bg-black/20 hover:bg-white/10 text-white/50 hover:text-white transition-all cursor-pointer"
        >
          ✕
    </button>

    <h3 className="font-bold text-lg py-4">Next Event</h3>

    <div className="bg-red-600 text-white px-3 py-1 rounded font-bold text-sm italic">
            {session.year}
            <p className="text-lg">{session.meeting_name}</p>
    </div>

    <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-white/5 p-4 rounded-lg border border-white/5">
              <p className="text-gray-400 text-xs uppercase font-bold mb-1">Circuit</p>
              <p className="text-md font-semibold">{session.circuit_short_name}</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-white/5">
              <p className="text-gray-400 text-xs uppercase font-bold mb-1">Session</p>
              <p className="text-md font-semibold">{session.session_name}</p>
            </div>
          </div>

          <div className="bg-white/5 p-4 rounded-lg border border-white/5 mt-4">
            <p className="text-gray-400 text-xs uppercase font-bold mb-1">Local Start Time</p>
            <p className="text-md">
              <div className="flex items-baseline gap-2">
      <span className="text-md font-semibold text-white capitalize">{localTime}</span>
      <span className="text-md font-semibold text-white capitalize">{localDate}</span>
    </div>
            </p>
          </div>
  </div>

  <form method='dialog' className='modal-backdrop'>
    <button onClick={onClose}>close</button>
  </form>
</dialog>
  )
}