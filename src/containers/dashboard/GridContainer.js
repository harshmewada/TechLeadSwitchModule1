// test

import React, { useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
import BoxContainer from "../../components/BoxContainer/index";
import clsx from "clsx";
import { DragSource, DropTarget } from "react-dnd";
import ItemTypes from "./ItemTypes";
import update from "immutability-helper";
import { removeFromBOx } from "../../actions/sizeaction";
const useStyles = makeStyles((theme) => ({}));
const GridContainer = (props) => {
  const bgColor = useSelector((state) => state.glassModule.item);
  const SizeData = useSelector((state) => state.sizeModule);
  const { Boxes, size, maxWidth, mobileWidth } = SizeData;
  let BoxLength = Boxes.length;

  const dispatch = useDispatch();

  const classes = useStyles();
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    setCards(Boxes);
    // console.log("Boxes effect", Boxes);
  }, [SizeData, Boxes]);

  const {
    led,

    isDragging,
  } = props;
  const opacity = isDragging ? 0 : 1;
  const ref = React.useRef();

  // React.useEffect(() => {
  //   setData(props.data);
  //   console.log("data changed", data);
  // }, [props.data]);
  let moveIndex = 0;
  const moveCard = useCallback(
    (id, atIndex) => {
      const { card, index } = findCard(id);
      // console.log("moveCard", index, atIndex);

      let newArr = cards;
      let item1 = newArr[atIndex];
      let item2 = newArr[index];
      moveIndex = moveIndex + 1;
      // console.log(atIndex, "atindex", "\n", "index", index, "\n", moveIndex);

      // setCards(update(cards,));
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
      // let card;

      // card =
      //   id === undefined
      //     ? cards.filter((c) => `${c.index}` === undefined)[0]
      //     : cards.filter((c) => `${c.id}` === id)[0];

      // console.log(
      //   card,
      //   "\n",
      //   id,
      //   "findcard",
      //   "\n",
      //   cards.filter((c) => console.log("innerconsole", c.index))
      // );
      // return {
      //   card,
      //   index: cards.indexOf(card),
      // };

      const card = cards.filter((c) => c.id === id)[0];
      // console.log(card, id, "findCard");
      // console.log("card index", cards.indexOf(card), card);
      return {
        card,
        index: cards.indexOf(card),
      };
    },
    [cards]
  );

  const removeCard = useCallback(
    (id) => {
      const { card, index } = findCard(id);
      // console.log("removeid", id, "\n", card, "\n", index);
      dispatch(removeFromBOx(index));
      // let newCards = cards;
      // newCards[index] = 1;
      // setCards(newCards);
    },
    [cards]
  );
  return cards.map((data, index) => (
    <Grid
      item
      key={index}
      id={`${data.id}`}
      ref={ref}
      style={{ height: props.sizes, width: props.sizes, opacity: opacity }}
    >
      <BoxContainer
        index={index}
        id={data.id}
        key={index}
        data={data}
        active={led}
        bgColor={bgColor}
        width={props.sizes}
        moveCard={moveCard}
        findCard={findCard}
        removeCard={removeCard}
        Delete={() => removeCard(data.id)}
      />
    </Grid>
  ));
};
export default GridContainer;
// // working

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import { useSelector } from "react-redux";
// import { Grid } from "@material-ui/core";
// import BoxContainer from "../../components/BoxContainer/index";
// import clsx from "clsx";
// import { DragSource, DropTarget } from "react-dnd";
// import ItemTypes from "./ItemTypes";
// const useStyles = makeStyles((theme) => ({}));
// const GridContainer = (props) => {
//   const classes = useStyles();

//   const width = props.sizes;
//   const { data, led, isDragging, connectDragSource, connectDropTarget } = props;
//   const opacity = isDragging ? 0 : 1;
//   const ref = React.useRef(null);
//   connectDragSource(ref);
//   connectDropTarget(ref);
//   return (
//     <Grid
//       item
//       ref={ref}
//       style={{ height: width, width: width, opacity }}

//       // lg={lenght}
//       // className={clsx(
//       //   BoxLength === 1 || BoxLength === 2 || BoxLength === 6
//       //     ? classes.dynamic24
//       //     : classes.dynamic22
//       // )}
//     >
//       {data === 1 ? <div></div> : <BoxContainer data={data} active={led} />}
//     </Grid>
//   );
// };
// export default DropTarget(
//   ItemTypes.CARD,
//   {
//     canDrop: () => false,
//     hover(props, monitor) {
//       const { id: draggedId } = monitor.getItem();
//       const { id: overId } = props;
//       if (draggedId !== overId) {
//         const { index: overIndex } = props.findCard(overId);
//         props.moveCard(draggedId, overIndex);
//       }
//     },
//   },
//   (connect) => ({
//     connectDropTarget: connect.dropTarget(),
//   })
// )(
//   DragSource(
//     ItemTypes.CARD,
//     {
//       beginDrag: (props) => ({
//         id: props.id,
//         originalIndex: props.findCard(props.id).index,
//       }),
//       endDrag(props, monitor) {
//         const { id: droppedId, originalIndex } = monitor.getItem();
//         const didDrop = monitor.didDrop();
//         if (!didDrop) {
//           // props.moveCard(droppedId, originalIndex);
//           props.removeCard(droppedId);
//         }
//       },
//     },
//     (connect, monitor) => ({
//       connectDragSource: connect.dragSource(),
//       isDragging: monitor.isDragging(),
//     })
//   )(GridContainer)
// );

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import { useSelector } from "react-redux";
// import { Grid } from "@material-ui/core";
// import BoxContainer from "../../components/BoxContainer/index";
// import clsx from "clsx";
// const useStyles = makeStyles((theme) => ({}));
// const GridContainer = (props) => {
//   const classes = useStyles();
//   const { Boxes } = props;
//   const dashvalues = useSelector((state) => state.dashModule);
//   const { led, border } = dashvalues;
//   const width = props.sizes;

//   return Boxes.map((data, index) => {
//     return (
//       <Grid
//         item
//         key={index}
//         style={{ height: width, width: width }}

//         // lg={lenght}
//         // className={clsx(
//         //   BoxLength === 1 || BoxLength === 2 || BoxLength === 6
//         //     ? classes.dynamic24
//         //     : classes.dynamic22
//         // )}
//       >
//         {data === 1 ? <div></div> : <BoxContainer data={data} active={led} />}
//       </Grid>
//     );
//   });
// };
// export default GridContainer;
