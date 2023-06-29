import React from "react";
import { Link } from "react-router-dom";
import styles from "./News.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";
import banner from "./banner.png";
import accaunt from "./accaunt.svg";
const News = () => {
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
          read 3 min
        </div>
        <div className={styles.right}>
          <EmailIcon />
          news@heh-network.de{" "}
        </div>
      </div>
      <div className={styles.main}>
        <img className={styles.banner} src={banner} />
        <div className={styles.title}>
          “One must not confuse the majority with the truth”{" "}
        </div>
        <div className={styles.accaunt}>
          <img src={accaunt} />
        </div>
        <div className={styles.comment}>
          <div>
            HEH For investors HEH news HEH foundation Received invitation Back
            read 2 min news@heh-network.de “One must not confuse the majority
            with the truth” Jean Cocteau Lawyer We at HEH are of the opinion
            that liberal-conservative positions are not sufficiently taken into
            account in German-language reporting. For this reason , we want to
            offer editorial content in the long term and in addition to the
            network app as our core offering, which combines content
            requirements with linguistic brilliance and should form a renowned
            counterweight to the otherwise left-leaning journalism .
          </div>
          <div>
            We are also looking for talented authors [students explicitly
            included ] and a dedicated Chief News Officer [CNO], who will also
            take on classic public relations, marketing and content creation and
            content distribution tasks. Salaries can also be paid once the
            cost-intensive software development has been completed .
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
