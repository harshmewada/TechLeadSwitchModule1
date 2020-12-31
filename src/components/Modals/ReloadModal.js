import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modals from ".";

import { useSelector, useDispatch } from "react-redux";
import { ReloadApplication } from "../../actions/utilActions";
import {
  Grid,
  Button,
  Modal,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Divider,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modalRoot: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
  },
  card: {
    width: "30vw",
    outline: "none",

    [theme.breakpoints.down("md")]: {
      width: "80vw",
    },
  },
}));
const ReloadModal = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const open = useSelector((state) => state.utilModule.reload);
  return (
    <Modal
      className={classes.modalRoot}
      open={open}
      title="Do you want to reset?"
      close={() => dispatch(ReloadApplication())}
    >
      <Card className={classes.card}>
        <CardHeader title={<Typography>Do you want to reset?</Typography>} />
        <Divider />
        <CardContent>
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
        </CardContent>
      </Card>
    </Modal>
  );
};
export default ReloadModal;
