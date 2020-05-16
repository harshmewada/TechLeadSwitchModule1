import * as React from "react";

function Tvsocket(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 230 230" {...props} fill="none">
      <path
        stroke={props.color ? props.color : "#000"}
        strokeWidth={3}
        d="M1.5 1.5h227v227H1.5z"
      />
      <path
        d="M115 149.125c18.847 0 34.125-15.278 34.125-34.125S133.847 80.875 115 80.875 80.875 96.153 80.875 115 96.153 149.125 115 149.125z"
        stroke={props.color ? props.color : "#000"}
        strokeWidth={2.5}
      />
      <path
        d="M115 137.125c12.219 0 22.125-9.906 22.125-22.125S127.219 92.875 115 92.875 92.875 102.781 92.875 115s9.906 22.125 22.125 22.125z"
        stroke={props.color ? props.color : "#000"}
        strokeWidth={2.5}
      />
      <path
        d="M115 123.625a8.626 8.626 0 10-.001-17.251 8.626 8.626 0 00.001 17.251z"
        stroke={props.color ? props.color : "#000"}
        strokeWidth={2.5}
      />
    </svg>
  );
}

const MemoTvsocket = React.memo(Tvsocket);
export default MemoTvsocket;
