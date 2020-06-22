import * as React from "react";

function Sizesix(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 400 400" fill="none" {...props}>
      <path
        stroke={props.color ? props.color : "#000"}
        strokeWidth={4}
        d="M55 152h96v96H55zM152 152h96v96h-96zM249 152h96v96h-96z"
      />
    </svg>
  );
}

const MemoSizesix = React.memo(Sizesix);
export default MemoSizesix;
