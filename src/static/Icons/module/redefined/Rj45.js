import * as React from "react";

function Rj45(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 230 230" {...props} fill="none">
      <path
        stroke={props.color ? props.color : "#000"}
        strokeWidth={3}
        d="M1.5 1.5h227v227H1.5z"
      />
      <path
        d="M130 140v-10h15v-10h-15v-10h15v-10h-15V90h15V80h-45v20H85v30h15v20h45v-10h-15zm-60 13.1V76.85A11.85 11.85 0 0181.9 65h71.25A11.849 11.849 0 01165 76.85v76.25a11.84 11.84 0 01-11.85 11.9H81.9c-6.6 0-11.9-5.3-11.9-11.9z"
        fill={props.color ? props.color : "#000"}
      />
    </svg>
  );
}

const MemoRj45 = React.memo(Rj45);
export default MemoRj45;
