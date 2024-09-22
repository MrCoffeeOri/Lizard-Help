import React from 'react'
import styles from '../css/modules/userHeader.module.css'

export default function UserHeader(props: {
    userImage: string,
    userName: string
} & React.PropsWithChildren) {
  return (
    <header className={styles.userHeader}>
        <img src="/logoName.webp" alt="" />
        <div>
          <span>{props.userName}</span>
          <img src={props.userImage} alt="" />
        </div>
    </header>
  )
}
