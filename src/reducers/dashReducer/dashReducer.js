import { SET_ACTIVE, SET_BORDER, SHOW_SIZE } from "./types";

const initialstate = {
  led: false,
  border: false,
};

const moduleReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SET_ACTIVE:
      return {
        ...state,
        led: !state.led,
      };
    case SET_BORDER:
      return {
        ...state,
        border: !state.border,
      };
    default:
      return state;
  }
};

export default moduleReducer;
