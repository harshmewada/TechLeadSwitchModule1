import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../components/header";
import { Grid, Slide, Paper } from "@material-ui/core";
import SideGrid from "../../components/SideGrid";
import Sizebar from "../../components/listbar/sizebar";
import { useSelector } from "react-redux";
import ModuleBar from "../../components/listbar/moduleBar";
import Dashboard from "../dashboard";
import GlassBar from "../../components/listbar/glassBar";
import WallBar from "../../components/listbar/wallBar";
const useStyles = makeStyles((theme) => ({
  container: {
    height: "90.7vh",
  },
  sidecontainer: {
    height: "90.7vh",

    zIndex: 100,
  },
  dashContainer: {
    backgroundColor: theme.palette.grey[50],
  },
}));
const Root = () => {
  const classes = useStyles();
  const selectedSize = useSelector((state) => state.activeModule.index);

  return (
    <div>
      <Header />
      <Grid container className={classes.container}>
        <Grid item lg={11} className={classes.dashContainer} id="dashContainer">
          <Sizebar open={selectedSize === 0 ? true : false} />
          <GlassBar open={selectedSize === 1 ? true : false} />
          <ModuleBar open={selectedSize === 2 ? true : false} />
          <WallBar open={selectedSize === 3 ? true : false} />
          <Dashboard />
        </Grid>
        <Grid item lg={1} className={classes.sidecontainer}>
          <SideGrid />
        </Grid>
      </Grid>
    </div>
  );
};
export default Root;
