import React, { useEffect, useRef } from 'react';
import styles from '../css/modules/alert.module.css'

export default function Alert({ message, time = 6500 }: { message: string | null, time?: number }) {
  const alertRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!message) return
    const timer = setTimeout(() => {
      alertRef.current.remove(); 
    }, time);
    return () => clearTimeout(timer); 
  }, []);

  const handleCloseAlert = () => {
    alertRef.current.remove();
  };

  return (
    message ?
    <div ref={alertRef} className={styles.alert}>
      <div onClick={handleCloseAlert}>
        <p>{message}</p>
        <div></div>
      </div>
    </div>
    :
    <></>
  );
}