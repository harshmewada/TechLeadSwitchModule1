import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Divider } from "@material-ui/core";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
  icon: {
    // height: "7vh",
    color: theme.palette.grey[500],
  },
  activeIcon: {
    // height: "7vh",
    color: theme.palette.primary.main,
  },
  // activeContainer: {
  //   backgroundColor: theme.palette.background.paper,
  // },
  item: {
    color: theme.palette.grey[500],
  },
  activeItem: {
    color: theme.palette.primary.main,
  },
}));
const SideGridModule = ({ data, active }) => {
  const classes = useStyles();
  const Icon = data.icon;
  return (
    <Grid
      container
      spacing={2}
      justify="center"
      className={clsx(
        classes.container,
        active ? classes.activeContainer : null
      )}
    >
      <Grid item lg={8} container justify="center">
        <Icon className={active ? classes.activeIcon : classes.icon} />
      </Grid>
      <Grid item lg={8} container justify="center">
        <Typography
          variant="body2"
          className={clsx(classes.item, active ? classes.activeItem : null)}
        >
          {data.name}
        </Typography>
      </Grid>
      <Grid item lg={8}>
        <Divider
          className={clsx(classes.item, active ? classes.activeItem : null)}
        />
      </Grid>
    </Grid>
  );
};
export default SideGridModule;
