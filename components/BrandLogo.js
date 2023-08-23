import styles from "../styles/BrandLogo.module.css";
import React from "react";

export default function BrandLogo() {
  return (
    <div className={styles.logoVilleneuve}>
            <span className={styles.theo}>THEO</span>
            <span className={styles.villeneuve}>VILLENEUVE</span>
          </div>
  );
}
