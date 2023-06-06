import styles from '../styles/WhenIWasDesigner.module.css';
import Link from 'next/link';

export default function WhenIWasDesignerPage() {

    return (
        <div>
            <div className={styles.webPortfolio}> 

                <div className={styles.logoVilleneuve}>
                    <span className={styles.theo}>THEO</span>
                    <span className={styles.villeneuve}>VILLENEUVE</span>
                </div>

                <div className={styles.btnContainer}>
                    <Link href="/tauromaquia"><button className={styles.btn}>TAUROMAQUIA</button></Link>
                    <Link href="/clan"><button className={styles.btn}>CLAN ÉMERGENT</button></Link>
                    <Link href="/gardians"><button className={styles.btn}>GARDIANS</button></Link>
                </div>

            </div>      
        </div>
    )
}
