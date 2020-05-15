import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modals from ".";

import { useSelector, useDispatch } from "react-redux";
import { ReloadApplication } from "../../actions/utilActions";
import { Grid, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));
const ReloadModal = (props) => {
  const dispatch = useDispatch();

  const open = useSelector((state) => state.utilModule.reload);
  return (
    <Modals
      open={open}
      title="Do you want to reset?"
      close={() => dispatch(ReloadApplication())}
    >
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Button
            color="primary"
            variant="contained"
            onClick={() => dispatch({ type: "RESET" })}
          >
            Reset
          </Button>
        </Grid>
        <Grid item>
          <Button
            color="default"
            variant="contained"
            onClick={() => dispatch(ReloadApplication())}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Modals>
  );
};
export default ReloadModal;
