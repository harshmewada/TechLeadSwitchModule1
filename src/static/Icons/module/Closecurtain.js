import * as React from "react";

function Closecurtain(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 100 100" fill="none" {...props}>
      <path
        stroke={props.color ? props.color : "#000"}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 4h90v8H5z"
      />
      <path
        stroke={props.color ? props.color : "#000"}
        strokeWidth={2.5}
        strokeLinecap="round"
        d="M9.25 13.25v81.5M91.25 13.25v82.5M9.5 95c1.667-2.5 6.2-6 11 0M57 95.313c1.667-2.5 6.2-6 11 0M21 95.313c1.667-2.5 6.2-6 11 0M68.5 95.626c1.667-2.5 6.2-6 11 0M32.5 95.626c1.667-2.5 6.2-6 11 0M80 95.939c1.667-2.5 6.2-6 11 0M43.75 95.75v-82.5M56.75 95.75v-82.5"
      />
      <path
        stroke={props.color ? props.color : "#000"}
        d="M20.5 94V48M80.5 96V50M31.5 27V13M67.5 26V12M32.5 95V81M68.5 94V80"
      />
    </svg>
  );
}

const MemoClosecurtain = React.memo(Closecurtain);
export default MemoClosecurtain;
