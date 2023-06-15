import React from "react";
import styles from "./Target.module.css";
import img1 from "./Group.svg";
import img2 from './Group (1).svg'
import img3 from './Group (2).svg'
const Target = () => {
  return (
    <section className={styles.target}>
      <div className={styles.title}>Our  <b>target</b> group</div>
      <div className={styles.description}>
        We are geared towards (aspiring) liberal-conservative top performers
      </div>
      <ul className={styles.items}>
        <li className={styles.item}>
          <img className={styles.logo} src={img1} />
          <div className={styles.name}>Bussines</div>
          <div className={styles.comment}>
            Performers with each other and with the high performers of tomorrow.
            An invite-only app for political and professional exchange. Register
            now for the free beta version!
          </div>
        </li>
        <li className={styles.item}>
        <img className={styles.logo} src={img2} />
          <div className={styles.name}>Science</div>
          <div className={styles.comment}>
            Performers with each other and with the high performers of tomorrow.
            An invite-only app for political and professional exchange. Register
            now for the free beta version!
          </div>
        </li>
        <li className={styles.item}>
        <img className={styles.logo} src={img3} />
          <div className={styles.name}>Craft</div>
          <div className={styles.comment}>
            Performers with each other and with the high performers of tomorrow.
            An invite-only app for political and professional exchange. Register
            now for the free beta version!
          </div>
        </li>
      </ul>
    </section   >
  );
};

export default Target;
