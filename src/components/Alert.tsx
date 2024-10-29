import React, { useEffect, useRef } from 'react';
import styles from '../css/modules/alert.module.css'

export default function Alert({ message, time = 6500 }: { message: string | null, time?: number }) {
  const alertRef = useRef<HTMLDivElement>(null)

  const handleCloseAlert = () => {
    alertRef.current.style.display = "none";
  };

  useEffect(() => {
    if (!message || message.trim() == "") return
    const timer = setTimeout(handleCloseAlert, time);
    return () => clearTimeout(timer); 
  }, [message]);

  return (
    message ?
    <div ref={alertRef} className={styles.alert}>
      <div onClick={handleCloseAlert}>
        <p>{message.trim()}</p>
        <div></div>
      </div>
    </div>
    :
    <></>
  );
}