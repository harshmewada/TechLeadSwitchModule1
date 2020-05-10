import * as React from "react";

function Sizethree(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 294 100" fill="none" {...props}>
      <path
        stroke={props.color ? props.color : "#000"}
        strokeWidth={4}
        d="M2 2h96v96H2zM99 2h96v96H99zM196 2h96v96h-96z"
      />
    </svg>
  );
}

const MemoSizethree = React.memo(Sizethree);
export default MemoSizethree;
