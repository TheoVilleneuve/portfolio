import styles from "../styles/Index.module.css";
import Header from "../components/Header";
import Link from "next/link";

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

          <div className={styles.textContainer}>
            <h1> DÉVELOPPEUR FULLSTACK</h1>
            <h2>
              FRONTEND : <br /> Javascript (React/React native), HTML, CSS
            </h2>
            <h2>
              BACKEND : <br /> Express, MongoDB
            </h2>
          </div>
          <Link href="/clan">
            <button className={styles.btn2}>ME CONTACTER</button>
          </Link>
        </div>

        <div className={styles.rightContainer}>

          <h1
          style={{
            color: "white",
          }}> EN VOIR + :</h1>
          
          <div className={styles.btnContainer}>
            <Link href="/whenIWasDesigner">
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
