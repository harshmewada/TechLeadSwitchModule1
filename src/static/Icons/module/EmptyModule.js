import * as React from "react";

function EmptyModule(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 230 230" {...props} fill="none">
      <path stroke="none" strokeWidth={3} d="M1.5 1.5h227v227H1.5z" />
    </svg>
  );
}

const MemoEmptyModule = React.memo(EmptyModule);
export default MemoEmptyModule;
