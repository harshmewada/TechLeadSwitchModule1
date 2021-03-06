import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Divider,
  Button,
  Typography,
  Icon,
  SvgIcon,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    // minHeight: "10vh",
    borderRadius: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    // backgroundColor: "red",
  },
  iconContainer: {
    minWidth: "5vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  activeContainer: {
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  icon: {
    // fontSize: "2rem",
    height: "4vh",
    width: "4vw",

    [theme.breakpoints.down("md")]: {
      width: "4vh",
      height: "4vh",
    },
    [theme.breakpoints.down("sm")]: {
      width: "4vh",
      height: "4vh",
    },
    // border: "1px dashed black",
  },
  halfIcon: {
    // height: "4vh",
    // width: "4vw",
    // padding: theme.spacing(1),
    // marginTop: "1.15vh",
    // // paddingBottom: "2.3vh",
    height: "2vh",
    width: "2vw",
    [theme.breakpoints.down("md")]: {
      width: "2vh",
      height: "2vh",
    },
    [theme.breakpoints.down("sm")]: {
      width: "4vh",
      height: "4vh",
    },
  },
  normalColor: {
    color: theme.palette.text.secondary,
  },
  activeIcon: {
    color: "white",
    // "&:hover": {
    //   color: theme.palette.primary.light,
    // },
    // backgroundColor: "red",
  },
  name: {
    // color: theme.palette.text.secondary,
    fontWeight: 500,
  },
}));
const ListBarItem = (props) => {
  const classes = useStyles();
  const data = props.data;
  const { active } = props;
  const { icon, name, index, size } = data;
  const InnerIcon = icon;
  // console.log("active", active);

  return (
    <Button
      fullWidth
      className={classes.container}
      onClick={() => props.onClick()}
    >
      <div className={classes.iconContainer}>
        <InnerIcon
          className={clsx(
            index < 1 ? classes.halfIcon : classes.icon,
            active === true ? classes.activeIcon : classes.normalColor
          )}
          color={active ? "white" : "black"}
        />
      </div>
      <div
        className={active === true ? classes.activeIcon : classes.normalColor}
      >
        {name}
      </div>
    </Button>
  );
};
export default React.memo(ListBarItem);

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   Grid,
//   Divider,
//   Button,
//   Typography,
//   Icon,
//   SvgIcon,
// } from "@material-ui/core";
// import clsx from "clsx";
// const useStyles = makeStyles((theme) => ({
//   container: {
//     padding: theme.spacing(2),
//     minHeight: "10vh",
//     borderRadius: 0,

//     // backgroundColor: "red",
//   },
//   activeContainer: {
//     backgroundColor: theme.palette.primary.main,
//     "&:hover": {
//       backgroundColor: theme.palette.primary.dark,
//     },
//   },
//   icon: {
//     // fontSize: "2rem",
//     height: "4vh",
//     width: "4vw",

//     [theme.breakpoints.down("md")]: {
//       width: "4vh",
//       height: "4vh",
//     },
//     [theme.breakpoints.down("sm")]: {
//       width: "4vh",
//       height: "4vh",
//     },
//     // border: "1px dashed black",
//   },
//   halfIcon: {
//     // height: "4vh",
//     // width: "4vw",
//     // padding: theme.spacing(1),
//     // marginTop: "1.15vh",
//     // // paddingBottom: "2.3vh",
//     height: "2.7vh",
//     width: "2.7vw",
//     [theme.breakpoints.down("md")]: {
//       width: "2.7vh",
//       height: "2.7vh",
//     },
//     [theme.breakpoints.down("sm")]: {
//       width: "4vh",
//       height: "4vh",
//     },
//   },
//   normalColor: {
//     color: theme.palette.text.secondary,
//   },
//   activeIcon: {
//     color: "white",
//     // "&:hover": {
//     //   color: theme.palette.primary.light,
//     // },
//     // backgroundColor: "red",
//   },
//   name: {
//     // color: theme.palette.text.secondary,
//     fontWeight: 500,
//   },
// }));
// const ListBarItem = (props) => {
//   const classes = useStyles();
//   const data = props.data;
//   const { active } = props;
//   const { icon, name, index, size } = data;
//   const InnerIcon = icon;
//   // console.log("active", active);

//   return (
//     <Grid
//       container
//       justify="space-between"
//       className={clsx(
//         classes.container,
//         active ? classes.activeContainer : null
//       )}
//       alignItems="center"
//       component={Button}
//       onClick={() => props.onClick()}
//     >
//       <Grid item>
// <InnerIcon
//   className={clsx(
//     index < 2 ? classes.halfIcon : classes.icon,
//     active === true ? classes.activeIcon : classes.normalColor
//   )}
//   color={active ? "white" : "black"}
// />
//       </Grid>
//       <Grid item>
//         <Typography
//           variant="body2"
//           className={clsx(
//             classes.name,
//             active === true ? classes.activeIcon : classes.normalColor
//           )}
//         >
//           {name}
//         </Typography>
//       </Grid>
//     </Grid>
//   );
// };
// export default React.memo(ListBarItem);
