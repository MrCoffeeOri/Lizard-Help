import React, { useEffect, useRef } from 'react';
import styles from '../css/modules/alert.module.css'

export default function Alert({ message, ok, time = 6500 }: { message: string | null, ok: boolean, time?: number }) {
  const alertRef = useRef<HTMLDivElement>(null)

  const handleCloseAlert = () => {
    alertRef.current.style.display = "none";
  };

  useEffect(() => {
    if (!message || message.trim() == "") return
    alertRef.current.style.display = "block";
    const timer = setTimeout(handleCloseAlert, time);
    return () => clearTimeout(timer); 
  }, [message]);

  return (
    message ?
    <div ref={alertRef} className={styles.alert}>
      <div className={ok ? styles.ok : ''} onClick={handleCloseAlert}>
        <img src="/alert.png" alt="" />
        <p>{message.trim()}</p>
        <div></div>
      </div>
    </div>
    :
    <></>
  );
}