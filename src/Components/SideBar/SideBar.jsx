import styles from "./SideBar.module.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Link, NavLink } from "react-router-dom";

export default function SideBar() {
  const [state, setState] = React.useState(false);

  const list = () => (
    <Box
      role="presentation"
      onClick={() => setState(false)}
      onKeyDown={() => setState(false)}
      className={styles.links}
    >
      <NavLink
        to="/investors"
        activeClassName={styles.activeLink}
        className={styles.link}
      >
        For investors
      </NavLink>

      <NavLink
        to="/heh-news"
        activeClassName={styles.activeLink}
        className={styles.link}
      >
        HEH news
      </NavLink>

      <NavLink
        to="/heh-foundation"
        activeClassName={styles.activeLink}
        className={styles.link}
      >
        HEH foundation
      </NavLink>

      <NavLink
        to="/received-invitation"
        activeClassName={styles.activeLink}
        className={styles.link}
      >
        Received invitation
      </NavLink>
    </Box>
  );
  return (
    <>
      <button onClick={() => setState(true)} className="menu">
        <box-icon name="menu"></box-icon>
      </button>
      <div>
        <React.Fragment>
          <Drawer open={state} onClose={() => setState(false)}>
            {list()}
          </Drawer>
        </React.Fragment>
      </div>
    </>
  );
}
