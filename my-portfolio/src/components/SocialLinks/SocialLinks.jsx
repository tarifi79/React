import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "./SocialLinks.module.css";

function SocialLinks() {
  return (
    <div className={styles.socialLinks}>
      <a
        href="https://github.com/your-github-username"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink}
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a
        href="https://www.linkedin.com/in/your-linkedin-profile"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink}
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </div>
  );
}

export default SocialLinks;
