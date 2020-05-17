import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { DragSource, DropTarget } from "react-dnd";
import ItemTypes from "../../containers/dashboard/ItemTypes";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
  },
  icon: {
    height: "40%",
    width: "40%",
    // color: "red",
    // backgroundColor: "green",
  },
  halfIcon: {
    height: "10%",
    width: "10%",
  },
  fullOpacity: {
    opacity: 1,
  },
  halfOpacity: {
    opacity: 0.5,
  },
  removeContainer: {
    position: "absolute",
    top: "-1vh",
    right: "-1vw",
  },
}));
const BoxContainer = (props) => {
  const {
    data,
    active,
    isDragging,
    connectDragSource,
    connectDropTarget,
  } = props;
  const classes = useStyles();
  const opacity = isDragging ? 0 : 1;
  const InnerIcon = data === 1 ? <div /> : data.icon;
  const { size } = data;

  const ref = React.useRef();
  connectDragSource(ref);
  connectDropTarget(ref);
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.container}
      ref={ref}
    >
      <Grid item container justify="center" alignItems="center">
        <InnerIcon
          className={clsx(
            size === 1 ? classes.halfIcon : classes.icon,
            active ? classes.fullOpacity : classes.halfOpacity
            // active === true ? classes.activeIcon : classes.normalColor
          )}
          color="#36c2f3"
          fill="#36c2f3"
          // color={active ? "white" : "black"}
        />
      </Grid>

      {/* <Grid item>{data.name}</Grid> */}
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
          // props.moveCard(droppedId, originalIndex);
          props.removeCard(droppedId);
        }
      },
    },
    (connect, monitor) => ({
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging(),
    })
  )(BoxContainer)
);

//working
// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import { Grid } from "@material-ui/core";
// import RemoveIcon from "@material-ui/icons/Delete";
// import clsx from "clsx";
// const useStyles = makeStyles((theme) => ({
//   container: {
//     height: "100%",
//   },
//   icon: {
//     height: "40%",
//     width: "40%",
//     // color: "red",
//     // backgroundColor: "green",
//   },
//   halfIcon: {
//     height: "10%",
//     width: "10%",
//   },
//   fullOpacity: {
//     opacity: 1,
//   },
//   halfOpacity: {
//     opacity: 0.5,
//   },
//   removeContainer: {
//     position: "absolute",
//     top: "-1vh",
//     right: "-1vw",
//   },
// }));
// const BoxContainer = (props) => {
//   const { data, active } = props;
//   const classes = useStyles();
//   const InnerIcon = data === 1 ? <div /> : data.icon;
//   const { size } = data;
//   return (
//     <Grid
//       container
//       justify="center"
//       alignItems="center"
//       className={classes.container}
//     >
//       <Grid item container justify="center" alignItems="center">
//         <InnerIcon
//           className={clsx(
//             size === 1 ? classes.halfIcon : classes.icon,
//             active ? classes.fullOpacity : classes.halfOpacity
//             // active === true ? classes.activeIcon : classes.normalColor
//           )}
//           color="#36c2f3"
//           fill="#36c2f3"
//           // color={active ? "white" : "black"}
//         />
//       </Grid>

//       {/* <Grid item>{data.name}</Grid> */}
//     </Grid>
//   );
// };
// export default BoxContainer;
