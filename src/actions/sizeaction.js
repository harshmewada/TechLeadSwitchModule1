import {
  SELECT_SIZE,
  REMOVE_SIZE,
  PUSH_TO_BOX,
  SET_MOVE,
  SET_RESIZE,
  SET_EDIT,
  REMOVE_FROM_BOX,
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

export const removeFromBOx = (index) => {
  return {
    type: REMOVE_FROM_BOX,
    payload: index,
  };
};
export const handleEdit = () => {
  return {
    type: SET_EDIT,
  };
};
