import styles from "../styles/Projects.module.css";
import Link from "next/link";

export default function Projects() {
  return (
    <div>
      <div className={styles.webPortfolio}>
        <Link href="/">
          <div className={styles.logoVilleneuve}>
            <span className={styles.theo}>THEO</span>
            <span className={styles.villeneuve}>VILLENEUVE</span>
          </div>
        </Link>
        <h3 className={styles.title}>- PROJECTS -</h3>
      </div>

      <div className={styles.project}>
        <p>Test</p>
      </div>
    </div>
  );
}
