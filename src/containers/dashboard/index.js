import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

import DragContainer from "./DragContainer";

import createImageUrl from "../../functions/createImageUrl";
import getStyleObj from "../../functions/getStyleObj";
import DashSwitch from "../../components/Dashswitch";
import SnackBar from "../../components/Snackbars/index";

const Dashboard = () => {
  let GlassData = useSelector((state) => state.glassModule);

  const wallBg = useSelector((state) => state.wallModule);
  let bgImageType = wallBg.type;

  let wallBackground =
    bgImageType === "color"
      ? wallBg.wallcolor
      : (bgImageType = "image" ? createImageUrl(wallBg.wallcolor) : null);

  const snackActive = useSelector((state) => state.snackModule.active);

  const useStyles = makeStyles((theme) => ({
    root: {
      height: "100%",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      // paddingTop: "15vh",
      // paddingLeft: "3vw",
      // paddingBottom: "10vh",
    },
    contaoiner: {
      height: "100%",

      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: "10vh",
      // paddingLeft: "3vw",
      paddingBottom: "10vh",
    },
    switchContainer: {
      position: "absolute",
      bottom: 80,
      left: 100,
    },
  }));
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={getStyleObj(wallBackground, bgImageType)}
    >
      <div className={classes.contaoiner}>
        <DragContainer />
      </div>
      <div className={classes.switchContainer}>
        <DashSwitch />
      </div>
      {snackActive && <SnackBar />}
    </div>
  );
};
export default Dashboard;

// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import {
//   List,
//   ListItem,
//   ListItemText,
//   ListItemIcon,
//   IconButton,
//   ListItemSecondaryAction,
// } from "@material-ui/core";
// import RootRef from "@material-ui/core/RootRef";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import InboxIcon from "@material-ui/icons/Inbox";
// import EditIcon from "@material-ui/icons/Edit";

// // fake data generator
// const getItems = (count) =>
//   Array.from({ length: count }, (v, k) => k).map((k) => ({
//     id: `item-${k}`,
//     primary: `item ${k}`,
//     secondary: k % 2 === 0 ? `Whatever for ${k}` : undefined,
//   }));

// // a little function to help us with reordering the result
// const reorder = (list, startIndex, endIndex) => {
//   const result = Array.from(list);
//   const [removed] = result.splice(startIndex, 1);
//   result.splice(endIndex, 0, removed);

//   return result;
// };

// const getItemStyle = (isDragging, draggableStyle) => ({
//   // styles we need to apply on draggables
//   ...draggableStyle,

//   ...(isDragging && {
//     background: "rgb(235,235,235)",
//   }),
// });

// const getListStyle = (isDraggingOver) => ({
//   //background: isDraggingOver ? 'lightblue' : 'lightgrey',
// });

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: getItems(10),
//     };
//     this.onDragEnd = this.onDragEnd.bind(this);
//   }

//   onDragEnd(result) {
//     // dropped outside the list
//     if (!result.destination) {
//       return;
//     }

//     const items = reorder(
//       this.state.items,
//       result.source.index,
//       result.destination.index
//     );

//     this.setState({
//       items,
//     });
//   }

//   // Normally you would want to split things out into separate components.
//   // But in this example everything is just done in one place for simplicity
//   render() {
//     return (
//       <DragDropContext onDragEnd={this.onDragEnd}>
//         <Droppable droppableId="droppable">
//           {(provided, snapshot) => (
//             <RootRef rootRef={provided.innerRef}>
//               <List style={getListStyle(snapshot.isDraggingOver)}>
//                 {this.state.items.map((item, index) => (
//                   <Draggable key={item.id} draggableId={item.id} index={index}>
//                     {(provided, snapshot) => (
//                       <ListItem
//                         ContainerComponent="li"
//                         ContainerProps={{ ref: provided.innerRef }}
//                         {...provided.draggableProps}
//                         {...provided.dragHandleProps}
//                         style={getItemStyle(
//                           snapshot.isDragging,
//                           provided.draggableProps.style
//                         )}
//                       >
//                         <ListItemIcon>
//                           <InboxIcon />
//                         </ListItemIcon>
//                         <ListItemText
//                           primary={item.primary}
//                           secondary={item.secondary}
//                         />
//                         <ListItemSecondaryAction>
//                           <IconButton>
//                             <EditIcon />
//                           </IconButton>
//                         </ListItemSecondaryAction>
//                       </ListItem>
//                     )}
//                   </Draggable>
//                 ))}
//                 {provided.placeholder}
//               </List>
//             </RootRef>
//           )}
//         </Droppable>
//       </DragDropContext>
//     );
//   }
// }
// export default App;

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import { Grid, Paper, Box } from "@material-ui/core";
// import { useSelector } from "react-redux";
// import clsx from "clsx";
// import BoxContainer from "./DragContainer";
// import getBackgroundContainerLenght from "../../functions/getBackgroundContainerLenght";
// import SingleBoxLength from "../../functions/SingleBoxLength";
// import createImageUrl from "../../functions/createImageUrl";
// import getStyleObj from "../../functions/getStyleObj";
// import DashSwitch from "../../components/Dashswitch";
// import SnackBar from "../../components/Snackbars/index";
// import dashStyles from "./dashStyle";
// import DraggableCore from "react-draggable";
// const Dashboard = () => {
//   const SizeData = useSelector((state) => state.sizeModule);
//   const { Boxes } = SizeData;
//   let BoxLength = Boxes.length;
//   // let lenght = Boxes.length === 6 ? 4 : 3;
//   // let container
//   let containerLengh = getBackgroundContainerLenght(BoxLength);
//   let lenght = SingleBoxLength(BoxLength);

//   let GlassData = useSelector((state) => state.glassModule);
//   let defaultGlass = GlassData.item;
//   // console.log(defaultGlass, "glass");

//   let defaultBg = "#eee";

//   const wallBg = useSelector((state) => state.wallModule);
//   let bgImageType = wallBg.type;

//   let wallBackground =
//     bgImageType === "color"
//       ? wallBg.wallcolor
//       : (bgImageType = "image" ? createImageUrl(wallBg.wallcolor) : null);

//   const dashvalues = useSelector((state) => state.dashModule);
//   const { led, border } = dashvalues;

//   const snackActive = useSelector((state) => state.snackModule.active);

//   const [sizeVariable, setSizeVariable] = React.useState(400);
//   let boxVariable = sizeVariable / 3;

//   const useStyles = makeStyles((theme) => ({
//     root: {
//       // backgroundColor: "red",
//       height: "100%",
//       // width: "100%",
//       // backgroundColor: "red",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       border: "10px solid red",
//       paddingTop: "15vh",
//       paddingLeft: "3vw",
//       paddingBottom: "10vh",

//       // paddingBottom: "70px",
//     },
//     gridContainer: {
//       // backgroundColor: "blue",
//       maxWidth: sizeVariable,
//     },
//     box: {
//       height: boxVariable,
//       width: boxVariable,
//       border: "1px solid black",
//     },
//   }));
//   const classes = useStyles();
//   const parentRef = React.useRef(null);

//   return (
//     <div className={classes.root} ref={parentRef}>
//       <BoxContainer />
//       <div></div>
//       {/* <DraggableCore
//         // offsetParent={parentRef.current}
//       re
//         // bounds="parent"
//         // grid={[100, 100]}
//         // scale={2}
//       >
//         <div>I can now be moved around!</div>
//       </DraggableCore> */}
//     </div>
//   );
// };
// export default Dashboard;

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import { Grid, Paper } from "@material-ui/core";
// import { useSelector } from "react-redux";
// import clsx from "clsx";
// import BoxContainer from "../../components/BoxContainer";
// import getBackgroundContainerLenght from "../../functions/getBackgroundContainerLenght";
// import SingleBoxLength from "../../functions/SingleBoxLength";
// import createImageUrl from "../../functions/createImageUrl";
// import getStyleObj from "../../functions/getStyleObj";
// import DashSwitch from "../../components/Dashswitch";
// import SnackBar from "../../components/Snackbars/index";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     // backgroundColor: "red",
//     height: "100%",
//     // backgroundColor: "red",
//   },
//   box: {
//     border: "1px solid red",
//   },
//   dynamic22: {
//     height: "50%",
//   },
//   dynamic24: {
//     height: "50%",
//   },
// switchContainer: {
//   position: "absolute",
//   bottom: 80,
//   left: 100,
// },
// }));
// const Dashboard = () => {
//   const classes = useStyles();
// const SizeData = useSelector((state) => state.sizeModule);
// const { Boxes } = SizeData;
// let BoxLength = Boxes.length;
//   // let lenght = Boxes.length === 6 ? 4 : 3;
//   // let container
//   let containerLengh = getBackgroundContainerLenght(BoxLength);
//   let lenght = SingleBoxLength(BoxLength);

// let GlassData = useSelector((state) => state.glassModule);
// let defaultGlass = GlassData.item;
//   // console.log(defaultGlass, "glass");

// let defaultBg = "#eee";

// const wallBg = useSelector((state) => state.wallModule);
// let bgImageType = wallBg.type;

// let wallBackground =
//   bgImageType === "color"
//     ? wallBg.wallcolor
//     : (bgImageType = "image" ? createImageUrl(wallBg.wallcolor) : null);

// const dashvalues = useSelector((state) => state.dashModule);
// const { led, border } = dashvalues;

//   const snackActive = useSelector((state) => state.snackModule.active);

//   const [sizeVariable, setSizeVariable] = React.useState("50vh");
//   return (
//     <Grid
//       container
//       className={classes.root}
//       alignItems="center"
//       justify="center"
//       style={getStyleObj(wallBackground, bgImageType)}
//     >
//       <Grid item lg={containerLengh}>
//         <Grid
//           container
//           alignItems="center"
//           justify="center"
//           style={{
//             background: defaultGlass === null ? defaultBg : defaultGlass.bg,
//             // padding: BoxLength > 0 ? "10vh" : "0vh",
//             height: sizeVariable,
//           }}
//           component={Paper}
//           elevation={4}
//         >
// {Boxes.map((data, index) => {
//   return (
//     <Grid
//       key={index}
//       item
//       lg={lenght}
//       className={clsx(
//         border === true ? classes.box : null,
//         BoxLength === 1 || BoxLength === 2 || BoxLength === 6
//           ? classes.dynamic24
//           : classes.dynamic22
//       )}
//     >
//       {data === 1 ? (
//         <div></div>
//       ) : (
//         <BoxContainer data={data} active={led} />
//       )}
//     </Grid>
//   );
// })}
//         </Grid>
//       </Grid>
//       <div className={classes.switchContainer}>
//         <DashSwitch />
//       </div>
//       {snackActive && <SnackBar />}
//       {/* {snackActive && <SnackBar />} */}
//     </Grid>
//   );
// };
// export default Dashboard;
