import * as React from "react";

function Sizetwelve(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 400 400" fill="none" {...props}>
      <path
        stroke={props.color ? props.color : "#000"}
        strokeWidth={4}
        d="M55 200h96v96H55zM152 200h96v96h-96zM249 200h96v96h-96zM55 104h96v96H55zM152 104h96v96h-96zM249 104h96v96h-96z"
      />
    </svg>
  );
}

const MemoSizetwelve = React.memo(Sizetwelve);
export default MemoSizetwelve;
