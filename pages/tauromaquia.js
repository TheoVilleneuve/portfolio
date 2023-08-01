import styles from "../styles/Tauromaquia.module.css";
import Header from "../components/Header";
import React from "react";
import { positions } from "@mui/system";

export default function TauromaquiaPage() {
const title = 'TAUROMAQUIA'

  //Variable pour stocker les images d'inspiration
  const inspiImgs = [];

  for (let i = 0; i < 12; i++) {
    inspiImgs.push(
      `/collection-tauromaquia/tauromaquia-inspirations/${i}.jpeg`
    );
  }

  const inspiToDisplay = inspiImgs.map((data, i) => {
    return (
      <div className={styles.imgFrameInspi}>
        <img
          src={data}
          alt={i}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            objectFit: "cover",
            width: "100%",
            height: "100%",
            positions: "center",
          }}
        />
      </div>
    );
  });

  //Variable pour stocker le shooting de Ben Fohrer
  const benImgs = [];

  for (let i = 0; i < 6; i++) {
    benImgs.push(`/collection-tauromaquia/tauromaquia-by-ben/${i}.jpeg`);
  }

  const benImgsToDisplay = benImgs.map((data, i) => {
    return (
      <div className={styles.imgFrameBen}>
        <img
          src={data}
          alt="title image"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    );
  });

  return (
    <div className={styles.container}>
      <Header title={title}/>

      <div className={styles.modele}>
        <img
          className={styles.titleImg}
          src={"/collection-tauromaquia/linogravure.png"}
          alt="title image"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />

        <h2 className={styles.titleContainer}>
          <span className={styles.titleTauro}>TAURO</span>
          <span className={styles.titleMaquia}>MAQUIA</span>
        </h2>
      </div>

      <div className={styles.backgroundVideo}>
        <video
          autoPlay
          loop
          muted
          controls={false}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        >
          <source
            src="/collection-tauromaquia/video-tauromaquia.mp4"
            type="video/mp4"
          />
          Votre navigateur ne prend pas en charge la lecture de vidéos.
        </video>
      </div>

      <div className={styles.imgContainer}>{benImgsToDisplay}</div>

      <div className={styles.nimeno}>
        <img
          src={"/collection-tauromaquia/1.jpeg"}
          alt="title image"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      <h2 className={styles.category}>INSPIRATIONS</h2>

      <div className={styles.imgContainer}>{inspiToDisplay}</div>
    </div>
  );
}
