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
import {
  IconButton,
  ListItemAvatar,
  Switch,
  ListItemSecondaryAction,
} from "@material-ui/core";
import { ShowSpecifications } from "../../actions/utilActions";
import { ShowSnackBar } from "../../actions/snackActions";
import EmptyIcon from "../../static/Icons/module/EmptyModule";
import { useDispatch, useSelector } from "react-redux";
import { toggleSwitchLed, toggleBorder } from "../../actions/dashactions";
import SpecsIcon from "@material-ui/icons/Dashboard";
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
  const { handleReload, handleShare, handleContact } = props;

  const toggleDrawer = (event) => {
    setState(!state);
  };
  const dispatch = useDispatch();
  const size = useSelector((state) => state.sizeModule.Boxes);
  const color = useSelector((state) => state.glassModule.item);

  const SpecsValidation = () => {
    const sizeError = size.length === 0 ? true : false;

    const colorError = color === null ? true : false;

    // const moduleError = !sizeError && !size.includes(emptydata) ? false : true;
    const moduleError =
      !sizeError && size.filter((data) => data.index === null).length === 0
        ? false
        : true;
    // console.log("size", sizeError, "color", colorError, "module", moduleError);
    return sizeError || colorError || moduleError;
  };

  const switchChange = () => {
    dispatch(toggleSwitchLed());
  };
  const borderChange = () => {
    dispatch(toggleBorder());
  };
  const handleSPecs = () => {
    let validate = SpecsValidation();

    validate === false
      ? dispatch(ShowSpecifications())
      : dispatch(
          ShowSnackBar(
            true,
            "error",
            "Please Complete switch board to see specifications"
          )
        );
  };
  const dashvalues = useSelector((state) => state.dashModule);
  const { led, border } = dashvalues;

  const list = () => {
    return (
      <div className={clsx(classes.list)} role="presentation">
        <List>
          <ListItem
            button
            onClick={() => {
              handleReload();
              toggleDrawer();
            }}
          >
            <ListItemIcon>
              <ReloadIcon />
            </ListItemIcon>
            <ListItemText primary="Reset Module" />
          </ListItem>
          <Divider />
          <ListItem
            button
            onClick={() => {
              toggleDrawer();
              handleShare();
            }}
          >
            <ListItemIcon>
              <ShareIcon />
            </ListItemIcon>
            <ListItemText primary="Share" />
          </ListItem>
          <Divider />
          <ListItem
            button
            onClick={() => {
              toggleDrawer();
              handleContact();
            }}
          >
            <ListItemIcon>
              <CallIcon />
            </ListItemIcon>
            <ListItemText primary="Contact us" />
          </ListItem>
          <Divider />

          <ListItem
            button
            onClick={() => {
              toggleDrawer();
              handleSPecs();
            }}
          >
            <ListItemIcon>
              <SpecsIcon />
            </ListItemIcon>
            <ListItemText primary="Show Specs" />
          </ListItem>
          <Divider />
          <ListItem button onClick={() => switchChange()}>
            <ListItemSecondaryAction>
              <Switch color="primary" checked={led} />
            </ListItemSecondaryAction>
            <ListItemText primary="LED Active" />
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
