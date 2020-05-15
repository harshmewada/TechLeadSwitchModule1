import React from "react";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { HideSnackBar } from "../../actions/snackActions";
import { Snackbar } from "@material-ui/core";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({}));
const SnackDisplay = (props) => {
  const classes = useStyles();
  const data = useSelector((state) => state.snackModule);
  const { active, type, message } = data;
  const [open, setOpen] = React.useState(active);
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
    dispatch(HideSnackBar());
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      //   key={`${vertical},${horizontal}`}
      open={open}
      onClose={() => handleClose()}
      autoHideDuration={2000}
    >
      <Alert severity={type ? type : "info"}>{message}</Alert>
    </Snackbar>
  );
};
export default SnackDisplay;
