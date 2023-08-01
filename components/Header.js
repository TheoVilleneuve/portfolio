import styles from '../styles/Header.module.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

export default function Header(props) {
    return (
        <div className={styles.header}>
            
            <Link href="/">               
                    <div className={styles.logoVilleneuve}>
                        <span className={styles.theo}>THEO</span>
                        <span className={styles.villeneuve}>VILLENEUVE</span>
                    </div>
            </Link>

            <div><h1>{props.pageTitle}</h1></div>


        </div>
    )
}