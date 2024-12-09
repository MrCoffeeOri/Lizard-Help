import React, { useContext } from 'react'
import styles from '../css/modules/userHeader.module.css'
import { userContext } from './UserContext'

export default function UserHeader({ children }: React.PropsWithChildren) {
  const { user } = useContext(userContext)
  return (
    <header className={styles.userHeader}>
        <img src="/logoName.webp" alt="" />
        <div>
          {children}
          <div>
            <span>{user.name}</span>
            <img src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg" />
          </div>
        </div>
    </header>
  )
}
