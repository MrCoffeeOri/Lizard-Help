import React from 'react'
import { Link } from 'react-router-dom'
import style from '../css/modules/goBack.module.css'

export default function GoBack({ to }: { to: string }) {
  return (
    <Link className={style.arrow} to={to}>
        <svg width="70" height="15" viewBox="0 0 66 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.289109 6.79289C-0.101415 7.18342 -0.101415 7.81658 0.289109 8.20711L6.65307 14.5711C7.04359 14.9616 7.67676 14.9616 8.06728 14.5711C8.45781 14.1805 8.45781 13.5474 8.06728 13.1569L2.41043 7.5L8.06728 1.84315C8.45781 1.45262 8.45781 0.819456 8.06728 0.428932C7.67676 0.0384079 7.04359 0.0384079 6.65307 0.428932L0.289109 6.79289ZM66.0039 6.5L0.996216 6.5V8.5L66.0039 8.5V6.5Z" fill="#c12626"/></svg>
    </Link>
  )
}
