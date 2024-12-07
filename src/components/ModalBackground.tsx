import React from 'react'

export default function ModalBackground({ modalRefs }: { modalRefs: React.RefObject<HTMLDivElement | HTMLFormElement>[] }) {
  return (
    <div onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        modalRefs.find(modal => !modal.current.classList.contains("hide")).current.classList.add("hide")
        e.currentTarget.classList.add('hide')
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