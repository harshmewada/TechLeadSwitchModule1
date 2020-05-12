import * as React from "react";

function Wallsocket(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 230 230" {...props} fill="none">
      <path
        d="M114 85c10.493 0 19-8.507 19-19s-8.507-19-19-19-19 8.507-19 19 8.507 19 19 19zM71 127c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zM157 127c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zM157 167c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zM72 169c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13z"
        fill={props.color ? props.color : "#000"}
      />
      <path
        d="M91 143H79v34h12v-34zM149 139h-12v42h12v-42z"
        fill={props.color ? props.color : "#000"}
      />
      <path
        stroke={props.color ? props.color : "#000"}
        strokeWidth={3}
        d="M1.5 1.5h227v227H1.5z"
      />
    </svg>
  );
}

const MemoWallsocket = React.memo(Wallsocket);
export default MemoWallsocket;
