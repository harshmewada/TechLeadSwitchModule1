import {
  SHOW_CONTACTMODULE,
  SHOW_SHAREMODULE,
  RELOAD_MODULE,
  SHOW_SPECIFICATIONS,
} from "./types";

const initialstate = {
  specs: false,
  reload: false,
  share: false,
  contact: false,
};

const moduleReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SHOW_SPECIFICATIONS:
      return {
        ...state,
        specs: !state.specs,
      };
    case SHOW_CONTACTMODULE:
      return {
        ...state,
        contact: !state.contact,
      };

    case RELOAD_MODULE:
      return {
        ...state,
        reload: !state.reload,
      };
    case SHOW_SHAREMODULE:
      return {
        ...state,
        share: !state.share,
      };
    case "RESET":
      return initialstate;
    default:
      return state;
  }
};

export default moduleReducer;
