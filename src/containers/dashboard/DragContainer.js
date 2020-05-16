//working

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Draggable from "react-draggable";
import ResizeContainer from "./ResizeContainer";
import { useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import { Icon, Tooltip, IconButton } from "@material-ui/core";
import DragIcon from "@material-ui/icons/PanToolOutlined";
const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "red",
  },
}));
const DragContainer = () => {
  const classes = useStyles();
  //   let number = 10;
  //   const nodeRef = React.useRef(null);
  const move = useSelector((state) => state.sizeModule.edit);
  const [position, setPosotion] = React.useState({
    top: "auto",
    left: "auto",
  });
  const onStart = () => {
    // this.setState({ activeDrags: ++this.state.activeDrags });
  };

  const onStop = () => {
    // this.setState({ activeDrags: --this.state.activeDrags });
  };
  const dragHandlers = { onStart: onStart, onStop: onStop };
  const [tooltipopen, setTooltipopen] = React.useState(false);
  const [tooltiphover, setTooltiphover] = React.useState(true);
  return (
    <Draggable
      bounds="parent"
      axis="both"
      // defaultClassName={classes.root}
      disabled={!move}
      handle="strong"
      {...dragHandlers}

      // {...dragHandlers}
    >
      <div>
        <Tooltip
          open={tooltiphover && tooltipopen}
          title="Click and Drag here to move the board"
          disableFocusListener
          disableHoverListener
          disableTouchListener
        >
          <strong
            style={{
              position: "absolute",
              top: -30,
              left: -30,
              opacity: move ? 1 : 0,
              color: "grey",
            }}
          >
            <IconButton
              onMouseEnter={() => setTooltipopen(true)}
              onMouseLeave={() => setTooltipopen(false)}
              onClick={() => setTooltiphover(false)}
            >
              <Icon className="Icon">
                <DragIcon />
              </Icon>
            </IconButton>
          </strong>
        </Tooltip>

        <DndProvider backend={Backend}>
          <ResizeContainer edit={move} />
        </DndProvider>
      </div>
    </Draggable>
  );
};
export default DragContainer;

// //working

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Draggable from "react-draggable";
// import ResizeContainer from "./ResizeContainer";
// import { useSelector } from "react-redux";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     // backgroundColor: "red",
//   },
// }));
// const DragContainer = () => {
//   const classes = useStyles();
//   //   let number = 10;
//   //   const nodeRef = React.useRef(null);
//   const move = useSelector((state) => state.sizeModule.edit);
//   const [position, setPosotion] = React.useState({
//     top: "auto",
//     left: "auto",
//   });

//   return (
//     // <Draggable
//     //   bounds="parent"
//     //   axis="both"
//     //   defaultClassName={classes.root}
//     //   disabled={!move}
//     //   // {...dragHandlers}
//     // >
//     <div
//       style={{
//         padding: "100px",
//         position: "absolute",
//         top: position.top,
//         backgroundColor: "red",
//       }}
//     >
//       <ResizeContainer edit={move} />
//     </div>
//     // </Draggable>
//   );
// };
// export default DragContainer;
