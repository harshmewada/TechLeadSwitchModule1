import * as React from "react";

function Sizetwo(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 400 400" fill="none" {...props}>
      <path
        stroke={props.color ? props.color : "#000"}
        strokeWidth={4}
        d="M152 152h96v96h-96z"
      />
    </svg>
  );
}

const MemoSizetwo = React.memo(Sizetwo);
export default MemoSizetwo;
