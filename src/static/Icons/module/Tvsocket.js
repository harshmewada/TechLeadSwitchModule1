import * as React from "react";

function Tvsocket(props) {
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
        d="M50 72.75c12.565 0 22.75-10.185 22.75-22.75S62.565 27.25 50 27.25 27.25 37.435 27.25 50 37.435 72.75 50 72.75z"
        stroke={props.color ? props.color : "#000"}
        strokeWidth={2.5}
      />
      <path
        d="M50 64.75c8.146 0 14.75-6.604 14.75-14.75S58.146 35.25 50 35.25 35.25 41.854 35.25 50 41.854 64.75 50 64.75z"
        stroke={props.color ? props.color : "#000"}
        strokeWidth={2.5}
      />
      <path
        d="M50 55.75a5.75 5.75 0 100-11.5 5.75 5.75 0 000 11.5z"
        stroke={props.color ? props.color : "#000"}
        strokeWidth={2.5}
      />
    </svg>
  );
}

const MemoTvsocket = React.memo(Tvsocket);
export default MemoTvsocket;
