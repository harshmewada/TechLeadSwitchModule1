import {
  SELECT_SIZE,
  REMOVE_SIZE,
  PUSH_TO_BOX,
} from "../reducers/sizeReducer/types";

export const selectSizeModule = (index, data) => {
  return {
    type: SELECT_SIZE,
    payload: { index: index, data: data },
  };
};
export const removeSizeModule = (index) => {
  return {
    type: REMOVE_SIZE,
    payload: { index: index },
  };
};
export const pushToBox = (data) => {
  // console.log("data", data);
  return {
    type: PUSH_TO_BOX,
    payload: { data: data },
  };
};
