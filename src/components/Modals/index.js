import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Modal,
  Card,
  CardHeader,
  CardContent,
  Divider,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/CloseOutlined";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "auto",

    outline: "none",
  },
  card: {
    minWidth: "30vw",
    maxWidth: "80vw",
    maxHeight: "90vh",
    overflow: "auto",
    outline: "none",

    [theme.breakpoints.down("md")]: {
      width: "auto",
      maxWidth: "90vw",

      // margin: "0 10px",
    },
  },
}));
const Modals = (props) => {
  const classes = useStyles();

  const { open } = props;
  return (
    <Modal
      open={open}
      className={classes.root}
      onClose={() => props.close()}
      {...props}
    >
      <Card className={classes.card}>
        <CardHeader
          title={props.title}
          action={
            <IconButton onClick={() => props.close()}>
              <CloseIcon />
            </IconButton>
          }
        />
        <Divider />
        <CardContent>{props.children}</CardContent>
      </Card>
    </Modal>
  );
};
export default Modals;
