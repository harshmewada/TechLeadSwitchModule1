import React from "react";

import Modals from ".";

import { useSelector, useDispatch } from "react-redux";
import { ShowContact } from "../../actions/utilActions";
import { Grid, Button } from "@material-ui/core";

const ContactModal = (props) => {
  const dispatch = useDispatch();

  const open = useSelector((state) => state.utilModule.contact);
  return (
    <Modals
      open={open}
      title="Under Construction"
      close={() => dispatch(ShowContact())}
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
            onClick={() => dispatch(ShowContact())}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Modals>
  );
};
export default ContactModal;
