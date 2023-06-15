import React from "react";
import styles from "./Hero.module.css";
import backgroundImg from "./image 13.png";

function Hero() {
  return (
    <section className={styles.hero}>
      <img src={backgroundImg} className={styles.img} alt="" />
      <div className={styles.infos}>
        <div className={styles.title}>
          We network liberal <b>conservative</b> top
        </div>
        <div className={styles.description}>
          Performers with each other and with the high performers of tomorrow.
          An invite-only app for political and professional exchange. Register
          now for the free beta version!
        </div>
        <button className={styles.button}>Apply</button>
      </div>
    </section>
  );
}

export default Hero;
