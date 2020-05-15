import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  IconButton,
} from "@material-ui/core";
import ReloadIcon from "@material-ui/icons/RefreshOutlined";
import ShareIcon from "@material-ui/icons/ShareOutlined";
import CallIcon from "@material-ui/icons/CallOutlined";
import Logo from "../../static/logo.png";
import { useDispatch } from "react-redux";
import {
  ReloadApplication,
  ShowShare,
  ShowContact,
} from "../../actions/utilActions";
const useStyles = makeStyles((theme) => ({
  AppBar: {
    backgroundColor: theme.palette.primary.main,
    height: "10vh",
  },
  logo: {
    height: "5vh",
  },
  icon: {
    backgroundColor: "white",
    borderRadius: 5,
    "&:hover": {
      backgroundColor: "#eee",
    },
  },
}));
const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleReload = () => {
    dispatch(ReloadApplication());
  };
  const handleShare = () => {
    dispatch(ShowShare());
  };
  const handleContact = () => {
    dispatch(ShowContact());
  };
  return (
    <div>
      <AppBar variant="outlined" position="static" className={classes.AppBar}>
        <Toolbar>
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              {/* <Typography variant="h6">Techlead</Typography> */}
              <img src={Logo} className={classes.logo} />
            </Grid>
            <Grid item container lg={2} justify="space-evenly">
              <Grid item>
                <IconButton
                  className={classes.icon}
                  onClick={() => handleReload()}
                >
                  <ReloadIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  className={classes.icon}
                  onClick={() => handleShare()}
                >
                  <ShareIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  className={classes.icon}
                  onClick={() => handleContact()}
                >
                  <CallIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
