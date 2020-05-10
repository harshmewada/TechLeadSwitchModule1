import * as React from "react";

function Sizeone(props) {
  // console.log(props);
  return (
    <svg width="1em" height="1em" viewBox="0 0 100 100" fill="none" {...props}>
      <path
        stroke={props.color ? props.color : "#000"}
        strokeWidth={4}
        d="M2 2h96v96H2z"
      />
    </svg>
  );
}

const MemoSizeone = React.memo(Sizeone);
export default MemoSizeone;
