import styles from "../styles/Index.module.css";
import Header from "../components/Header";
import Link from "next/link";
import { margin } from "@mui/system";

export default function Index() {
  return (
    <>
      <Header />

      <div className={styles.part1}>

        <div className={styles.leftContainer}>

          <div className={styles.logoImg}>
            <img
              src={"/logo-THEOVILLENEUVE.jpeg"}
              alt="logo THEOVILLENEUVE"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>

        <div className={styles.rightContainer}>
        <h1
            style={{
              color: 'white',
              width: '50%'
            }}
            > DÉVELOPPEUR FULLSTACK
            </h1>
          <h3
            style={{
              color: "white",
              fontSize: '2.6vh',
              width: '50%',
              margin: 0
            }}
          >
            Frontend : next.js/react/react native
            <br/>
            Backend : express/mongoDb
          </h3>

          <div className={styles.btnContainer}>
            <Link href="/collections">
              <button className={styles.btn}>COLLECTIONS</button>
            </Link>
            <Link href="/clan">
              <button className={styles.btn}>PROJETS</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
