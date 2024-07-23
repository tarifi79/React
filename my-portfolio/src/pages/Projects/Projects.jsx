import React from "react";
import ParticlesBg from "particles-bg";
import { motion } from "framer-motion";

import styles from "./Projects.module.css";

const projectsData = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with React frontend and Node.js backend.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: "Weather App",
    description: "A responsive weather application using OpenWeatherMap API.",
    technologies: ["JavaScript", "HTML5", "CSS3", "API Integration"],
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    title: "Task Management System",
    description: "A collaborative task management tool with real-time updates.",
    technologies: ["React", "Firebase", "Material-UI"],
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills.",
    technologies: ["React", "CSS Modules", "Responsive Design"],
    imageUrl: "https://via.placeholder.com/300x200",
  },
];

function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <img
        src={project.imageUrl}
        alt={project.title}
        className={styles.cardImage}
      />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDescription}>{project.description}</p>
        <div className={styles.cardTech}>
          {project.technologies.map((tech, index) => (
            <span key={index} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={styles.projects}
    >
      <ParticlesBg type="cobweb" bg={true} />

      <motion.div
        initial={{ x: 4, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="container"
      >
        <motion.h1
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className={styles.title}
        >
          My Projects
        </motion.h1>
        <div className={styles.cardGrid}>
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Projects;
