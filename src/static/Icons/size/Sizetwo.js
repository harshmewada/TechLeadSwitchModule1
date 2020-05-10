import * as React from "react";

function Sizetwo(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 196 100" fill="none" {...props}>
      <path
        stroke={props.color ? props.color : "#000"}
        strokeWidth={4}
        d="M2 2h96v96H2zM98 2h96v96H98z"
      />
    </svg>
  );
}

const MemoSizetwo = React.memo(Sizetwo);
export default MemoSizetwo;
