// src/components/Projects.js
import React from "react";
import styles from "./Projects.module.css";

function Projects() {
  const projectData = [
    {
      title: "Project One",
      description: "A web application built with React and Node.js.",
      link: "https://github.com/yourusername/project-one",
    },
    {
      title: "Project Two",
      description: "A machine learning project using Python and TensorFlow.",
      link: "https://github.com/yourusername/project-two",
    },
    {
      title: "Project Three",
      description: "A mobile app developed with React Native.",
      link: "https://github.com/yourusername/project-three",
    },
    {
      title: "Project Four",
      description: "A data visualization project using D3.js.",
      link: "https://github.com/yourusername/project-four",
    },
  ];

  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <h1 className={styles.title}>Projects</h1>
        <div className={styles.projectGrid}>
          {projectData.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
