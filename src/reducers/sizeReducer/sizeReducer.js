import {
  SELECT_SIZE,
  REMOVE_SIZE,
  PUSH_TO_BOX,
  REMOVE_FROM_BOX,
  SET_MOVE,
  SET_EDIT,
} from "./types";
import uuid from "uuid/dist/v4";
import EmptyIcon from "../../static/Icons/module/EmptyModule";

const initialstate = {
  index: null,
  Boxes: [],
  size: 0,
  edit: false,
};

const emptydata = {
  index: null,
  name: null,
  icon: EmptyIcon,
  mainIcon: EmptyIcon,
  size: "normal",
};
const sizeReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SELECT_SIZE:
      // console.log(action.payload.data.value);
      let NewArray = new Array(action.payload.data.value);
      NewArray.fill(emptydata);
      // console.log(action.payload.data, "size reducer");
      return {
        index: action.payload.index,
        Boxes: NewArray,
        ...action.payload.data,
      };
    case REMOVE_SIZE:
      return {
        index: null,
      };

    case PUSH_TO_BOX:
      let BOX = state.Boxes;
      let ITEMINDEX = BOX.indexOf(emptydata);
      BOX[ITEMINDEX] = { ...action.payload.data, id: uuid() };

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
