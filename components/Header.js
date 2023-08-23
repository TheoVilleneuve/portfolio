import styles from "../styles/Header.module.css";
import React from "react";
import Link from "next/link";
import BrandLogo from "./BrandLogo";
import ProjectsMenu from "./ProjectsMenu";
import CollectionsMenu from "./CollectionsMenu";

export default function Header(props) {
  return (
    <div className={styles.header}>
      <Link href="/">
        <div className={styles.logoVilleneuve}>
          <BrandLogo/>
        </div>
      </Link>

      <div className={styles.title}>
        <h3
          style={{
            margin: 0,
          }}
        >
          {props.title}
        </h3>
      </div>

      <div className={styles.menuContainer}>
        <ProjectsMenu />
        <CollectionsMenu />
        
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            width: "10vw",
            color: "white",
          }}
        >
          CONTACT
        </p>
      </div>
    </div>
  );
}
