import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import SideGridModulesName from "../../static/SideGridModules";
import SideGridModule from "./sidegridModule";
import { useSelector, useDispatch } from "react-redux";
import {
  removeModuleActive,
  setModuleActive,
} from "../../actions/activemodule";
const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    // backgroundColor: "red",
    backgroundColor: theme.palette.grey[100],
  },
  item: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0px 1px 10px rgba(0,0,0,0.2)",
    "&:hover": {
      backgroundColor: theme.palette.background.paper,
    },
    "&:active": {
      backgroundColor: theme.palette.background.paper,
    },
  },
}));
const SideGrid = () => {
  const classes = useStyles();
  const data = SideGridModulesName;
  const active = useSelector((state) => state.activeModule.index);
  const dispatch = useDispatch();
  const handleModuleActivation = (index) => {
    // active === index ? console.log("remove") : dispatch(setModuleActive(index));
    // console.log("active", active);
    active === index
      ? dispatch(removeModuleActive())
      : dispatch(setModuleActive(index));
  };
  React.useEffect(() => {
    console.log(active, "from state");
  }, [active]);
  // console.log("active", active);
  return (
    <Grid container className={classes.container} alignItems="stretch">
      {data &&
        data.map((data, index) => {
          return (
            <Grid
              container
              item
              key={index}
              component={Button}
              lg={12}
              className={active === index ? classes.item : null}
              onClick={() => handleModuleActivation(index)}
            >
              <SideGridModule
                data={data}
                active={active === index ? true : false}
              />
            </Grid>
          );
        })}
    </Grid>
  );
};
export default React.memo(SideGrid);
