import { SET_WALL_BACKGROUND } from "./types";

const initialstate = {
  index: null,
  type: "color",
  wallcolor: "#f5f5f5",
};

const GlassSELECT_GLASSReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SET_WALL_BACKGROUND:
      return {
        ...state,
        ...action.payload,
      };
    case "RESET":
      return initialstate;
    default:
      return state;
  }
};

export default GlassSELECT_GLASSReducer;
