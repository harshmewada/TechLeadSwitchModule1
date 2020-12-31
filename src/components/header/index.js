// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   AppBar,
//   Toolbar,
//   Grid,
//   Typography,
//   IconButton,
//   Hidden,
// } from "@material-ui/core";
// import ReloadIcon from "@material-ui/icons/RefreshOutlined";
// import ShareIcon from "@material-ui/icons/ShareOutlined";
// import CallIcon from "@material-ui/icons/CallOutlined";
// import Logo from "../../static/logo.png";
// import { useDispatch } from "react-redux";
// import {
//   ReloadApplication,
//   ShowShare,
//   ShowContact,
// } from "../../actions/utilActions";
// import MobileDrawer from "./MobileDrawer";
// const useStyles = makeStyles((theme) => ({
//   AppBar: {
//     height: "12vh",
//     display: "flex",
//     justifyContent: "center",
//     backgroundColor: theme.palette.primary.main,
//     [theme.breakpoints.down("sm")]: {
//       zIndex: theme.zIndex.appBar + 1,
//       height: "10vh",
//     },
//   },
//   logo: {
//     height: "8vh",
//     [theme.breakpoints.down("md")]: {
//       height: "7vh",
//     },
//   },
//   icon: {
//     backgroundColor: "white",
//     borderRadius: 100,
//     "&:hover": {
//       backgroundColor: "#eee",
//     },
//   },
//   container: {
//     height: "100%",
//     width: "100%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   iconContainer: {
//     width: "8vw",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
// }));
// const Header = () => {
//   const classes = useStyles();
//   const dispatch = useDispatch();
//   const handleReload = () => {
//     dispatch(ReloadApplication());
//   };
//   const handleShare = () => {
//     dispatch(ShowShare());
//   };
//   const handleContact = () => {
//     dispatch(ShowContact());
//   };

//   return (
//     <div>
//       <AppBar variant="outlined" position="static" className={classes.AppBar}>
//         <Toolbar>
//           <div className={classes.container}>
//             <div className={classes.logoContainer}>
//               <img src={Logo} className={classes.logo} />
//             </div>
//             <div className={classes.iconContainer}>
//               <Hidden mdDown>
//                 <IconButton
//                   className={classes.icon}
//                   onClick={() => handleReload()}
//                 >
//                   <ReloadIcon />
//                 </IconButton>
//                 {/* <IconButton
//                   className={classes.icon}
//                   onClick={() => handleShare()}
//                 >
//                   <ShareIcon />
//                 </IconButton> */}
//                 <IconButton
//                   className={classes.icon}
//                   onClick={() => handleContact()}
//                 >
//                   <CallIcon />
//                 </IconButton>
//               </Hidden>
//               <Hidden mdUp>
//                 <MobileDrawer
//                   handleReload={() => handleReload()}
//                   handleContact={() => handleContact()}
//                   handleShare={() => handleShare()}
//                 />
//               </Hidden>
//             </div>
//           </div>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// };
// export default Header;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  IconButton,
  Hidden,
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
import MobileDrawer from "./MobileDrawer";
const useStyles = makeStyles((theme) => ({
  AppBar: {
    height: "12vh",
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      zIndex: theme.zIndex.appBar + 1,
      height: "10vh",
    },
  },
  logo: {
    height: "8vh",
    [theme.breakpoints.down("md")]: {
      height: "7vh",
    },
  },
  icon: {
    backgroundColor: "white",
    borderRadius: 100,
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
    window.open("http://techleadsolution.in/contact-us");
  };

  return (
    <div>
      <AppBar variant="outlined" position="static" className={classes.AppBar}>
        <Toolbar>
          <Grid container alignItems="center" justify="space-between">
            <Grid item sm={5} md={5} xs={8}>
              {/* <Typography variant="h6">Techlead</Typography> */}
              <img src={Logo} className={classes.logo} />
            </Grid>
            <Hidden xsDown>
              <Grid item container lg={2} sm={4} md={5} justify="space-evenly">
                <Grid item>
                  <IconButton
                    className={classes.icon}
                    onClick={() => handleReload()}
                  >
                    <ReloadIcon />
                  </IconButton>
                </Grid>
                {/* <Grid item>
                  <IconButton
                    className={classes.icon}
                    onClick={() => handleShare()}
                  >
                    <ShareIcon />
                  </IconButton>
                </Grid> */}
                <Grid item>
                  <IconButton
                    className={classes.icon}
                    onClick={() => handleContact()}
                  >
                    <CallIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Hidden>
            <Hidden smUp>
              <Grid
                item
                xs={4}
                container
                justify="flex-end"
                alignItems="center"
              >
                <MobileDrawer
                  handleReload={() => handleReload()}
                  handleContact={() => handleContact()}
                  handleShare={() => handleShare()}
                />
              </Grid>
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
