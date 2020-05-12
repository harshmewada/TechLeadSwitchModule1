import * as React from "react";

function Switch4(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 396 396" {...props} fill="none">
      <rect
        x={2.5}
        y={298.5}
        width={95}
        height={95}
        rx={17.5}
        stroke={props.color ? props.color : "#000"}
        strokeWidth={5}
      />
      <rect
        x={30}
        y={326}
        width={40}
        height={40}
        rx={10}
        fill={props.color ? props.color : "#000"}
      />
      <rect
        x={298.5}
        y={298.5}
        width={95}
        height={95}
        rx={17.5}
        stroke={props.color ? props.color : "#000"}
        strokeWidth={5}
      />
      <rect
        x={326}
        y={326}
        width={40}
        height={40}
        rx={10}
        fill={props.color ? props.color : "#000"}
      />
      <rect
        x={2.5}
        y={2.5}
        width={95}
        height={95}
        rx={17.5}
        stroke={props.color ? props.color : "#000"}
        strokeWidth={5}
      />
      <rect
        x={30}
        y={30}
        width={40}
        height={40}
        rx={10}
        fill={props.color ? props.color : "#000"}
      />
      <rect
        x={298.5}
        y={2.5}
        width={95}
        height={95}
        rx={17.5}
        stroke={props.color ? props.color : "#000"}
        strokeWidth={5}
      />
      <rect
        x={326}
        y={30}
        width={40}
        height={40}
        rx={10}
        fill={props.color ? props.color : "#000"}
      />
    </svg>
  );
}

const MemoSwitch4 = React.memo(Switch4);
export default MemoSwitch4;
