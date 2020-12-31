import React, { useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  Button,
  IconButton,
  Tooltip,
  Hidden,
  Modal,
  CircularProgress,
} from "@material-ui/core";
import DragIcon from "@material-ui/icons/ZoomOutMapOutlined";
import GridContainer from "./GridContainer";
import { useSelector, useDispatch } from "react-redux";

import { ShowSnackBar } from "../../actions/snackActions";
import { DropTarget } from "react-dnd";
import update from "immutability-helper";
import ItemTypes from "./ItemTypes";
import { removeFromBOx, setPreviewImage } from "../../actions/sizeaction";
import * as htmlToImage from "html-to-image";
import {
  toPng,
  toJpeg,
  toBlob,
  toPixelData,
  toSvg,
  toSvgDataURL,
} from "html-to-image";
import UseMobile from "../../hooks/useIsMobile";
import Dom2pic from "dom2pic";
const useStyles = makeStyles((theme) => ({
  box: {
    // backgroundColor: "red",
  },
  gridContainer: {
    // marginTop: "-25vh",
    padding: "5vh",
    [theme.breakpoints.down("md")]: {
      padding: "5vh",
    },
  },
  resizeBtnCOntainer: {
    width: "100%",

    display: "flex",
    justifyContent: "flex-end",
  },
  resizeBtn: {
    marginTop: "-1.5vh",
    marginRight: "-.7vw",
    color: theme.palette.grey[500],
  },
  ssModal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
const ResizeCOntainer = (props) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const ref = React.useRef(null);
  const { edit, connectDropTarget } = props;
  const classes = useStyles();
  const windowWidth = window.innerWidth;
  let GlassData = useSelector((state) => state.glassModule);
  let defaultGlass = GlassData.item;
  let defaultBg = "#eee";

  const SizeData = useSelector((state) => state.sizeModule);

  const specsOpen = useSelector((state) => state.utilModule.specs);

  const { Boxes, size, width, maxWidth, mobileWidth } = SizeData;
  let BoxLength = Boxes.length;

  const [state, setState] = React.useState();
  const [hideAllBtns, setHideAllBtns] = React.useState(false);

  const [image, setImage] = React.useState();
  const isMobile = UseMobile();
  const getImage = () => {
    console.log("mobile size", state, mobileWidth, size, maxWidth);

    const dom2pic = new Dom2pic({
      root: ref.current,
      backgroundColor: "#e2e2e2",
    });
    console.log("dataurl width", ref.current.clientWidth);
    htmlToImage
      .toSvg(
        ref.current,
        isMobile
          ? {
              // width: 600,
              // height: window.innerWidth,
              // width: window.innerHeight,
              // // pixelRatio: 2,
              // backgroundColor: "red",
              // // pixelRatio: ref.current.clientHeight / ref.current.clientWidth,
              // // height: state ? (state * mobileWidth) / 3 : 0,
              // // height: ref.current.clientHeight,
              // pixelRatio: window.innerWidth / window.innerHeight,
            }
          : {}
      )
      .then(function (dataUrl) {
        console.log("dataurl", state, size, mobileWidth, maxWidth);

        // var img = new Image();
        // img.src = dataUrl;
        setImage(dataUrl);
        console.log("dataUrl", image);
        dispatch(setPreviewImage(dataUrl));
        setHideAllBtns(false);
      })
      .catch(function (error) {
        console.log("dataurl error", error);
        console.error("oops, something went wrong!", error);
      });
  };
  const dispatch = useDispatch();

  const snackactive = useSelector((state) => state.snackModule.active);

  React.useEffect(() => {
    // setGridSize(size);
    windowWidth < 800 ? setState(mobileWidth) : setState(width);
  }, [width, size]);

  const wheelResize = (e) => {
    if (edit === true) {
      let variable = state + e.deltaY / 4;
      if (variable < windowWidth / 100) {
        if (snackactive !== true) {
          dispatch(ShowSnackBar(true, "error", "Min Size"));
        }
      }
      if (variable > maxWidth) {
        if (snackactive !== true) {
          dispatch(ShowSnackBar(true, "error", "Max Size"));
        }
      }
      if (variable < maxWidth && variable > windowWidth / 100) {
        setState(variable);
      }
    }
  };
  const handleScreenShot = () => {
    setHideAllBtns(true);
    setModalOpen(true);
    getImage();
    setTimeout(() => setModalOpen(false), 2000);
  };
  //fintBox

  connectDropTarget(ref);
  const dashvalues = useSelector((state) => state.dashModule);
  const { led } = dashvalues;

  //check

  React.useEffect(() => {
    if (specsOpen) {
      handleScreenShot();
    }
  }, [specsOpen]);
  return (
    <div>
      <Modal open={modalOpen} className={classes.ssModal}>
        <>
          <CircularProgress color="primary" size={50} />
        </>
      </Modal>

      {/* <Button onClick={() => handleScreenShot()}>Take ss</Button> */}
      <Grid
        container
        ref={ref}
        className={classes.gridContainer}
        alignItems="center"
        justify="center"
        style={{
          maxWidth: state ? state * size + 100 : 0,

          background: defaultGlass === null ? defaultBg : defaultGlass.bg,
          display: BoxLength === 0 ? "none" : "",
        }}
        component={Paper}
        onWheel={(e, d) => wheelResize(e)}
      >
        <GridContainer hideAllBtns={hideAllBtns} led={led} sizes={state} />
        {/* {cards.length > 0 &&
        cards.map((card, index) => {
          return (
          
            <GridContainer
              key={index}
              id={`${card.id}`}
              data={card}
              led={led}
              sizes={state}
              moveCard={moveCard}
              findCard={findCard}
              removeCard={removeCard}
            />
          );
        })} */}
      </Grid>
      {!hideAllBtns && (
        <Hidden smDown>
          <div className={classes.resizeBtnCOntainer}>
            {edit && (
              <div draggable>
                <Tooltip title="Scroll on The Board to Resize">
                  <DragIcon className={classes.resizeBtn} />
                </Tooltip>
              </div>
            )}
          </div>
        </Hidden>
      )}
    </div>
  );
};
export default DropTarget(ItemTypes.CARD, {}, (connect) => ({
  connectDropTarget: connect.dropTarget(),
}))(ResizeCOntainer);

//working but mobile pdf problem

// import React, { useCallback } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   Paper,
//   Grid,
//   Button,
//   IconButton,
//   Tooltip,
//   Hidden,
//   Modal,
//   CircularProgress,
// } from "@material-ui/core";
// import DragIcon from "@material-ui/icons/ZoomOutMapOutlined";
// import GridContainer from "./GridContainer";
// import { useSelector, useDispatch } from "react-redux";

// import { ShowSnackBar } from "../../actions/snackActions";
// import { DropTarget } from "react-dnd";
// import update from "immutability-helper";
// import ItemTypes from "./ItemTypes";
// import { removeFromBOx, setPreviewImage } from "../../actions/sizeaction";
// import * as htmlToImage from "html-to-image";
// import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
// import UseMobile from "../../hooks/useIsMobile";
// const useStyles = makeStyles((theme) => ({
//   box: {
//     // backgroundColor: "red",
//   },
//   gridContainer: {
//     // marginTop: "-25vh",
//     padding: "5vh",
//     [theme.breakpoints.down("md")]: {
//       padding: "5vh",
//     },
//   },
//   resizeBtnCOntainer: {
//     width: "100%",

//     display: "flex",
//     justifyContent: "flex-end",
//   },
//   resizeBtn: {
//     marginTop: "-1.5vh",
//     marginRight: "-.7vw",
//     color: theme.palette.grey[500],
//   },
//   ssModal: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// }));
// const ResizeCOntainer = (props) => {
//   const [modalOpen, setModalOpen] = React.useState(false);
//   const ref = React.useRef(null);
//   const { edit, connectDropTarget } = props;
//   const classes = useStyles();
//   const windowWidth = window.innerWidth;
//   let GlassData = useSelector((state) => state.glassModule);
//   let defaultGlass = GlassData.item;
//   let defaultBg = "#eee";

//   const SizeData = useSelector((state) => state.sizeModule);

//   const specsOpen = useSelector((state) => state.utilModule.specs);

//   const { Boxes, size, width, maxWidth, mobileWidth } = SizeData;
//   let BoxLength = Boxes.length;

//   const [state, setState] = React.useState();
//   const [hideAllBtns, setHideAllBtns] = React.useState(false);

//   const [image, setImage] = React.useState();
//   const isMobile = UseMobile();
//   const getImage = () => {
//     console.log("mobile size", state, mobileWidth, size, maxWidth);
//     htmlToImage
//       .toPng(
//         ref.current,
//         isMobile
//           ? {
//               width: 600,
//               // height: state ? (state * mobileWidth) / 3 : 0,
//               // height: ref.current.clientHeight,
//               // pixelRatio: 1,
//             }
//           : {}
//       )
//       .then(function (dataUrl) {
//         // var img = new Image();
//         // img.src = dataUrl;
//         setImage(dataUrl);
//         dispatch(setPreviewImage(dataUrl));
//         setHideAllBtns(false);
//       })
//       .catch(function (error) {
//         console.error("oops, something went wrong!", error);
//       });
//   };
//   const dispatch = useDispatch();

//   const snackactive = useSelector((state) => state.snackModule.active);

//   React.useEffect(() => {
//     // setGridSize(size);
//     windowWidth < 800 ? setState(mobileWidth) : setState(width);
//   }, [width, size]);

//   const wheelResize = (e) => {
//     if (edit === true) {
//       let variable = state + e.deltaY / 4;
//       if (variable < windowWidth / 100) {
//         if (snackactive !== true) {
//           dispatch(ShowSnackBar(true, "error", "Min Size"));
//         }
//       }
//       if (variable > maxWidth) {
//         if (snackactive !== true) {
//           dispatch(ShowSnackBar(true, "error", "Max Size"));
//         }
//       }
//       if (variable < maxWidth && variable > windowWidth / 100) {
//         setState(variable);
//       }
//     }
//   };
//   const handleScreenShot = () => {
//     setHideAllBtns(true);
//     setModalOpen(true);
//     getImage();
//     setTimeout(() => setModalOpen(false), 2000);
//   };
//   //fintBox

//   connectDropTarget(ref);
//   const dashvalues = useSelector((state) => state.dashModule);
//   const { led } = dashvalues;

//   //check

//   React.useEffect(() => {
//     if (specsOpen) {
//       handleScreenShot();
//     }
//   }, [specsOpen]);
//   return (
//     <div>
//       <Modal open={modalOpen} className={classes.ssModal}>
//         <>
//           <CircularProgress color="primary" size={50} />
//         </>
//       </Modal>
//       {/* <Button onClick={() => handleScreenShot()}>Take ss</Button> */}
//       <Grid
//         container
//         ref={ref}
//         className={classes.gridContainer}
//         alignItems="center"
//         justify="center"
//         style={{
//           maxWidth: state ? state * size + 100 : 0,

//           background: defaultGlass === null ? defaultBg : defaultGlass.bg,
//           display: BoxLength === 0 ? "none" : "",
//         }}
//         component={Paper}
//         onWheel={(e, d) => wheelResize(e)}
//       >
//         <GridContainer hideAllBtns={hideAllBtns} led={led} sizes={state} />
//         {/* {cards.length > 0 &&
//         cards.map((card, index) => {
//           return (

//             <GridContainer
//               key={index}
//               id={`${card.id}`}
//               data={card}
//               led={led}
//               sizes={state}
//               moveCard={moveCard}
//               findCard={findCard}
//               removeCard={removeCard}
//             />
//           );
//         })} */}
//       </Grid>
//       {!hideAllBtns && (
//         <Hidden smDown>
//           <div className={classes.resizeBtnCOntainer}>
//             {edit && (
//               <div draggable>
//                 <Tooltip title="Scroll on The Board to Resize">
//                   <DragIcon className={classes.resizeBtn} />
//                 </Tooltip>
//               </div>
//             )}
//           </div>
//         </Hidden>
//       )}
//     </div>
//   );
// };
// export default DropTarget(ItemTypes.CARD, {}, (connect) => ({
//   connectDropTarget: connect.dropTarget(),
// }))(ResizeCOntainer);

//working

// import React, { useCallback } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   Paper,
//   Grid,
//   Button,
//   IconButton,
//   Tooltip,
//   Hidden,
// } from "@material-ui/core";
// import DragIcon from "@material-ui/icons/ZoomOutMapOutlined";
// import GridContainer from "./GridContainer";
// import { useSelector, useDispatch } from "react-redux";

// import { ShowSnackBar } from "../../actions/snackActions";
// import { DropTarget } from "react-dnd";
// import update from "immutability-helper";
// import ItemTypes from "./ItemTypes";
// import { removeFromBOx } from "../../actions/sizeaction";
// const useStyles = makeStyles((theme) => ({
//   box: {
//     // backgroundColor: "red",
//   },
//   gridContainer: {
//     // marginTop: "-25vh",
//   },
//   resizeBtnCOntainer: {
//     width: "100%",

//     display: "flex",
//     justifyContent: "flex-end",
//   },
//   resizeBtn: {
//     marginTop: "-1.5vh",
//     marginRight: "-.7vw",
//     color: theme.palette.grey[500],
//   },
// }));
// const ResizeCOntainer = (props) => {
//   const ref = React.useRef(null);
//   const { edit, connectDropTarget } = props;
//   const classes = useStyles();
//   const windowWidth = window.innerWidth;
//   let GlassData = useSelector((state) => state.glassModule);
//   let defaultGlass = GlassData.item;
//   let defaultBg = "#eee";

//   const SizeData = useSelector((state) => state.sizeModule);
//   const { Boxes, size, width, maxWidth, mobileWidth } = SizeData;
//   let BoxLength = Boxes.length;

//   const [state, setState] = React.useState();
//   const dispatch = useDispatch();

//   const snackactive = useSelector((state) => state.snackModule.active);

//   React.useEffect(() => {
//     // setGridSize(size);
//     windowWidth < 800 ? setState(mobileWidth) : setState(width);
//   }, [width, size]);

//   const wheelResize = (e) => {
//     if (edit === true) {
//       let variable = state + e.deltaY / 4;
//       if (variable < maxWidth) {
//         setState(variable);
//       }
//       if (variable > maxWidth) {
//         if (snackactive !== true) {
//           dispatch(ShowSnackBar(true, "error", "Max Size"));
//         }
//       }
//     }
//   };

//   const [cards, setCards] = React.useState([]);
//   React.useEffect(() => {
//     setCards(Boxes);
//     console.log("Boxes effect", Boxes);
//   }, [SizeData]);

//   //fintBox

//   const moveCard = useCallback(
//     (id, atIndex) => {
//       const { card, index } = findCard(id);
//       console.log("moveCard", card, index);
//       setCards(
//         update(cards, {
//           $splice: [
//             [index, 1],
//             [atIndex, 0, card],
//           ],
//         })
//       );
//     },
//     [cards]
//   );

//   const findCard = useCallback(
//     (id) => {
//       const card = cards.filter((c) => `${c.id}` === id)[0];

//       return {
//         card,
//         index: cards.indexOf(card),
//       };
//     },
//     [cards]
//   );

//   const removeCard = useCallback(
//     (id) => {
//       const { card, index } = findCard(id);
//       dispatch(removeFromBOx(index));
//       let newCards = cards;
//       newCards[index] = 1;
//       setCards(newCards);
//     },
//     [cards]
//   );
//   connectDropTarget(ref);
//   const dashvalues = useSelector((state) => state.dashModule);
//   const { led } = dashvalues;
//   return (
//     <div>
//       <Grid
//         container
//         className={classes.gridContainer}
//         alignItems="center"
//         justify="center"
//         style={{
//           maxWidth: state ? state * size : 0,

//           background: defaultGlass === null ? defaultBg : defaultGlass.bg,
//           display: BoxLength === 0 ? "none" : "",
//         }}
//         component={Paper}
//         onWheel={(e, d) => wheelResize(e)}
//         ref={ref}
//       >
// {cards.length > 0 &&
//   cards.map((card, index) => {
//     return (
//       // <Card
//       //   key={card.index}
//       //   id={`${card.index}`}
//       //   text={card.name}
//       //   moveCard={moveCard}
//       //   findCard={findCard}
//       // />
//       <GridContainer
//         key={index}
//         id={`${card.id}`}
//         data={card}
//         led={led}
//         sizes={state}
//         moveCard={moveCard}
//         findCard={findCard}
//         removeCard={removeCard}
//       />
//     );
//   })}
//       </Grid>
//       <Hidden smDown>
//         <div className={classes.resizeBtnCOntainer}>
//           {edit && (
//             <div draggable>
//               <Tooltip title="Scroll on The Board to Resize">
//                 <DragIcon className={classes.resizeBtn} />
//               </Tooltip>
//             </div>
//           )}
//         </div>
//       </Hidden>
//     </div>
//   );
// };
// export default DropTarget(ItemTypes.CARD, {}, (connect) => ({
//   connectDropTarget: connect.dropTarget(),
// }))(ResizeCOntainer);

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import reorder from "../../functions/reorderBoxes";
// import { useSelector, Provider } from "react-redux";
// const useStyles = makeStyles((theme) => ({}));
// const ResizeCOntainer = () => {
//   const classes = useStyles();

//   const Boxes = useSelector((state) => state.sizeModule.Boxes);

//   const grid = 8;
//   const getItemStyle = (isDragging, draggableStyle) => ({
//     // some basic styles to make the items look a bit nicer
//     // userSelect: "none",

//     margin: `0 ${grid}px 0 0`,

//     // change background colour if dragging

//     // styles we need to apply on draggables
//     ...draggableStyle,
//     padding: grid * 2,
//     background: isDragging ? "yellow" : "grey",
//   });

//   const getListStyle = (isDraggingOver) => ({
//     background: isDraggingOver ? "lightblue" : "lightgrey",
//     display: "flex",
//     padding: grid,
//     overflow: "auto",
//   });

//   const [items, setItems] = React.useState(Boxes);

//   function onDragEnd(result) {
//     // dropped outside the list
//     console.log(result, "drag end res");
//     if (!result.destination) {
//       return;
//     }

//     const newArray = reorder(
//       items,
//       result.source.index,
//       result.destination.index
//     );

//     setItems(newArray);
//   }
//   return (
//     <div>
//       <DragDropContext onDragEnd={onDragEnd}>
//         <Droppable droppableId="droppable" direction="horizontal">
//           {(provided, snapshot) => {
//             return (
//               <div
//                 ref={provided.innerRef}
//                 style={getListStyle(snapshot.isDraggingOver)}
//                 //                 {...provided.droppableProps}
//               >
//                 {Boxes.map((item, index) => {
//                   return (
//                     <Draggable
//                       key={item.name}
//                       draggableId={item.name}
//                       index={index}
//                     >
//                       {(provided, snapshot) => (
//                         <div
//                           ref={provided.innerRef}
//                           {...provided.draggableProps}
//                           {...provided.dragHandleProps}
//                           style={{
//                             height: "10px",
//                             userSelect: "none",
//                             backgroundColor: snapshot.isDragging
//                               ? "red"
//                               : "green",
//                             padding: "50px",
//                             ...provided.draggableProps.style,
//                           }}
//                         >
//                           {item.name}
//                           {console.log(item, "item")}
//                         </div>
//                       )}
//                     </Draggable>
//                   );
//                 })}
//               </div>
//             );
//           }}
//         </Droppable>
//       </DragDropContext>
//     </div>
//   );
// };
// export default ResizeCOntainer;

// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// // fake data generator
// const getItems = (count) =>
//   Array.from({ length: count }, (v, k) => k).map((k) => ({
//     id: `item-${k}`,
//     content: `item ${k}`,
//   }));

// // a little function to help us with reordering the result
// const reorder = (list, startIndex, endIndex) => {
//   const result = Array.from(list);
//   const [removed] = result.splice(startIndex, 1);
//   result.splice(endIndex, 0, removed);

//   return result;
// };

// const grid = 8;

// const getItemStyle = (isDragging, draggableStyle) => ({
//   // some basic styles to make the items look a bit nicer
//   // userSelect: "none",

//   margin: `0 ${grid}px 0 0`,

//   // change background colour if dragging

//   // styles we need to apply on draggables
//   ...draggableStyle,
//   padding: grid * 2,
//   background: isDragging ? "yellow" : "grey",
// });

// const getListStyle = (isDraggingOver) => ({
//   background: isDraggingOver ? "lightblue" : "lightgrey",
//   display: "flex",
//   padding: grid,
//   overflow: "auto",
// });

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: getItems(6),
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
//       <div>
//         <DragDropContext onDragEnd={this.onDragEnd}>
//           <Droppable droppableId="droppable" direction="horizontal">
//             {(provided, snapshot) => (
//               <div
//                 ref={provided.innerRef}
//                 style={getListStyle(snapshot.isDraggingOver)}
//                 {...provided.droppableProps}
//               >
//                 {this.state.items.map((item, index) => (
//                   <Draggable key={item.id} draggableId={item.id} index={index}>
//                     {(provided, snapshot) => (
//                       <div
//                         ref={provided.innerRef}
//                         {...provided.draggableProps}
//                         {...provided.dragHandleProps}
//                         style={{
//                           height: "10px",
//                           userSelect: "none",
//                           backgroundColor: snapshot.isDragging
//                             ? "red"
//                             : "green",
//                           padding: "50px",
//                           ...provided.draggableProps.style,
//                         }}
//                       >
//                         {item.content}
//                       </div>
//                     )}
//                   </Draggable>
//                 ))}
//                 {provided.placeholder}
//               </div>
//             )}
//           </Droppable>
//         </DragDropContext>
//       </div>
//     );
//   }
// }
// export default App;

// working resize old

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import { Paper, Grid, Button, IconButton } from "@material-ui/core";
// import DragIcon from "@material-ui/icons/ZoomOutMapOutlined";
// import GridContainer from "./GridContainer";
// import { useSelector, useDispatch } from "react-redux";

// import { ShowSnackBar } from "../../actions/snackActions";
// const useStyles = makeStyles((theme) => ({
//   box: {
//     backgroundColor: "red",
//   },
//   gridContainer: {
//     // marginTop: "-25vh",
//   },
//   resizeBtnCOntainer: {
//     width: "100%",

//     display: "flex",
//     justifyContent: "flex-end",
//   },
//   resizeBtn: {
//     marginTop: "-1.5vh",
//     marginRight: "-.7vw",
//     color: theme.palette.grey[500],
//   },
// }));
// const ResizeCOntainer = (props) => {
//   const { edit } = props;
//   const classes = useStyles();

//   let GlassData = useSelector((state) => state.glassModule);
//   let defaultGlass = GlassData.item;
//   let defaultBg = "#eee";

//   const SizeData = useSelector((state) => state.sizeModule);
//   const { Boxes, size, width, maxWidth } = SizeData;
//   // console.log(SizeData, "boxes");
//   let BoxLength = Boxes.length;

//   const [state, setState] = React.useState();
//   const dispatch = useDispatch();

//   // let { size, width } = data;
//   // console.log(BoxLength, "bl");
//   // const [gridSize, setGridSize] = React.useState(size);
//   // console.log(gridSize);

//   const snackactive = useSelector((state) => state.snackModule.active);
//   console.log(maxWidth, "mwidth");
//   React.useEffect(() => {
//     // setGridSize(size);
//     setState(width);
//   }, [width, size]);

//   const wheelResize = (e) => {
//     if (edit === true) {
//       let variable = state + e.deltaY / 4;
//       if (variable < maxWidth) {
//         setState(variable);
//       }
//       if (variable > maxWidth) {
//         if (snackactive !== true) {
//           dispatch(ShowSnackBar(true, "error", "Max Width Reached"));
//         }
//       }
//     }
//   };

//   return (
//     <div>
//       <Grid
//         container
//         className={classes.gridContainer}
//         alignItems="center"
//         justify="center"
//         style={{
//           maxWidth: state * size,

//           background: defaultGlass === null ? defaultBg : defaultGlass.bg,
//           display: BoxLength === 0 ? "none" : "",
//         }}
//         component={Paper}
//         onWheel={(e, d) => wheelResize(e)}
//       >
//         <GridContainer sizes={state} Boxes={Boxes} />
//       </Grid>
//       <div className={classes.resizeBtnCOntainer}>
//         {edit && <DragIcon className={classes.resizeBtn} />}
//       </div>
//     </div>
//   );
// };
// export default ResizeCOntainer;

//working but not good with image generate
// import React, { useCallback } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   Paper,
//   Grid,
//   Button,
//   IconButton,
//   Tooltip,
//   Hidden,
//   Modal,
//   CircularProgress,
// } from "@material-ui/core";
// import DragIcon from "@material-ui/icons/ZoomOutMapOutlined";
// import GridContainer from "./GridContainer";
// import { useSelector, useDispatch } from "react-redux";

// import { ShowSnackBar } from "../../actions/snackActions";
// import { DropTarget } from "react-dnd";
// import update from "immutability-helper";
// import ItemTypes from "./ItemTypes";
// import { removeFromBOx, setPreviewImage } from "../../actions/sizeaction";
// import * as htmlToImage from "html-to-image";
// import {
//   toPng,
//   toJpeg,
//   toBlob,
//   toPixelData,
//   toSvg,
//   toSvgDataURL,
// } from "html-to-image";
// import UseMobile from "../../hooks/useIsMobile";

// const useStyles = makeStyles((theme) => ({
//   box: {
//     // backgroundColor: "red",
//   },
//   gridContainer: {
//     // marginTop: "-25vh",
//     padding: "5vh",
//     [theme.breakpoints.down("md")]: {
//       padding: "5vh",
//     },
//   },
//   resizeBtnCOntainer: {
//     width: "100%",

//     display: "flex",
//     justifyContent: "flex-end",
//   },
//   resizeBtn: {
//     marginTop: "-1.5vh",
//     marginRight: "-.7vw",
//     color: theme.palette.grey[500],
//   },
//   ssModal: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// }));
// const ResizeCOntainer = (props) => {
//   const [modalOpen, setModalOpen] = React.useState(false);
//   const ref = React.useRef(null);
//   const { edit, connectDropTarget } = props;
//   const classes = useStyles();
//   const windowWidth = window.innerWidth;
//   let GlassData = useSelector((state) => state.glassModule);
//   let defaultGlass = GlassData.item;
//   let defaultBg = "#eee";

//   const SizeData = useSelector((state) => state.sizeModule);

//   const specsOpen = useSelector((state) => state.utilModule.specs);

//   const { Boxes, size, width, maxWidth, mobileWidth } = SizeData;
//   let BoxLength = Boxes.length;

//   const [state, setState] = React.useState();
//   const [hideAllBtns, setHideAllBtns] = React.useState(false);

//   const [image, setImage] = React.useState();
//   const isMobile = UseMobile();
//   const getImage = () => {
//     console.log("mobile size", state, mobileWidth, size, maxWidth);
//     htmlToImage
//       .toSvg(
//         ref.current,
//         isMobile
//           ? {
//               // width: ref.current.clientWidth * 2,
//               // // height: state ? (state * mobileWidth) / 3 : 0,
//               // height: ref.current.clientHeight * 2,
//               // pixelRatio: 2,
//             }
//           : {}
//       )
//       .then(function (dataUrl) {
//         // var img = new Image();
//         // img.src = dataUrl;
//         setImage(dataUrl);
//         dispatch(setPreviewImage(dataUrl));
//         setHideAllBtns(false);
//       })
//       .catch(function (error) {
//         console.error("oops, something went wrong!", error);
//       });
//   };
//   const dispatch = useDispatch();

//   const snackactive = useSelector((state) => state.snackModule.active);

//   React.useEffect(() => {
//     // setGridSize(size);
//     windowWidth < 800 ? setState(mobileWidth) : setState(width);
//   }, [width, size]);

//   const wheelResize = (e) => {
//     if (edit === true) {
//       let variable = state + e.deltaY / 4;
//       if (variable < windowWidth / 100) {
//         if (snackactive !== true) {
//           dispatch(ShowSnackBar(true, "error", "Min Size"));
//         }
//       }
//       if (variable > maxWidth) {
//         if (snackactive !== true) {
//           dispatch(ShowSnackBar(true, "error", "Max Size"));
//         }
//       }
//       if (variable < maxWidth && variable > windowWidth / 100) {
//         setState(variable);
//       }
//     }
//   };
//   const handleScreenShot = () => {
//     setHideAllBtns(true);
//     setModalOpen(true);
//     getImage();
//     setTimeout(() => setModalOpen(false), 2000);
//   };
//   //fintBox

//   connectDropTarget(ref);
//   const dashvalues = useSelector((state) => state.dashModule);
//   const { led } = dashvalues;

//   //check

//   React.useEffect(() => {
//     if (specsOpen) {
//       handleScreenShot();
//     }
//   }, [specsOpen]);
//   return (
//     <div>
//       <Modal open={modalOpen} className={classes.ssModal}>
//         <>
//           <CircularProgress color="primary" size={50} />
//         </>
//       </Modal>
//       {/* <Button onClick={() => handleScreenShot()}>Take ss</Button> */}
//       <Grid
//         container
//         ref={ref}
//         className={classes.gridContainer}
//         alignItems="center"
//         justify="center"
//         style={{
//           maxWidth: state ? state * size + 100 : 0,

//           background: defaultGlass === null ? defaultBg : defaultGlass.bg,
//           display: BoxLength === 0 ? "none" : "",
//         }}
//         component={Paper}
//         onWheel={(e, d) => wheelResize(e)}
//       >
//         <GridContainer hideAllBtns={hideAllBtns} led={led} sizes={state} />
//         {/* {cards.length > 0 &&
//         cards.map((card, index) => {
//           return (

//             <GridContainer
//               key={index}
//               id={`${card.id}`}
//               data={card}
//               led={led}
//               sizes={state}
//               moveCard={moveCard}
//               findCard={findCard}
//               removeCard={removeCard}
//             />
//           );
//         })} */}
//       </Grid>
//       {!hideAllBtns && (
//         <Hidden smDown>
//           <div className={classes.resizeBtnCOntainer}>
//             {edit && (
//               <div draggable>
//                 <Tooltip title="Scroll on The Board to Resize">
//                   <DragIcon className={classes.resizeBtn} />
//                 </Tooltip>
//               </div>
//             )}
//           </div>
//         </Hidden>
//       )}
//     </div>
//   );
// };
// export default DropTarget(ItemTypes.CARD, {}, (connect) => ({
//   connectDropTarget: connect.dropTarget(),
// }))(ResizeCOntainer);

// //working but mobile pdf problem

// // import React, { useCallback } from "react";
// // import { makeStyles } from "@material-ui/core/styles";
// // import {
// //   Paper,
// //   Grid,
// //   Button,
// //   IconButton,
// //   Tooltip,
// //   Hidden,
// //   Modal,
// //   CircularProgress,
// // } from "@material-ui/core";
// // import DragIcon from "@material-ui/icons/ZoomOutMapOutlined";
// // import GridContainer from "./GridContainer";
// // import { useSelector, useDispatch } from "react-redux";

// // import { ShowSnackBar } from "../../actions/snackActions";
// // import { DropTarget } from "react-dnd";
// // import update from "immutability-helper";
// // import ItemTypes from "./ItemTypes";
// // import { removeFromBOx, setPreviewImage } from "../../actions/sizeaction";
// // import * as htmlToImage from "html-to-image";
// // import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
// // import UseMobile from "../../hooks/useIsMobile";
// // const useStyles = makeStyles((theme) => ({
// //   box: {
// //     // backgroundColor: "red",
// //   },
// //   gridContainer: {
// //     // marginTop: "-25vh",
// //     padding: "5vh",
// //     [theme.breakpoints.down("md")]: {
// //       padding: "5vh",
// //     },
// //   },
// //   resizeBtnCOntainer: {
// //     width: "100%",

// //     display: "flex",
// //     justifyContent: "flex-end",
// //   },
// //   resizeBtn: {
// //     marginTop: "-1.5vh",
// //     marginRight: "-.7vw",
// //     color: theme.palette.grey[500],
// //   },
// //   ssModal: {
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
// // }));
// // const ResizeCOntainer = (props) => {
// //   const [modalOpen, setModalOpen] = React.useState(false);
// //   const ref = React.useRef(null);
// //   const { edit, connectDropTarget } = props;
// //   const classes = useStyles();
// //   const windowWidth = window.innerWidth;
// //   let GlassData = useSelector((state) => state.glassModule);
// //   let defaultGlass = GlassData.item;
// //   let defaultBg = "#eee";

// //   const SizeData = useSelector((state) => state.sizeModule);

// //   const specsOpen = useSelector((state) => state.utilModule.specs);

// //   const { Boxes, size, width, maxWidth, mobileWidth } = SizeData;
// //   let BoxLength = Boxes.length;

// //   const [state, setState] = React.useState();
// //   const [hideAllBtns, setHideAllBtns] = React.useState(false);

// //   const [image, setImage] = React.useState();
// //   const isMobile = UseMobile();
// //   const getImage = () => {
// //     console.log("mobile size", state, mobileWidth, size, maxWidth);
// //     htmlToImage
// //       .toPng(
// //         ref.current,
// //         isMobile
// //           ? {
// //               width: 600,
// //               // height: state ? (state * mobileWidth) / 3 : 0,
// //               // height: ref.current.clientHeight,
// //               // pixelRatio: 1,
// //             }
// //           : {}
// //       )
// //       .then(function (dataUrl) {
// //         // var img = new Image();
// //         // img.src = dataUrl;
// //         setImage(dataUrl);
// //         dispatch(setPreviewImage(dataUrl));
// //         setHideAllBtns(false);
// //       })
// //       .catch(function (error) {
// //         console.error("oops, something went wrong!", error);
// //       });
// //   };
// //   const dispatch = useDispatch();

// //   const snackactive = useSelector((state) => state.snackModule.active);

// //   React.useEffect(() => {
// //     // setGridSize(size);
// //     windowWidth < 800 ? setState(mobileWidth) : setState(width);
// //   }, [width, size]);

// //   const wheelResize = (e) => {
// //     if (edit === true) {
// //       let variable = state + e.deltaY / 4;
// //       if (variable < windowWidth / 100) {
// //         if (snackactive !== true) {
// //           dispatch(ShowSnackBar(true, "error", "Min Size"));
// //         }
// //       }
// //       if (variable > maxWidth) {
// //         if (snackactive !== true) {
// //           dispatch(ShowSnackBar(true, "error", "Max Size"));
// //         }
// //       }
// //       if (variable < maxWidth && variable > windowWidth / 100) {
// //         setState(variable);
// //       }
// //     }
// //   };
// //   const handleScreenShot = () => {
// //     setHideAllBtns(true);
// //     setModalOpen(true);
// //     getImage();
// //     setTimeout(() => setModalOpen(false), 2000);
// //   };
// //   //fintBox

// //   connectDropTarget(ref);
// //   const dashvalues = useSelector((state) => state.dashModule);
// //   const { led } = dashvalues;

// //   //check

// //   React.useEffect(() => {
// //     if (specsOpen) {
// //       handleScreenShot();
// //     }
// //   }, [specsOpen]);
// //   return (
// //     <div>
// //       <Modal open={modalOpen} className={classes.ssModal}>
// //         <>
// //           <CircularProgress color="primary" size={50} />
// //         </>
// //       </Modal>
// //       {/* <Button onClick={() => handleScreenShot()}>Take ss</Button> */}
// //       <Grid
// //         container
// //         ref={ref}
// //         className={classes.gridContainer}
// //         alignItems="center"
// //         justify="center"
// //         style={{
// //           maxWidth: state ? state * size + 100 : 0,

// //           background: defaultGlass === null ? defaultBg : defaultGlass.bg,
// //           display: BoxLength === 0 ? "none" : "",
// //         }}
// //         component={Paper}
// //         onWheel={(e, d) => wheelResize(e)}
// //       >
// //         <GridContainer hideAllBtns={hideAllBtns} led={led} sizes={state} />
// //         {/* {cards.length > 0 &&
// //         cards.map((card, index) => {
// //           return (

// //             <GridContainer
// //               key={index}
// //               id={`${card.id}`}
// //               data={card}
// //               led={led}
// //               sizes={state}
// //               moveCard={moveCard}
// //               findCard={findCard}
// //               removeCard={removeCard}
// //             />
// //           );
// //         })} */}
// //       </Grid>
// //       {!hideAllBtns && (
// //         <Hidden smDown>
// //           <div className={classes.resizeBtnCOntainer}>
// //             {edit && (
// //               <div draggable>
// //                 <Tooltip title="Scroll on The Board to Resize">
// //                   <DragIcon className={classes.resizeBtn} />
// //                 </Tooltip>
// //               </div>
// //             )}
// //           </div>
// //         </Hidden>
// //       )}
// //     </div>
// //   );
// // };
// // export default DropTarget(ItemTypes.CARD, {}, (connect) => ({
// //   connectDropTarget: connect.dropTarget(),
// // }))(ResizeCOntainer);

// //working

// // import React, { useCallback } from "react";
// // import { makeStyles } from "@material-ui/core/styles";
// // import {
// //   Paper,
// //   Grid,
// //   Button,
// //   IconButton,
// //   Tooltip,
// //   Hidden,
// // } from "@material-ui/core";
// // import DragIcon from "@material-ui/icons/ZoomOutMapOutlined";
// // import GridContainer from "./GridContainer";
// // import { useSelector, useDispatch } from "react-redux";

// // import { ShowSnackBar } from "../../actions/snackActions";
// // import { DropTarget } from "react-dnd";
// // import update from "immutability-helper";
// // import ItemTypes from "./ItemTypes";
// // import { removeFromBOx } from "../../actions/sizeaction";
// // const useStyles = makeStyles((theme) => ({
// //   box: {
// //     // backgroundColor: "red",
// //   },
// //   gridContainer: {
// //     // marginTop: "-25vh",
// //   },
// //   resizeBtnCOntainer: {
// //     width: "100%",

// //     display: "flex",
// //     justifyContent: "flex-end",
// //   },
// //   resizeBtn: {
// //     marginTop: "-1.5vh",
// //     marginRight: "-.7vw",
// //     color: theme.palette.grey[500],
// //   },
// // }));
// // const ResizeCOntainer = (props) => {
// //   const ref = React.useRef(null);
// //   const { edit, connectDropTarget } = props;
// //   const classes = useStyles();
// //   const windowWidth = window.innerWidth;
// //   let GlassData = useSelector((state) => state.glassModule);
// //   let defaultGlass = GlassData.item;
// //   let defaultBg = "#eee";

// //   const SizeData = useSelector((state) => state.sizeModule);
// //   const { Boxes, size, width, maxWidth, mobileWidth } = SizeData;
// //   let BoxLength = Boxes.length;

// //   const [state, setState] = React.useState();
// //   const dispatch = useDispatch();

// //   const snackactive = useSelector((state) => state.snackModule.active);

// //   React.useEffect(() => {
// //     // setGridSize(size);
// //     windowWidth < 800 ? setState(mobileWidth) : setState(width);
// //   }, [width, size]);

// //   const wheelResize = (e) => {
// //     if (edit === true) {
// //       let variable = state + e.deltaY / 4;
// //       if (variable < maxWidth) {
// //         setState(variable);
// //       }
// //       if (variable > maxWidth) {
// //         if (snackactive !== true) {
// //           dispatch(ShowSnackBar(true, "error", "Max Size"));
// //         }
// //       }
// //     }
// //   };

// //   const [cards, setCards] = React.useState([]);
// //   React.useEffect(() => {
// //     setCards(Boxes);
// //     console.log("Boxes effect", Boxes);
// //   }, [SizeData]);

// //   //fintBox

// //   const moveCard = useCallback(
// //     (id, atIndex) => {
// //       const { card, index } = findCard(id);
// //       console.log("moveCard", card, index);
// //       setCards(
// //         update(cards, {
// //           $splice: [
// //             [index, 1],
// //             [atIndex, 0, card],
// //           ],
// //         })
// //       );
// //     },
// //     [cards]
// //   );

// //   const findCard = useCallback(
// //     (id) => {
// //       const card = cards.filter((c) => `${c.id}` === id)[0];

// //       return {
// //         card,
// //         index: cards.indexOf(card),
// //       };
// //     },
// //     [cards]
// //   );

// //   const removeCard = useCallback(
// //     (id) => {
// //       const { card, index } = findCard(id);
// //       dispatch(removeFromBOx(index));
// //       let newCards = cards;
// //       newCards[index] = 1;
// //       setCards(newCards);
// //     },
// //     [cards]
// //   );
// //   connectDropTarget(ref);
// //   const dashvalues = useSelector((state) => state.dashModule);
// //   const { led } = dashvalues;
// //   return (
// //     <div>
// //       <Grid
// //         container
// //         className={classes.gridContainer}
// //         alignItems="center"
// //         justify="center"
// //         style={{
// //           maxWidth: state ? state * size : 0,

// //           background: defaultGlass === null ? defaultBg : defaultGlass.bg,
// //           display: BoxLength === 0 ? "none" : "",
// //         }}
// //         component={Paper}
// //         onWheel={(e, d) => wheelResize(e)}
// //         ref={ref}
// //       >
// // {cards.length > 0 &&
// //   cards.map((card, index) => {
// //     return (
// //       // <Card
// //       //   key={card.index}
// //       //   id={`${card.index}`}
// //       //   text={card.name}
// //       //   moveCard={moveCard}
// //       //   findCard={findCard}
// //       // />
// //       <GridContainer
// //         key={index}
// //         id={`${card.id}`}
// //         data={card}
// //         led={led}
// //         sizes={state}
// //         moveCard={moveCard}
// //         findCard={findCard}
// //         removeCard={removeCard}
// //       />
// //     );
// //   })}
// //       </Grid>
// //       <Hidden smDown>
// //         <div className={classes.resizeBtnCOntainer}>
// //           {edit && (
// //             <div draggable>
// //               <Tooltip title="Scroll on The Board to Resize">
// //                 <DragIcon className={classes.resizeBtn} />
// //               </Tooltip>
// //             </div>
// //           )}
// //         </div>
// //       </Hidden>
// //     </div>
// //   );
// // };
// // export default DropTarget(ItemTypes.CARD, {}, (connect) => ({
// //   connectDropTarget: connect.dropTarget(),
// // }))(ResizeCOntainer);

// // import React from "react";
// // import { makeStyles } from "@material-ui/core/styles";
// // import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// // import reorder from "../../functions/reorderBoxes";
// // import { useSelector, Provider } from "react-redux";
// // const useStyles = makeStyles((theme) => ({}));
// // const ResizeCOntainer = () => {
// //   const classes = useStyles();

// //   const Boxes = useSelector((state) => state.sizeModule.Boxes);

// //   const grid = 8;
// //   const getItemStyle = (isDragging, draggableStyle) => ({
// //     // some basic styles to make the items look a bit nicer
// //     // userSelect: "none",

// //     margin: `0 ${grid}px 0 0`,

// //     // change background colour if dragging

// //     // styles we need to apply on draggables
// //     ...draggableStyle,
// //     padding: grid * 2,
// //     background: isDragging ? "yellow" : "grey",
// //   });

// //   const getListStyle = (isDraggingOver) => ({
// //     background: isDraggingOver ? "lightblue" : "lightgrey",
// //     display: "flex",
// //     padding: grid,
// //     overflow: "auto",
// //   });

// //   const [items, setItems] = React.useState(Boxes);

// //   function onDragEnd(result) {
// //     // dropped outside the list
// //     console.log(result, "drag end res");
// //     if (!result.destination) {
// //       return;
// //     }

// //     const newArray = reorder(
// //       items,
// //       result.source.index,
// //       result.destination.index
// //     );

// //     setItems(newArray);
// //   }
// //   return (
// //     <div>
// //       <DragDropContext onDragEnd={onDragEnd}>
// //         <Droppable droppableId="droppable" direction="horizontal">
// //           {(provided, snapshot) => {
// //             return (
// //               <div
// //                 ref={provided.innerRef}
// //                 style={getListStyle(snapshot.isDraggingOver)}
// //                 //                 {...provided.droppableProps}
// //               >
// //                 {Boxes.map((item, index) => {
// //                   return (
// //                     <Draggable
// //                       key={item.name}
// //                       draggableId={item.name}
// //                       index={index}
// //                     >
// //                       {(provided, snapshot) => (
// //                         <div
// //                           ref={provided.innerRef}
// //                           {...provided.draggableProps}
// //                           {...provided.dragHandleProps}
// //                           style={{
// //                             height: "10px",
// //                             userSelect: "none",
// //                             backgroundColor: snapshot.isDragging
// //                               ? "red"
// //                               : "green",
// //                             padding: "50px",
// //                             ...provided.draggableProps.style,
// //                           }}
// //                         >
// //                           {item.name}
// //                           {console.log(item, "item")}
// //                         </div>
// //                       )}
// //                     </Draggable>
// //                   );
// //                 })}
// //               </div>
// //             );
// //           }}
// //         </Droppable>
// //       </DragDropContext>
// //     </div>
// //   );
// // };
// // export default ResizeCOntainer;

// // import React, { Component } from "react";
// // import ReactDOM from "react-dom";
// // import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// // // fake data generator
// // const getItems = (count) =>
// //   Array.from({ length: count }, (v, k) => k).map((k) => ({
// //     id: `item-${k}`,
// //     content: `item ${k}`,
// //   }));

// // // a little function to help us with reordering the result
// // const reorder = (list, startIndex, endIndex) => {
// //   const result = Array.from(list);
// //   const [removed] = result.splice(startIndex, 1);
// //   result.splice(endIndex, 0, removed);

// //   return result;
// // };

// // const grid = 8;

// // const getItemStyle = (isDragging, draggableStyle) => ({
// //   // some basic styles to make the items look a bit nicer
// //   // userSelect: "none",

// //   margin: `0 ${grid}px 0 0`,

// //   // change background colour if dragging

// //   // styles we need to apply on draggables
// //   ...draggableStyle,
// //   padding: grid * 2,
// //   background: isDragging ? "yellow" : "grey",
// // });

// // const getListStyle = (isDraggingOver) => ({
// //   background: isDraggingOver ? "lightblue" : "lightgrey",
// //   display: "flex",
// //   padding: grid,
// //   overflow: "auto",
// // });

// // class App extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       items: getItems(6),
// //     };
// //     this.onDragEnd = this.onDragEnd.bind(this);
// //   }

// //   onDragEnd(result) {
// //     // dropped outside the list
// //     if (!result.destination) {
// //       return;
// //     }

// //     const items = reorder(
// //       this.state.items,
// //       result.source.index,
// //       result.destination.index
// //     );

// //     this.setState({
// //       items,
// //     });
// //   }

// //   // Normally you would want to split things out into separate components.
// //   // But in this example everything is just done in one place for simplicity
// //   render() {
// //     return (
// //       <div>
// //         <DragDropContext onDragEnd={this.onDragEnd}>
// //           <Droppable droppableId="droppable" direction="horizontal">
// //             {(provided, snapshot) => (
// //               <div
// //                 ref={provided.innerRef}
// //                 style={getListStyle(snapshot.isDraggingOver)}
// //                 {...provided.droppableProps}
// //               >
// //                 {this.state.items.map((item, index) => (
// //                   <Draggable key={item.id} draggableId={item.id} index={index}>
// //                     {(provided, snapshot) => (
// //                       <div
// //                         ref={provided.innerRef}
// //                         {...provided.draggableProps}
// //                         {...provided.dragHandleProps}
// //                         style={{
// //                           height: "10px",
// //                           userSelect: "none",
// //                           backgroundColor: snapshot.isDragging
// //                             ? "red"
// //                             : "green",
// //                           padding: "50px",
// //                           ...provided.draggableProps.style,
// //                         }}
// //                       >
// //                         {item.content}
// //                       </div>
// //                     )}
// //                   </Draggable>
// //                 ))}
// //                 {provided.placeholder}
// //               </div>
// //             )}
// //           </Droppable>
// //         </DragDropContext>
// //       </div>
// //     );
// //   }
// // }
// // export default App;

// // working resize old

// // import React from "react";
// // import { makeStyles } from "@material-ui/core/styles";
// // import { Paper, Grid, Button, IconButton } from "@material-ui/core";
// // import DragIcon from "@material-ui/icons/ZoomOutMapOutlined";
// // import GridContainer from "./GridContainer";
// // import { useSelector, useDispatch } from "react-redux";

// // import { ShowSnackBar } from "../../actions/snackActions";
// // const useStyles = makeStyles((theme) => ({
// //   box: {
// //     backgroundColor: "red",
// //   },
// //   gridContainer: {
// //     // marginTop: "-25vh",
// //   },
// //   resizeBtnCOntainer: {
// //     width: "100%",

// //     display: "flex",
// //     justifyContent: "flex-end",
// //   },
// //   resizeBtn: {
// //     marginTop: "-1.5vh",
// //     marginRight: "-.7vw",
// //     color: theme.palette.grey[500],
// //   },
// // }));
// // const ResizeCOntainer = (props) => {
// //   const { edit } = props;
// //   const classes = useStyles();

// //   let GlassData = useSelector((state) => state.glassModule);
// //   let defaultGlass = GlassData.item;
// //   let defaultBg = "#eee";

// //   const SizeData = useSelector((state) => state.sizeModule);
// //   const { Boxes, size, width, maxWidth } = SizeData;
// //   // console.log(SizeData, "boxes");
// //   let BoxLength = Boxes.length;

// //   const [state, setState] = React.useState();
// //   const dispatch = useDispatch();

// //   // let { size, width } = data;
// //   // console.log(BoxLength, "bl");
// //   // const [gridSize, setGridSize] = React.useState(size);
// //   // console.log(gridSize);

// //   const snackactive = useSelector((state) => state.snackModule.active);
// //   console.log(maxWidth, "mwidth");
// //   React.useEffect(() => {
// //     // setGridSize(size);
// //     setState(width);
// //   }, [width, size]);

// //   const wheelResize = (e) => {
// //     if (edit === true) {
// //       let variable = state + e.deltaY / 4;
// //       if (variable < maxWidth) {
// //         setState(variable);
// //       }
// //       if (variable > maxWidth) {
// //         if (snackactive !== true) {
// //           dispatch(ShowSnackBar(true, "error", "Max Width Reached"));
// //         }
// //       }
// //     }
// //   };

// //   return (
// //     <div>
// //       <Grid
// //         container
// //         className={classes.gridContainer}
// //         alignItems="center"
// //         justify="center"
// //         style={{
// //           maxWidth: state * size,

// //           background: defaultGlass === null ? defaultBg : defaultGlass.bg,
// //           display: BoxLength === 0 ? "none" : "",
// //         }}
// //         component={Paper}
// //         onWheel={(e, d) => wheelResize(e)}
// //       >
// //         <GridContainer sizes={state} Boxes={Boxes} />
// //       </Grid>
// //       <div className={classes.resizeBtnCOntainer}>
// //         {edit && <DragIcon className={classes.resizeBtn} />}
// //       </div>
// //     </div>
// //   );
// // };
// // export default ResizeCOntainer;
