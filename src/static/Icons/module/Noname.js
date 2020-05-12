import * as React from "react";

function Noname(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 100 100" {...props} fill="none">
      <rect
        x={2.5}
        y={2.5}
        width={95}
        height={95}
        rx={17.5}
        stroke={props.color ? props.color : "#000"}
        strokeWidth={5}
      />
      <path
        d="M30.875 57L50 76.083 69.125 57 75 62.875l-25 25-25-25L30.875 57zM30.875 43.875L50 24.792l19.125 19.083L75 38 50 13 25 38l5.875 5.875z"
        fill={props.color ? props.color : "#000"}
      />
      <circle
        cx={49.5}
        cy={49.5}
        r={7.5}
        fill={props.color ? props.color : "#000"}
      />
    </svg>
  );
}

const MemoNoname = React.memo(Noname);
export default MemoNoname;
