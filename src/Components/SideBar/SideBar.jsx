import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import img from "./Group 39.svg";
import styles from './SideBar.module.css'
import zIndex from "@mui/material/styles/zIndex";
export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, left: open });
  };

  const list = () => (
    <Box
      sx={{
        width: 250,
        backgroundColor: "black",
        color: "white",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List className={styles.header}>
        <NavLink to="/">
          <ListItem>
            <img className="logo" src={img} alt="" />
          </ListItem>
        </NavLink>
        <NavLink to="/">
          <ListItem>
            <CloseIcon />
          </ListItem>
        </NavLink>
      </List>
      <Divider />
      <List>
        <NavLink to="/investors">
          <ListItem>For investors</ListItem>
        </NavLink>
        <NavLink to="heh-news">
          <ListItem>HEH news</ListItem>
        </NavLink>
        <NavLink to="heh-foundation">
          <ListItem>HEH foundation</ListItem>
        </NavLink>
        <NavLink to="received-invitation">
          <ListItem>Received invitation</ListItem>
        </NavLink>
      </List>
    </Box>
  );

  return (
    <div style={{ display: "flex" }}>
      <Box sx={{ flexGrow: 1 }}>
        {/* Rest of the page content */}
      </Box>
      <button onClick={toggleDrawer(true)} className={styles.menu}>
        <MenuIcon />
      </button>
      <Drawer
        anchor="left" 
        open={state.left}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "black",
            color: "white",
            width: '100%',
            position:'absolute',
            zIndex:22222222222
          },
        }}
      >

        {list()}
      </Drawer>
    </div>
  );
}
