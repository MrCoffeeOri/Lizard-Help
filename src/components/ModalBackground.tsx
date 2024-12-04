import React from 'react'

export default function ModalBackground({ modalRef }: { modalRef: React.RefObject<HTMLDivElement | HTMLFormElement> }) {
  return (
    <div onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        modalRef.current.classList.toggle('hide')
        e.currentTarget.classList.toggle('hide')
    }} style={{
        top: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        position: 'absolute',
        zIndex: 98,
        width: '100%',
        height: '100%',
    }} className='hide' id='modal-background'></div>
  )
}