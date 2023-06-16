import React, { useEffect, useState } from "react";
import img from "./Group 25.svg";
import img2 from './Group 218.png'
import styles from "./Offer.module.css";

const Offer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getImage = () => {
    if (windowWidth <= 767) {
      return img2;
    } else {
      return img;
    }
  };
  return (
    <section className={styles.offer}>
      <div className={styles.title}>
        What <b>we</b> offer
      </div>
      <div className={styles.bottom}>
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

          <img className={styles.img} src={getImage()} alt="" />

          <div className={styles.itemsCol}>
            <div className={styles.item}>
              <div className={styles.name}>Feed</div>
              <div className={styles.description}>
                Performers with each other and with the high performers of
                tomorrow. 
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
