import React from "react";
import img from "./Group 25.svg";
import styles from "./Offer.module.css";

const Offer = () => {
  return (
    <section className={styles.offer}>
      <div className={styles.title}>
        What <b>we</b> offer
      </div>
      <div className={styles.bottom}>
        <img className={styles.img} src={img} alt="" />
        <div className={styles.itemsAll}>

          <div className={styles.itemsCol}>
            <div className={styles.item}>
              <div className={styles.name}>Offers</div>
              <div className={styles.description}>
                Performers with each other and with the high performers of
                tomorrow.
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.name}>Offers one</div>
              <div className={styles.description}>
                Performers with each other and with the high performers of
                tomorrow.
              </div>
            </div>
          </div>

          <div className={styles.itemsCol}>
            <div className={styles.item}>
              <div className={styles.name}>Feed</div>
              <div className={styles.description}>
                Performers with each other and with the high performers of
                tomorrow. An invite-only app for political and professional
                exchange. Register now for the free beta version!
              </div>
            </div>
            <div className={styles.item}>
            <div className={styles.name}>Workspaces</div>
              <div className={styles.description}>
              Performers with each other and with the high performers of tomorrow.
              </div>
            </div>
            </div>
            
          </div>
        </div>
    </section>
  );
};

export default Offer;
