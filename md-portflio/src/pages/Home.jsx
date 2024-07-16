// src/components/Home.js
import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>Welcome to My Portfolio</h1>
          <p>
            Hi, I'm Mohammed Darras, a passionate Full Stack Developer and Data
            Scientist.
          </p>
          <Link to="projects" className={styles.ctaButton}>
            View My Work
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
