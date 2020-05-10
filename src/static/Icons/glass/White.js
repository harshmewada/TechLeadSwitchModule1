import * as React from "react";

function White(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 100 100" fill="none" {...props}>
      <circle cx={50} cy={50} r={50} fill="#fff" />
    </svg>
  );
}

const MemoWhite = React.memo(White);
export default MemoWhite;
