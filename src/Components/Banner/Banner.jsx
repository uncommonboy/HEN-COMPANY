import React from "react";
import styles from './Banner.module.css'
import img from "./background.png";
const Banner = () => {
  return (
    <section className={styles.Banner}>
      <img src={img} alt="" className={styles.img} />
      <div className={styles.title}>
        We do not leave <b>conservatism</b> to the far right and liberalism not
        the big landowners.
      </div>
    </section>
  );
};

export default Banner;
