import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import MenuIcon from "@material-ui/icons/Menu";
import ReloadIcon from "@material-ui/icons/RefreshOutlined";
import ShareIcon from "@material-ui/icons/ShareOutlined";
import CallIcon from "@material-ui/icons/CallOutlined";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  btn: {
    color: "white",
  },
});

export default function MobileDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState(false);
  const { handleReload } = props;

  const toggleDrawer = (event) => {
    setState(!state);
  };

  const list = () => {
    return (
      <div
        className={clsx(classes.list)}
        role="presentation"
        onClick={(e) => toggleDrawer()}
        onKeyDown={(e) => toggleDrawer()}
      >
        <List>
          <ListItem button onClick={() => handleReload()}>
            <ListItemIcon>
              <ReloadIcon />
            </ListItemIcon>
            <ListItemText primary="Reset Module" />
          </ListItem>
          <Divider />
          <ListItem button onClick={() => handleReload()}>
            <ListItemIcon>
              <ShareIcon />
            </ListItemIcon>
            <ListItemText primary="Share Module" />
          </ListItem>
          <Divider />
          <ListItem button onClick={() => handleReload()}>
            <ListItemIcon>
              <CallIcon />
            </ListItemIcon>
            <ListItemText primary="Contact us" />
          </ListItem>
          <Divider />
        </List>
      </div>
    );
  };

  return (
    <div>
      <IconButton onClick={(e) => toggleDrawer(e)} className={classes.btn}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={state} onClose={(e) => toggleDrawer(e)}>
        {list()}
      </Drawer>
    </div>
  );
}
