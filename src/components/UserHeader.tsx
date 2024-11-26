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
            <img src="https://yt3.ggpht.com/wvlCpRqb9Hb9Yuv62LDo-AZxr-MpAHTvpeToBGpNOPSMNGQIyplQh2EZv75SLHOZIkpijT00=s48-c-k-c0x00ffffff-no-rj" />
          </div>
        </div>
    </header>
  )
}
