import * as React from "react";

function Sizeeighteen(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 400 400" fill="none" {...props}>
      <path
        stroke={props.color ? props.color : "#000"}
        strokeWidth={4}
        d="M55 249h96v96H55zM152 249h96v96h-96zM249 249h96v96h-96zM55 152h96v96H55zM152 152h96v96h-96zM249 152h96v96h-96zM55 56h96v96H55zM152 56h96v96h-96zM249 56h96v96h-96z"
      />
    </svg>
  );
}

const MemoSizeeighteen = React.memo(Sizeeighteen);
export default MemoSizeeighteen;
