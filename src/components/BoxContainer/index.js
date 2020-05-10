import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
  },
  img: {
    height: "50%",
    width: "50%",
  },
}));
const BoxContainer = (props) => {
  const { data } = props;
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <Grid item container justify="center" alignItems="center">
        <img src={data.mainIcon} className={classes.img} />
      </Grid>
      {/* <Grid item>{data.name}</Grid> */}
    </Grid>
  );
};
export default BoxContainer;
