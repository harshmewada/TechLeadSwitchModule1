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
  },
  card: {
    minWidth: "30vw",
    [theme.breakpoints.down("md")]: {
      width: "auto",
      margin: "0 10px",
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
