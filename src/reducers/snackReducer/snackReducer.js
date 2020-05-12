import { SHOW_SNACKBAR, HIDE_SNACKBAR } from "./types";

const initialstate = {
  active: false,
  type: "",
  message: "",
};

const moduleReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SHOW_SNACKBAR:
      return {
        active: action.payload.open,
        type: action.payload.type,
        message: action.payload.message,
      };
    case HIDE_SNACKBAR:
      return {
        active: false,
        type: "",
        message: "",
      };
    default:
      return state;
  }
};

export default moduleReducer;
