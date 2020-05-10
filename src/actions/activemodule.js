import {
  SET_MODULE_ACTIVE,
  REMOVE_MODULE_ACTIVE,
} from "../reducers/activemodulereducer/types";

export const setModuleActive = (e) => {
  return {
    type: SET_MODULE_ACTIVE,
    payload: e,
  };
};
export const removeModuleActive = (e) => {
  return {
    type: REMOVE_MODULE_ACTIVE,
  };
};
