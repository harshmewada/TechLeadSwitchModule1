import { SHOW_SNACKBAR, HIDE_SNACKBAR } from "../reducers/snackReducer/types";

export const ShowSnackBar = (open, type, message) => {
  return {
    type: SHOW_SNACKBAR,
    payload: {
      open: open,
      type: type,
      message: message,
    },
  };
};
export const HideSnackBar = () => {
  return {
    type: HIDE_SNACKBAR,
  };
};
