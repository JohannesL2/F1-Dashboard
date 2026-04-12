import React, { useEffect, useRef } from 'react'

export default function RaceInfoModal({ isOpen, onClose }) {
    const modalRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            modalRef.current?.showModal();
        } else {
            modalRef.current?.close();
        }
    }, [isOpen]);

  return (
<dialog
    ref={modalRef}
    className="modal modal-bottom sm:modal-middle backdrop-blur-sm"
    onClose={onClose}
    >
  <div className="modal-box bg-[#15151e] shadow-2xl overflow-hidden relative max-w-2xl">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>

  <form method='dialog' className='modal-backdrop'>
    <button onClick={onClose}>close</button>
  </form>
</dialog>
  )
}