import React from "react";
import "boxicons";
import styles from "./Footer.module.css";
import img from "./Group 3.svg";
const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.left}>
        <img className={styles.logo} src={img} />
        <div className={styles.text}>Libertate in perpetuum.</div>
        <div className={styles.small}>All rights reserved.2022</div>
      </div>
      <div className={styles.center}>
        <ul className={styles.col}>
          <li className={styles.text}>For Investors</li>
          <li className={styles.text}>HEH investors</li>
          <li className={styles.text}>HEH foundation</li>
        </ul>
        <ul className={styles.col}>
          <li className={styles.text}>Impressum</li>
          <li className={styles.text}>AGB</li>
          <li className={styles.text}>Privacy</li>
        </ul>
      </div>
      <div className={styles.right}>
        <div className={styles.text}>Follow our socials:</div>
        <ul className={styles.logos}>
          <li className={styles.logo2}>
            <box-icon type="logo" name="facebook"></box-icon>
          </li>
          <li className={styles.logo2}>
            <box-icon name="instagram" type="logo"></box-icon>
          </li>
          <li className={styles.logo2}>
            <box-icon name="linkedin" type="logo"></box-icon>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
