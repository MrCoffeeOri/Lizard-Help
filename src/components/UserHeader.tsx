import React from 'react'
import styles from '../css/modules/userHeader.module.css'

export default function UserHeader({ children }: React.PropsWithChildren) {
  return (
    <header className={styles.userHeader}>
        <img src="/logoName.webp" alt="" />
        <div>
          {children}
          <div>
            <span>Josias Tutano</span>
            <img src="https://yt3.ggpht.com/lxl6Fy8c3z1t45KBvGhdShOic82nbvM7nSR4H-g3GernzddR1ztA6W7sAVx_QQ-XxSEOVp_V=s48-c-k-c0x00ffffff-no-rj" />
          </div>
        </div>
    </header>
  )
}
