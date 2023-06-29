import React from "react";
import { Link } from "react-router-dom";
import styles from "./Investors.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";
import banner from "./banner.png";
import accaunt from "./accaunt.svg";
const Investors = () => {
  return (
    <section className={styles.invitation}>
      <Link to="/">
        <div className={styles.back}>
          <ArrowBackIcon />
          Back
        </div>
      </Link>
      <div className={styles.notification}>
        <div className={styles.left}>
          <AccessTimeIcon />
          read 1 min
        </div>
        <div className={styles.right}>
          <EmailIcon />
          investors@heh-network.de
        </div>
      </div>
      <div className={styles.main}>
        <img className={styles.banner} src={banner} />
        <div className={styles.title}>
          "It's always time for a new beginning."
        </div>
        <div className={styles.accaunt}>
          <img src={accaunt} />
        </div>
        <div className={styles.comment}>
          For the development, expansion and maintenance of the HEH network, we
          need a six-figure amount in the long term, which can only be fi nanced
          over time through the income from the app itself . Are you an
          investor, entrepreneur or private individual and feel committed to
          liberal-conservative values? The HEH network offers attractive
          participation models from EUR 10,000 for supporters who help us to
          scale our business model. Come on board so we can no longer do right
          winger conservatism; no longer leave liberalism to the big landowners.
        </div>
      </div>
    </section>
  );
};

export default Investors;
