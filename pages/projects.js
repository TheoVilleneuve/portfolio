import styles from "../styles/Projects.module.css";
import Link from "next/link";
import BrandLogo from "../components/BrandLogo";

export default function Projects() {
  return (
    <div className={styles.background}>
      <div className={styles.titleContainer}>
        <Link href="/">
          <div className={styles.logoVilleneuve}>
            <BrandLogo/>
          </div>
        </Link>

        <h3 style={{color: 'white', margin: 0, padding: 0, marginTop: '3%'}}>- PROJECTS -</h3>
      </div>

      <div className={styles.btnContainer}>
        <Link href="/tauromaquia">
          <button className={styles.btn}>TAUROMAQUIA</button>
        </Link>
        <Link href="/clan">
          <button className={styles.btn}>CLAN ÉMERGENT</button>
        </Link>
        <Link href="/gardians">
          <button className={styles.btn}>GARDIANS</button>
        </Link>
      </div>
    </div>
  );
}
