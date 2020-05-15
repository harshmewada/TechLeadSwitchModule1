import React, { useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Button, IconButton } from "@material-ui/core";
import DragIcon from "@material-ui/icons/ZoomOutMapOutlined";
import GridContainer from "./GridContainer";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import { ShowSnackBar } from "../../actions/snackActions";
import { DropTarget } from "react-dnd";
import update from "immutability-helper";
import ItemTypes from "./ItemTypes";
const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: "red",
  },
  gridContainer: {
    // marginTop: "-25vh",
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
}));
const ResizeCOntainer = (props) => {
  const ref = React.useRef(null);
  const { edit, connectDropTarget } = props;
  const classes = useStyles();

  let GlassData = useSelector((state) => state.glassModule);
  let defaultGlass = GlassData.item;
  let defaultBg = "#eee";

  const SizeData = useSelector((state) => state.sizeModule);
  const { Boxes, size, width, maxWidth } = SizeData;
  let BoxLength = Boxes.length;

  const [state, setState] = React.useState();
  const dispatch = useDispatch();

  const snackactive = useSelector((state) => state.snackModule.active);

  React.useEffect(() => {
    // setGridSize(size);
    setState(width);
  }, [width, size]);

  const wheelResize = (e) => {
    if (edit === true) {
      let variable = state + e.deltaY / 4;
      if (variable < maxWidth) {
        setState(variable);
      }
      if (variable > maxWidth) {
        if (snackactive !== true) {
          dispatch(ShowSnackBar(true, "error", "Max Width Reached"));
        }
      }
    }
  };

  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    setCards(Boxes);
  }, [Boxes]);

  //fintBox

  const moveCard = useCallback(
    (id, atIndex) => {
      const { card, index } = findCard(id);
      console.log("moveCard", card, index);
      setCards(
        update(cards, {
          $splice: [
            [index, 1],
            [atIndex, 0, card],
          ],
        })
      );
    },
    [cards]
  );

  const findCard = useCallback(
    (id) => {
      const card = cards.filter((c) => `${c.index}` === id)[0];

      return {
        card,
        index: cards.indexOf(card),
      };
    },
    [cards]
  );
  connectDropTarget(ref);
  const dashvalues = useSelector((state) => state.dashModule);
  const { led } = dashvalues;
  return (
    <div>
      <Grid
        container
        className={classes.gridContainer}
        alignItems="center"
        justify="center"
        style={{
          maxWidth: state * size,

          background: defaultGlass === null ? defaultBg : defaultGlass.bg,
          display: BoxLength === 0 ? "none" : "",
        }}
        component={Paper}
        onWheel={(e, d) => wheelResize(e)}
        ref={ref}
      >
        {cards.length > 0 &&
          cards.map((card, index) => {
            return (
              // <Card
              //   key={card.index}
              //   id={`${card.index}`}
              //   text={card.name}
              //   moveCard={moveCard}
              //   findCard={findCard}
              // />
              <GridContainer
                key={index}
                id={`${card.index}`}
                data={card}
                led={led}
                sizes={state}
                moveCard={moveCard}
                findCard={findCard}
              />
            );
          })}
      </Grid>
      <div className={classes.resizeBtnCOntainer}>
        {edit && <DragIcon className={classes.resizeBtn} />}
      </div>
    </div>
  );
};
export default DropTarget(ItemTypes.CARD, {}, (connect) => ({
  connectDropTarget: connect.dropTarget(),
}))(ResizeCOntainer);

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";

// import Example from "./example";
// const useStyles = makeStyles((theme) => ({}));
// const ResizeContainer = () => {
//   const classes = useStyles();
//   return (
//     <div>

//         <Example />

//     </div>
//   );
// };
// export default ResizeContainer;

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

// onDragEnd(result) {
//   // dropped outside the list
//   if (!result.destination) {
//     return;
//   }

//   const items = reorder(
//     this.state.items,
//     result.source.index,
//     result.destination.index
//   );

//   this.setState({
//     items,
//   });
// }

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

// working resize

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
