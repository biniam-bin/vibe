import React from 'react'

const Modal = ({children}) => {
  return (
    <div className="bg-red-0 fixed top-0 left-0 h-screen w-full z-40 flex justify-center py-5" style={{backgroundColor: "rgba(255, 255, 255, 0.3)"}}>{children}</div>
  )
}

export default Modal