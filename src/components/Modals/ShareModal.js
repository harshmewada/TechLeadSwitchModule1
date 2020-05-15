import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modals from ".";

import { useSelector, useDispatch } from "react-redux";
import { ShowShare } from "../../actions/utilActions";
import { Grid, Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));
const ShareModal = (props) => {
  const dispatch = useDispatch();

  const open = useSelector((state) => state.utilModule.share);
  return (
    <Modals
      open={open}
      title="Under Construction"
      close={() => dispatch(ShowShare())}
    >
      <Grid container justify="space-between" alignItems="center">
        {/* <Grid item>
          <Button
            color="primary"
            variant="contained"
            onClick={() => dispatch({ type: "RESET" })}
          >
            Reset
          </Button>
        </Grid> */}
        <Grid item>
          <Button
            color="default"
            variant="contained"
            onClick={() => dispatch(ShowShare())}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Modals>
  );
};
export default ShareModal;
