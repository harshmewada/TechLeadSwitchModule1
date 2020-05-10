import {
  SELECT_SIZE,
  REMOVE_SIZE,
  PUSH_TO_BOX,
  REMOVE_FROM_BOX,
} from "./types";

const initialstate = {
  index: null,
  Boxes: [],
};

const sizeReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SELECT_SIZE:
      // console.log(action.payload.data.value);
      let NewArray = new Array(action.payload.data.value);
      NewArray.fill(1);
      return {
        index: action.payload.index,
        Boxes: NewArray,
      };
    case REMOVE_SIZE:
      return {
        index: null,
      };

    case PUSH_TO_BOX:
      let BOX = state.Boxes;
      let ITEMINDEX = BOX.indexOf(1);
      BOX[ITEMINDEX] = action.payload.data;

      return {
        ...state,
        Boxes: BOX,
      };
    case REMOVE_FROM_BOX:
    default:
      return state;
  }
};

export default sizeReducer;
