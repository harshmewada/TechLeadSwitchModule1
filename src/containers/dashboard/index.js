import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import { useSelector } from "react-redux";
import clsx from "clsx";
import BoxContainer from "../../components/BoxContainer";
import getBackgroundContainerLenght from "../../functions/getBackgroundContainerLenght";
import SingleBoxLength from "../../functions/SingleBoxLength";
import createImageUrl from "../../functions/createImageUrl";
import getStyleObj from "../../functions/getStyleObj";
import DashSwitch from "../../components/Dashswitch";
import SnackBar from "../../components/Snackbars/index";
const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "red",
    height: "100%",
    // backgroundColor: "red",
  },
  box: {
    border: "1px solid red",
  },
  dynamic22: {
    height: "24vh",
  },
  dynamic24: {
    height: "32vh",
  },
  switchContainer: {
    position: "absolute",
    bottom: 80,
    left: 100,
  },
}));
const Dashboard = () => {
  const classes = useStyles();
  const SizeData = useSelector((state) => state.sizeModule);
  const { Boxes } = SizeData;
  let BoxLength = Boxes.length;
  // let lenght = Boxes.length === 6 ? 4 : 3;
  // let container
  let containerLengh = getBackgroundContainerLenght(BoxLength);
  let lenght = SingleBoxLength(BoxLength);

  let GlassData = useSelector((state) => state.glassModule);
  let defaultGlass = GlassData.item;
  // console.log(defaultGlass, "glass");

  let defaultBg = "#eee";

  const wallBg = useSelector((state) => state.wallModule);
  let bgImageType = wallBg.type;

  let wallBackground =
    bgImageType === "color"
      ? wallBg.wallcolor
      : (bgImageType = "image" ? createImageUrl(wallBg.wallcolor) : null);

  const dashvalues = useSelector((state) => state.dashModule);
  const { led, border } = dashvalues;

  const snackActive = useSelector((state) => state.snackModule.active);
  return (
    <Grid
      container
      className={classes.root}
      alignItems="center"
      justify="center"
      style={getStyleObj(wallBackground, bgImageType)}
    >
      <Grid item lg={containerLengh}>
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{
            background: defaultGlass === null ? defaultBg : defaultGlass.bg,
            // padding: BoxLength > 0 ? "10vh" : "0vh",
          }}
          component={Paper}
          elevation={4}
        >
          {Boxes.map((data, index) => {
            return (
              <Grid
                key={index}
                item
                lg={lenght}
                className={clsx(
                  border === true ? classes.box : null,
                  BoxLength === 1 || BoxLength === 2 || BoxLength === 6
                    ? classes.dynamic24
                    : classes.dynamic22
                )}
              >
                {data === 1 ? (
                  <div></div>
                ) : (
                  <BoxContainer data={data} active={led} />
                )}
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <div className={classes.switchContainer}>
        <DashSwitch />
      </div>
      {snackActive && <SnackBar />}
      {/* {snackActive && <SnackBar />} */}
    </Grid>
  );
};
export default Dashboard;
