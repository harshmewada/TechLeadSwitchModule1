import * as React from "react";

function Sizenine(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 294 293" fill="none" {...props}>
      <path
        stroke="#000"
        strokeWidth={4}
        d="M2 195h96v96H2zM99 195h96v96H99zM196 195h96v96h-96zM2 98h96v96H2zM99 98h96v96H99zM196 98h96v96h-96zM2 2h96v96H2zM99 2h96v96H99zM196 2h96v96h-96z"
      />
    </svg>
  );
}

const MemoSizenine = React.memo(Sizenine);
export default MemoSizenine;
