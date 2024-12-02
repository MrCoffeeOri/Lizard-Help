import React from 'react'

export default function ModalBackground({ modalRef }: { modalRef: React.RefObject<HTMLDivElement> }) {
  return (
    <div onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        modalRef.current.classList.toggle('hide')
        e.currentTarget.classList.toggle('hide')
    }} className='hide' id='modal-background'></div>
  )
}