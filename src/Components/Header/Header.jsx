import React from "react";
import logo from "./Group 3.svg";
import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

function Header() {
  const menuIconStyle = {
    fontSize: "40px",
  };
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
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
              }
            >
              HEH news
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/heh-foundation"
              activeClassName={styles.activeLink}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.activeLink}` : styles.link
              }
            >
              HEH foundation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/received-invitation"
              activeClassName={styles.activeLink}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.activeLink}` : styles.link
              }
            >
              Received invitation
            </NavLink>
          </li>
        </ul>
        <SideBar />
      </div>
    </>
  );
}

export default Header;
