import {
  SHOW_SHAREMODULE,
  SHOW_CONTACTMODULE,
  RELOAD_MODULE,
  SHOW_SPECIFICATIONS,
} from "../reducers/utilReducer/types";

export const ShowSpecifications = () => {
  return {
    type: SHOW_SPECIFICATIONS,
  };
};

export const ShowContact = () => {
  return {
    type: SHOW_CONTACTMODULE,
  };
};

export const ShowShare = () => {
  return {
    type: SHOW_SHAREMODULE,
  };
};

export const ReloadApplication = () => {
  return {
    type: RELOAD_MODULE,
  };
};
