import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Divider } from "@material-ui/core";
import SizeModuleData from "../../static/sizeModuleData";
import ListBar from "./index";
import ListBarItem from "./listbarItem";
import { selectSizeModule } from "../../actions/sizeaction";
import { useDispatch, useSelector } from "react-redux";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import GlassModuleData from "../../static/glassModuleData";
import { selectGlassModule } from "../../actions/glassactions";
import clsx from "clsx";
import { ClickAwayListener } from "@material-ui/core";
import { removeModuleActive } from "../../actions/activemodule";
const useStyles = makeStyles((theme) => ({
  icon: {
    height: "100%",
    width: "100%",
  },
  active: {
    borderWidth: 4,
    color: theme.palette.primary.main,
    borderStyle: "solid",
    borderRadius: "100%",
  },
}));
const SizeBar = (props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState();

  React.useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  const dipatch = useDispatch();

  const handleClick = (index) => {
    dipatch(selectGlassModule(index, GlassModuleData[index]));
  };
  const activeItemIndex = useSelector((state) => state.glassModule.index);
  // console.log(activeItemIndex);
  const data = GlassModuleData;
  return (
    <div>
      <ListBar open={open} set={() => setOpen(false)} index={1} nopaper={true}>
        <SpeedDial
          ariaLabel="SpeedDial openIcon example"
          className={classes.speedDial}
          hidden={true}
          open={open}
        >
          {data.map((action, index) => {
            let Icon = action.icon;
            return (
              <SpeedDialAction
                key={action.name}
                icon={
                  <Icon
                    className={clsx(
                      classes.icon,
                      activeItemIndex === index ? classes.active : null
                    )}
                  />
                }
                tooltipTitle={action.name}
                onClick={() => handleClick(index)}
              />
            );
          })}
        </SpeedDial>
      </ListBar>
    </div>
  );
};
export default React.memo(SizeBar);

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";

// // import SizeModuleData from "../../static/sizeModuleData";

// import { useDispatch, useSelector } from "react-redux";
// import DialBarItem from "./dialbaritem";
// import SpeedDial from "@material-ui/lab/SpeedDial";
// import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
// import GlassModuleData from "../../static/glassModuleData";
// import { selectGlassModule } from "../../actions/glassactions";
// import clsx from "clsx";
// import { ClickAwayListener } from "@material-ui/core";
// import { removeModuleActive } from "../../actions/activemodule";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     position: "absolute",
//     // left: "80%",
//     right: "1%",
//     zIndex: 10,
//     height: "90vh",
//     width: 300,
//     marginTop: 185,
//   },
//   icon: {
//     height: "100%",
//     width: "100%",
//   },
//   active: {
//     borderWidth: 4,
//     color: theme.palette.primary.main,
//     borderStyle: "solid",
//     borderRadius: "100%",
//   },
//   speedDial: {
//     // position: "absolute",
//     // bottom: theme.spacing(2),
//     // right: theme.spacing(2),
//   },
//   container: {},
// }));
// const GlassBar = (props) => {
//   const classes = useStyles();

//   const [open, setOpen] = React.useState();

//   React.useEffect(() => {
//     setOpen(props.open);
//   }, [props.open]);

//   const dipatch = useDispatch();
//   //   const data = SizeModuleData;
//   const handleClick = (index) => {
//     dipatch(selectGlassModule(index, GlassModuleData[index]));
//   };
//   const activeItemIndex = useSelector((state) => state.glassModule.index);

//   const handleClose = () => {
//     if (open === true && activeItemIndex) {
//       setOpen(false);
//       dipatch(removeModuleActive());
//     }
//   };

//   // console.log(activeItemIndex);
//   //   const actions = [
//   //     { icon: <FileCopyIcon />, name: "Copy" },
//   //     { icon: <SaveIcon />, name: "Save" },
//   //     { icon: <PrintIcon />, name: "Print" },
//   //     { icon: <ShareIcon />, name: "Share" },
//   //     { icon: <FavoriteIcon />, name: "Like" },
//   //   ];
//   const data = GlassModuleData;

//   return (
//     <div className={classes.root}>
//       <div className={classes.container}>
//         <ClickAwayListener onClickAway={() => handleClose()}>
//           {/* <Button onClick={handleVisibility}>Toggle Speed Dial</Button> */}
//   <SpeedDial
//     ariaLabel="SpeedDial openIcon example"
//     className={classes.speedDial}
//     hidden={true}
//     // icon={<SpeedDialIcon openIcon={<EditIcon />} />}
//     // onClose={handleClose}

//     open={open}
//   >
//     {data.map((action, index) => {
//       let Icon = action.icon;
//       return (
//         <SpeedDialAction
//           key={action.name}
//           icon={
//             <Icon
//               className={clsx(
//                 classes.icon,
//                 activeItemIndex === index ? classes.active : null
//               )}
//             />
//           }
//           tooltipTitle={action.name}
//           onClick={() => handleClick(index)}
//         />
//       );
//     })}
//   </SpeedDial>
//         </ClickAwayListener>
//       </div>
//     </div>
//   );
// };
// export default React.memo(GlassBar);

// // import React from "react";
// // import { makeStyles } from "@material-ui/core/styles";
// // import { Paper, Divider } from "@material-ui/core";
// // import SizeModuleData from "../../static/sizeModuleData";
// // import ListBar from "./index";
// // import ListBarItem from "./listbarItem";
// // // import { selectSizeModule } from "../../actions/sizeaction";
// // import { useDispatch, useSelector } from "react-redux";
// // import DialBarItem from "./dialbaritem";
// // const useStyles = makeStyles((theme) => ({}));
// // const GlassBar = (props) => {
// //   const classes = useStyles();

// //   const [open, setOpen] = React.useState();

// //   React.useEffect(() => {
// //     setOpen(props.open);
// //   }, [props.open]);

// //   const dipatch = useDispatch();
// //   const data = SizeModuleData;
// //   const handleClick = (index) => {
// //     // dipatch(selectSizeModule(index, SizeModuleData[index]));
// //   };
// //   const activeItemIndex = useSelector((state) => state.sizeModule.index);
// //   // console.log(activeItemIndex);

// //   return (
// //     <div>
// //       <ListBar open={open} set={() => setOpen(false)} index={1}>
// //         <DialBarItem />
// //         {/* <Paper elevation={0}>
// //           {data &&
// //             data.map((data, index) => {
// //               return (
// //                 <div key={index}>
// //                   <ListBarItem
// //                     index={index}
// //                     active={activeItemIndex === index ? true : false}
// //                     data={data}
// //                     onClick={() => handleClick(index)}
// //                   />
// //                   <Divider />
// //                 </div>
// //               );
// //             })}
// //         </Paper> */}
// //       </ListBar>
// //     </div>
// //   );
// // };
// // export default React.memo(GlassBar);
