import * as React from "react";

function Sizeeight(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 400 400" fill="none" {...props}>
      <path
        stroke={props.color ? props.color : "#000"}
        strokeWidth={4}
        d="M201 152h96v96h-96zM298 152h96v96h-96zM7 152h96v96H7zM104 152h96v96h-96z"
      />
    </svg>
  );
}

const MemoSizeeight = React.memo(Sizeeight);
export default MemoSizeeight;
