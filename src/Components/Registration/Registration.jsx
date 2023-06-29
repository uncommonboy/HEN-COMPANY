import React from "react";
import styles from "./Registration.module.css";
import imgBackground from "./dell-7ZWVnVSaafY-unsplash 1.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
const Registration = () => {
  return (
    <section className={styles.registration}>
      <Link to='/'>
      <div className={styles.back}>
        <ArrowBackIcon />Back
      </div>
      </Link>

      <div className={styles.main}>
        <img src={imgBackground} alt="" />
        <div className={styles.title}>
          <b> Apply now for free membership to be one of our first users!</b>
        </div>

        <div className={styles.form}>
          <div className={styles.inputs}>
            <div className={styles.col}>
              <input
                placeholder="First name"
                type="text"
                className={styles.inp}
              />
              <select placeholder="Your gender" className={styles.inp}>
                <option className={styles.inp}>MALE</option>
                <option className={styles.inp}>FEMALE</option>
                <option className={styles.inp}>SECTER</option>
              </select>
              <input
                placeholder="Email address"
                type="text"
                className={styles.inp}
              />
            </div>
            <div className={styles.col}>
              <input
                placeholder="Last name"
                type="text"
                className={styles.inp}
              />
              <input
                placeholder="Current occupation"
                type="text"
                className={styles.inp}
              />
              <input
                placeholder="Phone number"
                type="text"
                className={styles.inp}
              />
            </div>
            <div className={styles.col}></div>
          </div>

          <textarea
            placeholder="Why do you want to become a member of the HEH Networks? *"
            className={styles.textArea}
          ></textarea>

          <div className={styles.selectioins}>
            <div className={styles.selection}>
              <span className={styles.checkbox}>
                <input clasName={styles.checkbox2} type="checkbox" />
              </span>
              <span className={styles.text}>
                I am committed to the free-democratic basic order within the
                meaning of the Basic Law and confirm that I am not/have not been
                a member of a group that is observed by the Office for the
                Protection of the Constitution - this includes in particular the
                AfD and the Identitarian Movement (cf. the terms and conditions
                regarding contractual penalties in the event of incorrect
                information)
              </span>
            </div>
            <div className={styles.selection}>
              <span className={styles.checkbox}>
                <input type="checkbox" />
              </span>
              <span className={styles.text}>
                I have read the <span>General Terms</span> and Conditions and
                the``
                <span>Privacy Policy</span>
                and hereby agree.
              </span>
            </div>
            <div className={styles.selection}>
              <span className={styles.checkbox}>
                <input type="checkbox" />
              </span>
              <span className={styles.text}>
                I would like to be informed about the further course of the
                project and receive the free HEH newsletter (Optional).
              </span>
            </div>
          </div>
          <button className={styles.apply}>Apply for Membership</button>
        </div>
      </div>

      <div className={styles.initialText}>
        It's very simple: fill out the form below. If your profile fits our
        target group, you will receive an exclusive access link upon completion
        of the app, which you can use to start the registration process. This
        consists of two segments with political questions, in which it is
        necessary to achieve certain agreement values. We want to ensure a
        minimum consensus within the network and prevent politically extreme
        opinions from finding their way into the community.
      </div>
    </section>
  );
};

export default Registration;
