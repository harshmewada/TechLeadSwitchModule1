import * as React from "react";

function Fanragulator(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 30 246" fill="none" {...props}>
      <rect
        width={30}
        height={30}
        rx={10}
        fill={props.color ? props.color : "#000"}
      />
      <rect
        x={1}
        y={56}
        width={28}
        height={28}
        rx={10}
        fill={props.color ? props.color : "#000"}
      />
      <rect
        x={2}
        y={112}
        width={26}
        height={26}
        rx={10}
        fill={props.color ? props.color : "#000"}
      />
      <rect
        x={3}
        y={168}
        width={24}
        height={24}
        rx={10}
        fill={props.color ? props.color : "#000"}
      />
      <rect
        x={4}
        y={224}
        width={22}
        height={22}
        rx={10}
        fill={props.color ? props.color : "#000"}
      />
    </svg>
  );
}

const MemoFanragulator = React.memo(Fanragulator);
export default MemoFanragulator;
