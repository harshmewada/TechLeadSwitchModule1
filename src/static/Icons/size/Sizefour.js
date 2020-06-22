import * as React from "react";

function Sizefour(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 400 400" fill="none" {...props}>
      <path
        stroke={props.color ? props.color : "#000"}
        strokeWidth={4}
        d="M104 152h96v96h-96zM200 152h96v96h-96z"
      />
    </svg>
  );
}

const MemoSizefour = React.memo(Sizefour);
export default MemoSizefour;
