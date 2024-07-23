import React from "react";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import ParticlesBg from "particles-bg";
import styles from "./Home.module.css";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={styles.home}
    >
      <ParticlesBg type="cobweb" bg={true} />
      <Tilt
        className={styles.tilt}
        tiltMaxAngleX={3}
        tiltMaxAngleY={3}
        perspective={1000}
        scale={1.02}
        transitionSpeed={200}
        gyroscope={true}
        glareEnable={true}
        glareMaxOpacity={0.5}
        glareColor="#ffffff"
        glarePosition="bottom"
      >
        <motion.h1
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className={styles.name}
        >
          Hi, My Name is MOHAMMED DARRAS
        </motion.h1>{" "}
        <p className={styles.title}>
          <span className={styles.roles}>
            <motion.span
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className={`${styles.role} ${styles.role1}`}
            >
              Web Developer
            </motion.span>
            <motion.span
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 4 }}
              className={`${styles.role} ${styles.role2}`}
            >
              Problem Solver
            </motion.span>
            <motion.span
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 6 }}
              className={`${styles.role} ${styles.role3}`}
            >
              Tech Enthusiast
            </motion.span>
          </span>
        </p>
        <motion.h4
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 8 }}
          className={styles.subtitle}
        >
          Passionate about creating amazing web experiences.
        </motion.h4>
        <Link to="/projects" className={styles.cta}>
          View My Work
        </Link>
      </Tilt>
    </motion.div>
  );
}

export default Home;
