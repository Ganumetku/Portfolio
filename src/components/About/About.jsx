import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/about1.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <i className="fas fa-laptop-code"></i> {/* Frontend icon */}
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and dynamic UIs with <strong> React.js, Material UI, and Tailwind CSS</strong>.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <i className="fas fa-plug"></i> {/* Middleware icon */}
            <div className={styles.aboutItemText}>
              <h3>Middleware</h3>
              <p>
                I have experience in designing and integrating efficient <strong>RESTful APIs</strong>  
                and handling middleware operations using <strong>Express.js</strong>.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <i className="fas fa-server"></i> {/* Backend icon */}
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I build high-performance and scalable backend solutions using  
                <strong> Node.js, Express.js, MongoDB, and SQL</strong>.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
