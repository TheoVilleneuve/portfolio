import styles from '../styles/Header.module.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

export default function Header() {
    return (
        <div className={styles.header}>

            <div className={styles.homeBtn}>
                
                <Link href="/whenIWasDesigner">
                    <button className={styles.btn}>
                        <FontAwesomeIcon icon={faHouse} className={styles.homeIcon}/>
                    </button>
                </Link>

            </div>
            
            <Link href="/">
                <button className={styles.btn}>
                    <div className={styles.logoVilleneuve}>
                        <span className={styles.theo}>THEO</span>
                        <span className={styles.villeneuve}>VILLENEUVE</span>
                    </div>
                </button>
            </Link>
        </div>
    )
}