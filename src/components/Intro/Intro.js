import React, { useEffect, useState } from 'react'
import styles from './Intro.module.css'

const Intro = () => {

    // TODO : COOKIE SYSTEM SOON - MAYBE...
    // const [vis, setVis] = useState(0)
    // useEffect(()=>{
    //     if(localStorage.getItem("visit") == null)
    //         localStorage.setItem("visit", "0");
    //     setVis = parseInt(localStorage.getItem("visit"));
    //     setVis++;
    //     localStorage.setItem("visit", x);
    //     if (setVis > 5) {
    //         localStorage.setItem("bricks", "11");
    //     }
    //     }, [])
    return (
        <div className={styles.container}>
            <div className={styles.textWrapper}>
                <div className={`${styles.text3} ${styles.text}`}>OWASP RGIPT</div>
                <div className={`${styles.text4} ${styles.text}`}>OWASP RGIPT</div>
                <div className={`${styles.text5} ${styles.text}`}>OWASP RGIPT</div>
                <div className={`${styles.text6} ${styles.text}`}>OWASP RGIPT</div>
                <div className={`${styles.text7} ${styles.text}`}>OWASP RGIPT</div>
                <div className={`${styles.text8} ${styles.text}`}>OWASP RGIPT</div>
                <div className={`${styles.text9} ${styles.text}`}>OWASP RGIPT</div>
            </div>
        </div>
    )
}

export default Intro