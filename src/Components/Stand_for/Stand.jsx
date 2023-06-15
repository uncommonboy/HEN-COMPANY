import React from "react";
import img1 from "./img1.svg";
import img2 from "./img2.svg";
import img3 from "./img3.svg";
import img4 from "./img4.svg";
import img5 from "./img5.svg";
import img6 from "./img6.svg";
import data from "./data.js";
import styles from "./Stand.module.css";

const Stand = () => {
  console.log(data);

  return (
    <section className={styles.stand}>
      <div className={styles.title}>
        What we <b>stand</b> for
      </div>

      <ul className={styles.items}>
        {data.map((item, index) => {
          const image = getImageByIndex(index);

          return (
            <li className={styles.item} key={index}>
              <img className={styles.logo} src={image} alt="" />
              <div className={styles.name}>{item.name}</div>
              <div className={styles.comment}>{item.comment}</div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

function getImageByIndex(index) {
  switch (index) {
    case 0:
      return img1;
    case 1:
      return img2;
    case 2:
      return img3;
    case 3:
      return img4;
    case 4:
      return img5;
    case 5:
      return img6;
    default:
      return "";
  }
}

export default Stand;
