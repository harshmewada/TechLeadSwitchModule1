import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, IconButton, Typography } from "@material-ui/core";
import { DragSource, DropTarget } from "react-dnd";
import ItemTypes from "../../containers/dashboard/ItemTypes";
import clsx from "clsx";
import DeleteIcon from "@material-ui/icons/DeleteOutline";
const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
  },
  icon: {
    height: "40%",
    width: "40%",
    [theme.breakpoints.down("md")]: {
      height: "50%",
      width: "50%",
    },
    // color: "red",
    // backgroundColor: "green",
  },
  halfIcon: {
    [theme.breakpoints.down("md")]: {
      height: "13%",
      width: "13%",
    },
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
  deletecontainer: {
    // width: "0%",
    // backgroundColor: "red",

    position: "absolute",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  DeleteIcon: {
    padding: 5,
    margin: 10,

    color: theme.palette.grey[500],

    borderRadius: 150,
  },
  nullBg: {
    backgroundColor: theme.palette.grey[700],
    color: "white",

    "&:hover": {
      backgroundColor: theme.palette.grey[1000],
    },
    "&:focused": {
      backgroundColor: theme.palette.grey[1000],
    },
  },
  bgWhite: {
    backgroundColor: "white",
    color: theme.palette.grey[700],
    "&:focused": {
      backgroundColor: theme.palette.grey[1000],
    },
    "&:hover": {
      backgroundColor: theme.palette.grey[1000],
    },
  },
  bgBlack: {
    backgroundColor: "white",
    color: theme.palette.grey[700],
    "&:hover": {
      backgroundColor: theme.palette.grey[1000],
    },
    "&:focused": {
      backgroundColor: theme.palette.grey[1000],
    },
  },
  deleteIcon: {
    fontSize: "20px",
    [theme.breakpoints.down("md")]: {
      fontSize: "10px",
    },
  },
}));
const BoxContainer = (props) => {
  const {
    data,
    active,
    isDragging,
    connectDragSource,
    connectDropTarget,
    width,
  } = props;
  const classes = useStyles();
  const opacity = isDragging ? 0 : 1;
  const InnerIcon = data === 1 ? <div /> : data.icon;
  const { size } = data;
  let bgColor = props.bgColor === null ? "white" : props.bgColor.name;
  const ref = React.useRef();
  connectDragSource(ref);
  connectDropTarget(ref);

  return (
    <div ref={ref} className={classes.container}>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.container}
      >
        {!props.hideAllBtns && (
          <div
            className={classes.deletecontainer}
            style={{
              width: width,
              height: width,
              display: data.name === null ? "none" : "inherit",
            }}
          >
            <IconButton
              className={clsx(
                classes.DeleteIcon,
                bgColor === null
                  ? classes.nullBg
                  : bgColor === "white"
                  ? classes.bgWhite
                  : bgColor === "black"
                  ? classes.bgBlack
                  : null
              )}
              size="small"
              onClick={() => props.Delete()}
            >
              <DeleteIcon className={classes.deleteIcon} />
            </IconButton>
          </div>
        )}
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
    </div>
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
        // console.log(props.id, "over");
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
          // props.removeCard(droppedId);
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
