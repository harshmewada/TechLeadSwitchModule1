import * as React from "react";

function Doorbell(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 100 100" {...props} fill="none">
      <path
        d="M54.938 60.773H44.062m10.876 0H64l-2.547-2.988a4.436 4.436 0 01-.798-1.402 4.977 4.977 0 01-.28-1.654v-6.716c0-2.639-.697-5.213-1.995-7.369-1.299-2.155-3.134-3.785-5.255-4.666v-.725c0-1.128-.382-2.21-1.062-3.007C51.383 31.448 50.461 31 49.5 31c-.961 0-1.883.448-2.563 1.246-.68.797-1.062 1.88-1.062 3.007v.725c-4.223 1.753-7.25 6.48-7.25 12.035v6.718c0 1.145-.388 2.244-1.078 3.054L35 60.773h19.937zm0 0V62.9c0 1.692-.573 3.315-1.593 4.511-1.02 1.197-2.403 1.869-3.845 1.869-1.442 0-2.825-.672-3.845-1.869-1.02-1.196-1.593-2.819-1.593-4.511v-2.127h10.876zM73.2 41c3.622 3.354 8.693 12.25 0 21M70 44.5c2.415 2.236 5.796 8.167 0 14M26.133 62c-3.622-3.194-8.693-11.667 0-20M29.333 58.667c-2.414-2.13-5.795-7.778 0-13.334"
        stroke={props.color ? props.color : "#000"}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={49.5}
        cy={50.5}
        r={37.25}
        stroke={props.color ? props.color : "#000"}
        strokeWidth={2.5}
      />
      <circle
        cx={49.5}
        cy={50.5}
        r={43.25}
        stroke={props.color ? props.color : "#000"}
        strokeWidth={2.5}
      />
    </svg>
  );
}

const MemoDoorbell = React.memo(Doorbell);
export default MemoDoorbell;
