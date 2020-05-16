import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  FormControlLabel,
  Switch,
  Button,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { toggleSwitchLed, toggleBorder } from "../../actions/dashactions";
import Modals from "../../components/Modals";
import { ShowSpecifications } from "../../actions/utilActions";
import { ShowSnackBar } from "../../actions/snackActions";
import EmptyIcon from "../../static/Icons/module/EmptyModule";

const emptydata = {
  index: null,
  name: null,
  icon: EmptyIcon,
  mainIcon: EmptyIcon,
  size: "normal",
};
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 200,
  },
  btn: {
    backgroundColor: "white",
  },
}));

const DashSwitch = () => {
  const classes = useStyles();
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
  return (
    <div className={classes.root}>
      <Grid container className={classes.container} spacing={2}>
        <Grid item lg={8}>
          <Paper>
            <FormControlLabel
              value={led}
              control={
                <Switch color="primary" onChange={() => switchChange()} />
              }
              label="Active"
              labelPlacement="start"
            />
          </Paper>
        </Grid>

        <Grid item lg={8}>
          <Button
            fullWidth
            className={classes.btn}
            variant="contained"
            onClick={() => handleSPecs()}
          >
            Specs
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
export default DashSwitch;
