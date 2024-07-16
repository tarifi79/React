// src/components/About.js
import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <>
      <section className={styles.about}>
        <div className={styles.container}>
          <div className={styles.column}>
            <h1 className={styles.title}>About Me</h1>
            <p className={styles.description}>
              Hi, I'm Mohammed Darras. I am a passionate Full Stack Developer
              and Data Scientist with a love for creating efficient and
              innovative solutions. With a strong background in web development
              and data analysis, I strive to build impactful projects that solve
              real-world problems.
            </p>
            <p className={styles.description}>
              I hold an advanced diploma in Software Engineering Technology from
              Centennial College. I have worked on various projects that
              encompass both front-end and back-end development. My expertise
              lies in using JavaScript frameworks like React for building
              interactive user interfaces, and Node.js for developing robust
              server-side applications. Additionally, I have substantial
              experience with Python and its data science libraries such as
              Pandas, NumPy, and Matplotlib, which allow me to perform complex
              data analyses and visualize insights effectively.
            </p>
            <p className={styles.description}>
              I am always eager to learn new technologies and improve my skills.
              I believe in continuous learning and staying updated with the
              latest trends in the tech industry. Currently, I am delving deeper
              into machine learning and artificial intelligence, exploring
              frameworks like TensorFlow and Scikit-learn to create intelligent
              systems that can solve real-world problems.
            </p>
            <p className={styles.description}>
              In my free time, I enjoy coding, reading tech blogs, and
              traveling. I find that these activities not only help me relax but
              also inspire me with new ideas and perspectives. I am also an
              active participant in local tech meetups and hackathons, where I
              enjoy collaborating with fellow tech enthusiasts and sharing
              knowledge.
            </p>
            <div className={styles.personal}>
              <h2>Personal Details</h2>
              <p>
                <strong>Location:</strong> Etobicoke, Toronto
              </p>
              <p>
                <strong>Hobbies:</strong> Coding, Reading, Traveling
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
