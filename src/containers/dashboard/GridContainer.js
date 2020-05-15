import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import BoxContainer from "../../components/BoxContainer/index";
import clsx from "clsx";
import { DragSource, DropTarget } from "react-dnd";
import ItemTypes from "./ItemTypes";
const useStyles = makeStyles((theme) => ({}));
const GridContainer = (props) => {
  const classes = useStyles();

  const width = props.sizes;
  const { data, led, isDragging, connectDragSource, connectDropTarget } = props;
  const opacity = isDragging ? 0 : 1;
  const ref = React.useRef(null);
  connectDragSource(ref);
  connectDropTarget(ref);
  return (
    <Grid
      item
      ref={ref}
      style={{ height: width, width: width, opacity }}

      // lg={lenght}
      // className={clsx(
      //   BoxLength === 1 || BoxLength === 2 || BoxLength === 6
      //     ? classes.dynamic24
      //     : classes.dynamic22
      // )}
    >
      {data === 1 ? <div></div> : <BoxContainer data={data} active={led} />}
    </Grid>
  );
};
export default DropTarget(
  ItemTypes.CARD,
  {
    canDrop: () => false,
    hover(props, monitor) {
      const { id: draggedId } = monitor.getItem();
      const { id: overId } = props;
      if (draggedId !== overId) {
        const { index: overIndex } = props.findCard(overId);
        props.moveCard(draggedId, overIndex);
      }
    },
  },
  (connect) => ({
    connectDropTarget: connect.dropTarget(),
  })
)(
  DragSource(
    ItemTypes.CARD,
    {
      beginDrag: (props) => ({
        id: props.id,
        originalIndex: props.findCard(props.id).index,
      }),
      endDrag(props, monitor) {
        const { id: droppedId, originalIndex } = monitor.getItem();
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          props.moveCard(droppedId, originalIndex);
        }
      },
    },
    (connect, monitor) => ({
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging(),
    })
  )(GridContainer)
);

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
