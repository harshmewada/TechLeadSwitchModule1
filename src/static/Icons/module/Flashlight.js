import * as React from "react";

function Flashlight(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 100 100" {...props} fill="none">
      <rect
        x={2.5}
        y={2.5}
        width={95}
        height={95}
        rx={17.5}
        stroke={props.color ? props.color : "#000"}
        strokeWidth={5}
      />
      <path
        d="M44.682 24l-4.775 27.082 5.909 1.042-3.907 22.158L60.906 47.17l-7.879-1.39L64.38 27.474 44.681 24z"
        fill={props.color ? props.color : "#000"}
      />
    </svg>
  );
}

const MemoFlashlight = React.memo(Flashlight);
export default MemoFlashlight;
