import { SET_WALL_BACKGROUND } from "../reducers/wallReducer/types";

export const setWallColorAction = (type, data) => {
  return {
    type: SET_WALL_BACKGROUND,
    payload: { type: type, wallcolor: data },
  };
};
