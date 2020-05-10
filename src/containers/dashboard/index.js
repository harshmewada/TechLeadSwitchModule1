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
                  classes.box,
                  BoxLength === 1 || BoxLength === 2 || BoxLength === 6
                    ? classes.dynamic24
                    : classes.dynamic22
                )}
              >
                {data === 1 ? <div></div> : <BoxContainer data={data} />}
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Dashboard;
