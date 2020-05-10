import * as React from "react";

function Sizefour(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 391 100" fill="none" {...props}>
      <path
        stroke={props.color ? props.color : "#000"}
        strokeWidth={4}
        d="M196 2h96v96h-96zM293 2h96v96h-96zM2 2h96v96H2zM99 2h96v96H99z"
      />
    </svg>
  );
}

const MemoSizefour = React.memo(Sizefour);
export default MemoSizefour;
