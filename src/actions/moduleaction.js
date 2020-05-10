import { SELECT_MODULE, REMOVE_MODULE } from "../reducers/moduleReducer/types";

export const selectModule = (index) => {
  return {
    type: SELECT_MODULE,
    payload: { index: index },
  };
};
export const removeModule = (index) => {
  return {
    type: REMOVE_MODULE,
    payload: { index: index },
  };
};
