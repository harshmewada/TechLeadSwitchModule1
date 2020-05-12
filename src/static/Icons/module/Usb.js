import * as React from "react";

function Usb(props) {
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
        d="M34.2 45.6v52.8a3 3 0 003 3h26.4a3 3 0 003-3V45.6a3 3 0 00-3-3H37.2a3 3 0 00-3 3z"
        stroke={props.color ? props.color : "#000"}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41.4 53.6v36.8a3 3 0 003 3h12a3 3 0 003-3V53.6a3 3 0 00-3-3h-12a3 3 0 00-3 3z"
        stroke={props.color ? props.color : "#000"}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={45}
        y={54}
        width={8}
        height={36}
      >
        <path
          d="M45.2 56v32a1.6 1.6 0 001.6 1.6h4a1.6 1.6 0 001.6-1.6V56a1.6 1.6 0 00-1.6-1.6h-4a1.6 1.6 0 00-1.6 1.6z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#prefix__a)">
        <path
          d="M45.2 56v32a1.6 1.6 0 001.6 1.6h4a1.6 1.6 0 001.6-1.6V56a1.6 1.6 0 00-1.6-1.6h-4a1.6 1.6 0 00-1.6 1.6z"
          stroke={props.color ? props.color : "#000"}
          strokeWidth={5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M54 83.2a1.6 1.6 0 10-3.2 0 1.6 1.6 0 003.2 0zM54 76a1.6 1.6 0 10-3.2 0 1.6 1.6 0 003.2 0zM54 68.8a1.6 1.6 0 10-3.2 0 1.6 1.6 0 003.2 0zM54 61.6a1.6 1.6 0 10-3.2 0 1.6 1.6 0 003.2 0z"
          fill={props.color ? props.color : "#000"}
        />
        <path
          d="M14.2 36.2v71.6h71.6V36.2H14.2z"
          stroke={props.color ? props.color : "#000"}
          strokeWidth={2.5}
        />
      </g>
    </svg>
  );
}

const MemoUsb = React.memo(Usb);
export default MemoUsb;
