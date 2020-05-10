import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Divider,
  Button,
  Typography,
  Icon,
  SvgIcon,
} from "@material-ui/core";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    minHeight: "10vh",
    borderRadius: 0,

    // backgroundColor: "red",
  },
  activeContainer: {
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  icon: {
    // fontSize: "2rem",
    height: "5vh",
    width: "5vw",
  },
  halfIcon: {
    // height: "4vh",
    // width: "4vw",
    // padding: theme.spacing(1),
    // marginTop: "1.15vh",
    // // paddingBottom: "2.3vh",
    height: "2.7vh",
    width: "2.7vw",
  },
  normalColor: {
    color: theme.palette.text.secondary,
  },
  activeIcon: {
    color: "white",
    // "&:hover": {
    //   color: theme.palette.primary.light,
    // },
    // backgroundColor: "red",
  },
  name: {
    // color: theme.palette.text.secondary,
    fontWeight: 500,
  },
}));
const ListBarItem = (props) => {
  const classes = useStyles();
  const data = props.data;
  const { active } = props;
  const { icon, name, index } = data;
  const InnerIcon = icon;
  // console.log("active", active);

  return (
    <Grid
      container
      justify="space-between"
      className={clsx(
        classes.container,
        active ? classes.activeContainer : null
      )}
      alignItems="center"
      component={Button}
      onClick={() => props.onClick()}
    >
      <Grid item lg={5} container alignItems="center" justify="center">
        <InnerIcon
          className={clsx(
            index < 2 ? classes.halfIcon : classes.icon,
            active === true ? classes.activeIcon : classes.normalColor
          )}
          color={active ? "white" : "black"}
        />
      </Grid>
      <Grid item>
        <Typography
          variant="body2"
          className={clsx(
            classes.name,
            active === true ? classes.activeIcon : classes.normalColor
          )}
        >
          {name}
        </Typography>
      </Grid>
    </Grid>
  );
};
export default React.memo(ListBarItem);
