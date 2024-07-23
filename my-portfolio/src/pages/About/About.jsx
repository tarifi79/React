import React from "react";
import Tilt from "react-parallax-tilt";
import ParticlesBg from "particles-bg";
import styles from "./About.module.css";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={styles.about}
    >
      <ParticlesBg type="cobweb" bg={true} />
      {/* <Tilt
        className={styles.tilt}
        tiltMaxAngleX={1}
        tiltMaxAngleY={1}
        perspective={1000}
        scale={1}
        transitionSpeed={100}
        gyroscope={true}
        glareEnable={true}
        glareMaxOpacity={0.9}
        glareColor="#ffffff"
        glarePosition="bottom"
      > */}
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className={styles.title}
      >
        About Me
      </motion.h1>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 2.5 }}
        className={styles.content}
      >
        <p className={styles.description}>
          Hi, I'm Mohammed Darras. I am a passionate Full Stack Developer and
          Data Scientist with a love for creating efficient and innovative
          solutions. With a strong background in web development and data
          analysis, I strive to build impactful projects that solve real-world
          problems.
        </p>
        <p className={styles.description}>
          I hold an advanced diploma in Software Engineering Technology from
          Centennial College. I have worked on various projects that encompass
          both front-end and back-end development. My expertise lies in using
          JavaScript frameworks like React for building interactive user
          interfaces, and Node.js for developing robust server-side
          applications. Additionally, I have substantial experience with Python
          and its data science libraries such as Pandas, NumPy, and Matplotlib,
          which allow me to perform complex data analyses and visualize insights
          effectively.
        </p>
        <p className={styles.description}>
          I am always eager to learn new technologies and improve my skills. I
          believe in continuous learning and staying updated with the latest
          trends in the tech industry. Currently, I am delving deeper into
          machine learning and artificial intelligence, exploring frameworks
          like TensorFlow and Scikit-learn to create intelligent systems that
          can solve real-world problems.
        </p>
        <p className={styles.description}>
          In my free time, I enjoy coding, reading tech blogs, and traveling. I
          find that these activities not only help me relax but also inspire me
          with new ideas and perspectives. I am also an active participant in
          local tech meetups and hackathons, where I enjoy collaborating with
          fellow tech enthusiasts and sharing knowledge.
        </p>
      </motion.div>
      {/* </Tilt> */}
    </motion.div>
  );
}

export default About;
