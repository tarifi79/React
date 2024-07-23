import React from "react";
import styles from "./LoadingScreen.module.css";

function LoadingScreen() {
  return (
    <div className={styles.loadingScreen}>
      <div className={styles.spinner}></div>
      <h2>Mohammed Darras</h2>
    </div>
  );
}

export default LoadingScreen;
