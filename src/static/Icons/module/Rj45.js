import * as React from "react";

function Rj45(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 100 144" {...props} fill="none">
      <rect
        x={2.5}
        y={141.5}
        width={139}
        height={95}
        rx={17.5}
        transform="rotate(-90 2.5 141.5)"
        stroke={props.color ? props.color : "#000"}
        strokeWidth={5}
      />
      <path
        d="M60 88.667V82h10v-6.667H60v-6.666h10V62H60v-6.667h10v-6.666H40V62H30v20h10v13.333h30v-6.666H60zM20 97.4V46.567a7.9 7.9 0 017.933-7.9h47.5a7.9 7.9 0 017.9 7.9V97.4a7.896 7.896 0 01-4.869 7.329c-.96.399-1.99.604-3.03.604h-47.5A7.91 7.91 0 0120 97.4z"
        fill={props.color ? props.color : "#000"}
      />
    </svg>
  );
}

const MemoRj45 = React.memo(Rj45);
export default MemoRj45;
