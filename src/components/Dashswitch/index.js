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

  const switchChange = () => {
    dispatch(toggleSwitchLed());
  };
  const borderChange = () => {
    dispatch(toggleBorder());
  };

  const dashvalues = useSelector((state) => state.dashModule);
  const { led, border } = dashvalues;
  return (
    <div className={classes.root}>
      <Grid container className={classes.container} spacing={2}>
        <Grid item lg={8} justify="center">
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
          <Button fullWidth className={classes.btn} variant="contained">
            Specs
          </Button>
        </Grid>
        <Grid item lg={8}>
          <Paper>
            <FormControlLabel
              value={border}
              control={<Switch color="primary" />}
              label="Border"
              labelPlacement="start"
              onChange={() => borderChange()}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default DashSwitch;
