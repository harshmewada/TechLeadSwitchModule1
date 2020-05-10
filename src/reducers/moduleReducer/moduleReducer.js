import { SELECT_MODULE, REMOVE_MODULE } from "./types";

const initialstate = {
  index: null,
};

const moduleReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SELECT_MODULE:
      return {
        index: action.payload.index,
      };
    case REMOVE_MODULE:
      return {
        index: null,
      };
    default:
      return state;
  }
};

export default moduleReducer;
