import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
  },
  icon: {
    height: "40%",
    width: "40%",
    // color: "red",
    // backgroundColor: "green",
  },
  halfIcon: {
    height: "10%",
    width: "10%",
  },
  fullOpacity: {
    opacity: 1,
  },
  halfOpacity: {
    opacity: 0.5,
  },
}));
const BoxContainer = (props) => {
  const { data, active } = props;
  const classes = useStyles();
  const InnerIcon = data.icon;
  const { size } = data;
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <Grid item container justify="center" alignItems="center">
        <InnerIcon
          className={clsx(
            size === 1 ? classes.halfIcon : classes.icon,
            active ? classes.fullOpacity : classes.halfOpacity
            // active === true ? classes.activeIcon : classes.normalColor
          )}
          color="#36c2f3"
          fill="#36c2f3"
          // color={active ? "white" : "black"}
        />
      </Grid>
      {/* <Grid item>{data.name}</Grid> */}
    </Grid>
  );
};
export default BoxContainer;
