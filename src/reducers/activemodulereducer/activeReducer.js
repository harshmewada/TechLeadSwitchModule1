import { SET_MODULE_ACTIVE, REMOVE_MODULE_ACTIVE } from "./types";

const initialstate = {
  index: null,
};

const activeReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SET_MODULE_ACTIVE:
      return {
        index: action.payload,
      };
    case REMOVE_MODULE_ACTIVE:
      return {
        index: null,
      };

    case "RESET":
      return initialstate;
    default:
      return state;
  }
};

export default activeReducer;
