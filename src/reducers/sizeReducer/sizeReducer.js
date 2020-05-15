import {
  SELECT_SIZE,
  REMOVE_SIZE,
  PUSH_TO_BOX,
  REMOVE_FROM_BOX,
  SET_MOVE,
  SET_EDIT,
} from "./types";

const initialstate = {
  index: null,
  Boxes: [],
  size: 0,
  edit: false,
};

const sizeReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SELECT_SIZE:
      // console.log(action.payload.data.value);
      let NewArray = new Array(action.payload.data.value);
      NewArray.fill(1);
      // console.log(action.payload.data, "size reducer");
      return {
        index: action.payload.index,
        Boxes: NewArray,
        size: action.payload.data.size,
        width: action.payload.data.width,
        maxWidth: action.payload.data.maxWidth,
        name: action.payload.data.name,
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
      let index = action.payload;
      let newBoxes = state.Boxes;
      newBoxes[index] = 1;

      // console.log(index, "remove from box");

      return {
        ...state,
        Boxes: newBoxes,
      };

    case SET_EDIT:
      return {
        ...state,

        edit: !state.edit,
      };
    case "RESET":
      return initialstate;
    default:
      return state;
  }
};

export default sizeReducer;
