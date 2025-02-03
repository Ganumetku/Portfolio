import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ganesh</h1>
        <p className={styles.description}>
           <code> 
           I'm a full-stack developer  specializing in MERN Stack and java.
          I love turning ideas into reality through clean, efficient, and user-friendly code.
          </code></p>
        <a href="mailto:ganeshmetku7832@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/actor.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
