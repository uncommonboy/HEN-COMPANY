import React from "react";
import { Link } from "react-router-dom";
import styles from "./Foundation.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";
import banner from "./banner.png";
import accaunt from "./accaunt.svg";
const Foundation = () => {
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
          read 2 min
        </div>
        <div className={styles.right}>
          <EmailIcon />
          stiftung@heh-network.de        </div>
      </div>
      <div className={styles.main}>
        <img className={styles.banner} src={banner} />
        <div className={styles.title}>
        "Do not neglect to exercise the powers of good."        </div>
        <div className={styles.accaunt}>
          <img src={accaunt} />
        </div>
        <div className={styles.comment}>
          <div>
            After mask affairs, corruption scandals in Austria and other
            incidents, the impression has often arisen that there are no decent
            conservatives [anymore] - the AfD slides into right-wing extremism;
            the Union into insignificance. At HEH, on the other hand , we aim to
            be part of the solution and not the problem.
          </div>
          <div>
            For this purpose, we transfer 10% of our profits and other donations
            directed to the network to the HEH Foundation once the app is
            complete. It is the completion of the intention to contribute to a
            great future of a great country with an entrepreneurial project and
            to want to improve it on a small scale.
          </div>
          <div>
            In the long term, we want to use the funds available to promote
            liberal-conservative top performers from all walks of life, enable
            events – especially discussion rounds with people who think
            differently – support liberal-conservative projects and get involved
            in the prevention of extremism; The latter especially with regard to
            right-wing extremism, which we, as members of the
            moderate-conservative spectrum , are particularly responsible for
            curbing .
          </div>
        </div>
      </div>
    </section>
  );
};

export default Foundation;
