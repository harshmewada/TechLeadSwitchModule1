import * as React from "react";

function Usb(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 230 230" {...props} fill="none">
      <path
        stroke={props.color ? props.color : "#000"}
        strokeWidth={3}
        d="M1.5 1.5h227v227H1.5z"
      />
      <path
        d="M85.375 65.5v99A5.625 5.625 0 0091 170.125h49.5a5.624 5.624 0 005.625-5.625v-99a5.625 5.625 0 00-5.625-5.625H91a5.625 5.625 0 00-5.625 5.625z"
        stroke={props.color ? props.color : "#000"}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M98.875 80.5v69a5.624 5.624 0 005.625 5.625H127a5.624 5.624 0 005.625-5.625v-69A5.625 5.625 0 00127 74.875h-22.5a5.625 5.625 0 00-5.625 5.625z"
        stroke={props.color ? props.color : "#000"}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={106}
        y={82}
        width={14}
        height={66}
      >
        <path
          d="M106 85v60a3 3 0 003 3h7.5a3 3 0 003-3V85a3 3 0 00-3-3H109a3 3 0 00-3 3z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#prefix__a)">
        <path
          d="M106 85v60a3 3 0 003 3h7.5a3 3 0 003-3V85a3 3 0 00-3-3H109a3 3 0 00-3 3z"
          stroke={props.color ? props.color : "#000"}
          strokeWidth={5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M122.5 136a3 3 0 10-6 0 3 3 0 006 0zM122.5 122.5a3 3 0 10-6 0 3 3 0 006 0zM122.5 109a3 3 0 10-6 0 3 3 0 006 0zM122.5 95.5a3 3 0 10-6 0 3 3 0 006 0z"
          fill="#000"
        />
        <path
          d="M47.875 47.875v134.25h134.25V47.875H47.875z"
          stroke={props.color ? props.color : "#000"}
          strokeWidth={2.5}
        />
      </g>
    </svg>
  );
}

const MemoUsb = React.memo(Usb);
export default MemoUsb;
