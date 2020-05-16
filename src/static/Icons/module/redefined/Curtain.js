import * as React from "react";

function Curtain(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 214 100" fill="none" {...props}>
      <path
        d="M9.5 95.5c2.167-3.167 7.8-7.6 13 0M64 95.196c2.167-3.166 7.8-7.6 13 0M23 96c2.333-3.019 8.4-7.244 14 0M78 95c2.167-2.264 7.8-5.433 13 0M41 14.5c-4.574 27.39-10.164 46.314-19.311 48.306-9.163 1.995-11.35-.83-11.689-1.992M60 14c4.574 27.39 10.164 46.314 19.311 48.306 9.163 1.995 11.35-.83 11.689-1.992"
        stroke={props.color ? props.color : "#000"}
        strokeWidth={2.5}
        strokeLinecap="round"
      />
      <path
        stroke={props.color ? props.color : "#000"}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 5h90v8H5z"
      />
      <path
        stroke={props.color ? props.color : "#000"}
        strokeWidth={2.5}
        strokeLinecap="round"
        d="M9.25 14.25v81.5M91.25 14.25v80.5"
      />
      <path
        stroke={props.color ? props.color : "#000"}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.677 63.559l15.882 31.764M80.323 62.559L64.44 94.323"
      />
      <path
        stroke={props.color ? props.color : "#000"}
        d="M22.515 94.121l-5-20M77.485 94.121l5-20M28 14.5c-1.333 10-5.1 31.3-9.5 36.5M73 14c1.333 10 5.1 31.3 9.5 36.5"
      />
      <path
        stroke={props.color ? props.color : "#000"}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M119 4h90v8h-90z"
      />
      <path
        stroke={props.color ? props.color : "#000"}
        strokeWidth={2.5}
        strokeLinecap="round"
        d="M123.25 13.25v81.5M205.25 13.25v82.5M123.5 95c1.667-2.5 6.2-6 11 0M171 95.313c1.667-2.5 6.2-6 11 0M135 95.313c1.667-2.5 6.2-6 11 0M182.5 95.626c1.667-2.5 6.2-6 11 0M146.5 95.626c1.667-2.5 6.2-6 11 0M194 95.939c1.667-2.5 6.2-6 11 0M157.75 95.75v-82.5M170.75 95.75v-82.5"
      />
      <path
        stroke={props.color ? props.color : "#000"}
        d="M134.5 94V48M194.5 96V50M145.5 27V13M181.5 26V12M146.5 95V81M182.5 94V80"
      />
    </svg>
  );
}

const MemoCurtain = React.memo(Curtain);
export default MemoCurtain;
