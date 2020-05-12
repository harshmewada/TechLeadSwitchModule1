import { SET_ACTIVE, SET_BORDER } from "../reducers/dashReducer/types";

export const toggleSwitchLed = () => {
  return {
    type: SET_ACTIVE,
  };
};
export const toggleBorder = () => {
  return {
    type: SET_BORDER,
  };
};
