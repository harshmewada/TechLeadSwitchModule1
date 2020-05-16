import * as React from "react";

function Fan(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 295 246" {...props} fill="none">
      <circle
        cx={94.857}
        cy={126.391}
        r={10.94}
        stroke={props.color ? props.color : "#000"}
        strokeWidth={10}
      />
      <path
        d="M9.594 124.04a5 5 0 014.818-4.997l55.752-2.027a5 5 0 015.182 4.996v9.188a5 5 0 01-5.152 4.997l-55.752-1.689a5 5 0 01-4.848-4.998v-5.47z"
        fill={props.color ? props.color : "#000"}
      />
      <path
        fill={props.color ? props.color : "#000"}
        d="M69.368 123.203h13.549v6.376H69.368zM136.171 202.424a5.001 5.001 0 01-6.737-1.675L99.803 153.48a5 5 0 011.736-6.985l7.957-4.594a4.999 4.999 0 016.903 1.962l26.413 49.127a5 5 0 01-1.904 6.698l-4.737 2.736z"
      />
      <path
        fill={props.color ? props.color : "#000"}
        d="M105.559 151.076l-6.775-11.734 5.522-3.188 6.775 11.734zM140.589 53.849a5 5 0 011.918 6.671l-26.12 49.296a5 5 0 01-6.918 1.989l-7.957-4.593a5.001 5.001 0 01-1.752-6.961l29.339-47.437a5 5 0 016.752-1.7l4.738 2.735z"
      />
      <path
        fill={props.color ? props.color : "#000"}
        d="M111.426 105.033l-6.775 11.734-5.521-3.188 6.774-11.734z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M105.532 42.646A85.837 85.837 0 0095 42c-35.624 0-66.13 21.916-78.77 53h5.427C34.002 66.746 62.195 47 95 47c2.443 0 4.86.11 7.248.324l3.284-4.678zM10 127c0-1.678.049-3.346.145-5h5.009a81.222 81.222 0 000 10h-5.01a86.397 86.397 0 01-.144-5zm6.23 32c12.64 31.084 43.146 53 78.77 53 3.99 0 7.917-.275 11.761-.807l-2.945-4.673c-2.895.317-5.837.48-8.816.48-32.805 0-60.998-19.746-73.343-48h-5.428zm126.389 38.419a84.781 84.781 0 01-9.205 5.426l-2.679-4.25a79.849 79.849 0 009.216-5.409l2.668 4.233zm19.999-18.906C173.523 164.22 180 146.366 180 127c0-19.342-6.46-37.175-17.341-51.459l-3.024 4.308C169.297 93.07 175 109.369 175 127c0 17.554-5.654 33.787-15.239 46.978l2.857 4.535zM129.865 54.977a79.816 79.816 0 0110.125 5.863l2.874-4.093a84.902 84.902 0 00-10.09-5.913l-2.909 4.143z"
        fill={props.color ? props.color : "#000"}
      />
      <path
        d="M155.333 164.333v23.334L173.667 176l-18.334-11.667zM13.333 150.333v23.334L31.667 162l-18.334-11.667zM97.333 33.333v23.334L115.667 45 97.333 33.333z"
        fill={props.color ? props.color : "#000"}
      />
      <rect
        x={265}
        width={30}
        height={30}
        rx={10}
        fill={props.color ? props.color : "#000"}
      />
      <rect
        x={266}
        y={56}
        width={28}
        height={28}
        rx={10}
        fill={props.color ? props.color : "#000"}
      />
      <rect
        x={267}
        y={112}
        width={26}
        height={26}
        rx={10}
        fill={props.color ? props.color : "#000"}
      />
      <rect
        x={268}
        y={168}
        width={24}
        height={24}
        rx={10}
        fill={props.color ? props.color : "#000"}
      />
      <rect
        x={269}
        y={224}
        width={22}
        height={22}
        rx={10}
        fill={props.color ? props.color : "#000"}
      />
    </svg>
  );
}

const MemoFan = React.memo(Fan);
export default MemoFan;
