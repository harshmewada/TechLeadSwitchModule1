import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Slide,
  Paper,
  Divider,
  MenuList,
  MenuItem,
  Button,
  Hidden,
  Drawer,
  SwipeableDrawer,
} from "@material-ui/core";

import ListBarItem from "./listbarItem";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { useDispatch, useSelector } from "react-redux";
import { removeModuleActive } from "../../actions/activemodule";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    // left: "80%",
    right: "8.33%",
    zIndex: 10,
    height: "90vh",

    marginTop: 0,
  },
  Paper: {
    borderRadius: 0,
    height: "90vh",
    overflowY: "auto",
    // backgroundColor: "red",
    minWidth: 280,
    [theme.breakpoints.down("sm")]: {
      height: "100%",
    },
  },
  nopaper: {
    position: "absolute",
    // left: "80%",
    // top: "1%",
    right: "9%",
    zIndex: 10,
    height: "auto",
    // backgroundColor: "green",
  },

  noPaper: {
    borderRadius: 0,
    // top: "10%",
    height: "auto",
    // overflowY: "auto",
    // backgroundColor: "red",
    minWidth: 20,
    backgroundColor: "transparent",
  },
  glassMargin: {
    marginTop: "25vh",
  },
  wallMargin: {
    marginTop: "58vh",
  },
  mobileDrawer: {
    width: 200,
  },
}));
const ListBar = (props) => {
  const classes = useStyles();
  const selectedIndex = useSelector((state) => state.activeModule.index);
  // const anchorRef = React.useRef(null);
  let open = selectedIndex === props.index ? true : false;
  const dispatch = useDispatch();
  const handleClose = (event) => {
    // if (anchorRef.current && anchorRef.current.contains(event.target)) {
    //   return;
    // }
    props.set();
    if (open === true) {
      dispatch(removeModuleActive());
    }

    if (props.getClickAway !== undefined) {
      props.getClickAway();
    }

    // open === false && dispatch(removeModuleActive());
    // props.open === true ?: false;
    // setOpen(false);
  };
  const noPaper = props.nopaper;

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      // dispatch(removeModuleActive());
      // setOpen(false);
      props.set();
    }
  }

  // return focus to the button when we transitioned from !open -> open
  // const prevOpen = React.useRef(open);
  // React.useEffect(() => {
  //   if (prevOpen.current === true && open === false) {
  //     anchorRef.current.focus();
  //   }

  //   prevOpen.current = open;
  // }, [open]);

  return (
    <div>
      <Hidden smDown>
        <div
          className={clsx(
            noPaper ? classes.nopaper : classes.paper,
            props.index === 1
              ? classes.glassMargin
              : props.index === 3
              ? classes.wallMargin
              : null
          )}
        >
          <Slide direction="left" in={open} mountOnEnter unmountOnExit>
            <Paper
              elevation={0}
              className={noPaper ? classes.noPaper : classes.Paper}
            >
              <ClickAwayListener onClickAway={handleClose}>
                {props.children}
              </ClickAwayListener>
            </Paper>
          </Slide>
        </div>
      </Hidden>
      <Hidden mdUp>
        <Drawer
          onOpen={() => console.log("mobile sizebar open")}
          anchor="right"
          open={open}
          onClose={() => {
            handleClose();
          }}
          className={classes.mobileDrawer}
        >
          <Paper
            elevation={0}
            className={noPaper ? classes.noPaper : classes.Paper}
          >
            {props.children}
          </Paper>
        </Drawer>
      </Hidden>
    </div>
  );
};
export default React.memo(ListBar);
