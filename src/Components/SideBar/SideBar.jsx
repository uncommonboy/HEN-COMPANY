import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import img from "./Group 39.svg";
import styles from "./SideBar.module.css";

export default function TemporaryDrawer() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);

    // Disable body scrolling when menu is open
    document.body.style.overflow = open ? "hidden" : "auto";
  };

  const list = () => (
    <Box
      sx={{
        width: 250,
        backgroundColor: "black",
        color: "white",
        height: "100%",
        position: "relative",
      }}
      role="presentation"
      onKeyDown={toggleDrawer(false)} // Handle keyboard events to close the drawer
    >
      <List className={styles.header}>
        <NavLink to="/" className={styles.navLink} onClick={() => setIsOpen(false)}>
          <ListItem>
            <img className={styles.logo} src={img} alt="Logo" />
          </ListItem>
        </NavLink>
        <ListItem
          button
          onClick={() => setIsOpen(false)}
          sx={{ justifyContent: "flex-end", color: "white" }}
        >
          <CloseIcon />
        </ListItem>
      </List>
      <Divider sx={{ borderColor: "gray" }} />
      <List>
        <NavLink
          to="/investors"
          className={styles.navLink}
          onClick={() => setIsOpen(false)} // Close drawer when link is clicked
        >
          <ListItem button>For Investor</ListItem>
        </NavLink>
        <NavLink
          to="/heh-news"
          className={styles.navLink}
          onClick={() => setIsOpen(false)} // Close drawer when link is clicked
        >
          <ListItem button>HEH News</ListItem>
        </NavLink>
        <NavLink
          to="/heh-foundation"
          className={styles.navLink}
          onClick={() => setIsOpen(false)} // Close drawer when link is clicked
        >
          <ListItem button>HEH Foundation</ListItem>
        </NavLink>
        <NavLink
          to="/received-invitation"
          className={styles.navLink}
          onClick={() => setIsOpen(false)} // Close drawer when link is clicked
        >
          <ListItem button>Received Invitation</ListItem>
        </NavLink>
      </List>
    </Box>
  );

  return (
    <div className={styles.root}>
      <button
        onClick={toggleDrawer(true)}
        className={styles.menu}
        aria-label="Open Menu"
      >
        <MenuIcon />
      </button>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "black",
            color: "white",
            width: "100%",
            zIndex: 1300,
            position: "fixed",
            overflow: "hidden",
          },
        }}
        ModalProps={{
          keepMounted: true, // Improves performance when the drawer is closed
        }}
      >
        {list()}
      </Drawer>
    </div>
  );
}
