import { SET_WALL_BACKGROUND } from "./types";

const initialstate = {
  index: null,
  type: "color",
  wallcolor: "#eee",
};

const GlassSELECT_GLASSReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SET_WALL_BACKGROUND:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default GlassSELECT_GLASSReducer;
