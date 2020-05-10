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
const useStyles = makeStyles((theme) => ({}));
const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar variant="outlined" position="static" color="default">
        <Toolbar>
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <Typography>Techlead</Typography>
            </Grid>
            <Grid item container lg={2} justify="space-between">
              <Grid item>
                <IconButton>
                  <ReloadIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton>
                  <ShareIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton>
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
