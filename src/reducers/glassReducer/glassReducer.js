import {
  SELECT_GLASS,
  REMOVE_GLASS,
  PUSH_TO_BOX,
  REMOVE_FROM_BOX,
} from "./types";

const initialstate = {
  index: null,
  item: null,
};

const GlassSELECT_GLASSReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SELECT_GLASS:
      // console.log(action.payload.data.value);
      // let NewArray = new Array(action.payload.data.value);
      // NewArray.fill(1);
      return {
        index: action.payload.index,
        item: action.payload.item,
        // Boxes: NewArray,
      };
    case REMOVE_GLASS:
      return {
        index: null,
        item: null,
      };

    default:
      return state;
  }
};

export default GlassSELECT_GLASSReducer;
