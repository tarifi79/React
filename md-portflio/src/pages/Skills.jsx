// src/components/Skills.js
import React from "react";
import styles from "./Skills.module.css";

function Skills() {
  const skillsData = [
    {
      title: "JavaScript",
      description:
        "Proficient in JavaScript and modern frameworks like React and Node.js.",
    },
    {
      title: "Python",
      description:
        "Experienced with Python and libraries such as Django, Flask, Pandas, and NumPy.",
    },
    {
      title: "Data Analysis",
      description:
        "Skilled in data analysis using tools like Pandas, NumPy, and Matplotlib.",
    },
    {
      title: "Machine Learning",
      description:
        "Knowledgeable in machine learning techniques using TensorFlow and Scikit-learn.",
    },
    {
      title: "HTML & CSS",
      description:
        "Strong understanding of HTML5 and CSS3, including responsive design principles.",
    },
    {
      title: "Databases",
      description:
        "Experience with SQL and NoSQL databases like MySQL, PostgreSQL, and MongoDB.",
    },
  ];

  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        <h1 className={styles.title}>Skills</h1>
        <div className={styles.skillsGrid}>
          {skillsData.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <h2>{skill.title}</h2>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
