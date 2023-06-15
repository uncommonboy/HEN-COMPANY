import React from "react";
import logo from "./Group 3.svg";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
      <ul className={styles.links}>
        <li>
          <NavLink
            to="/investors"
            activeClassName={styles.activeLink}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.activeLink}` : styles.link
            }
          >
            For investors
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/heh-news"
            activeClassName={styles.activeLink}
            className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.activeLink}` : styles.link
          }          >
            HEH news
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/heh-foundation"
            activeClassName={styles.activeLink}
            className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.activeLink}` : styles.link
          }          >
            HEH foundation
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/received-invitation"
            activeClassName={styles.activeLink}
            className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.activeLink}` : styles.link
          }          >
            Received invitation
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
