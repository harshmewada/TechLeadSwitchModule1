import {
  SELECT_GLASS,
  REMOVE_GLASS,
  // PUSH_TO_BOX,
} from "../reducers/glassReducer/types";

export const selectGlassModule = (index, data) => {
  return {
    type: SELECT_GLASS,
    payload: { index: index, item: data },
  };
};
export const removeGlassModule = (index) => {
  return {
    type: REMOVE_GLASS,
    payload: { index: index },
  };
};
