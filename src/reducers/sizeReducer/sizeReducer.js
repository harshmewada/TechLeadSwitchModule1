import {
  SELECT_SIZE,
  REMOVE_SIZE,
  PUSH_TO_BOX,
  REMOVE_FROM_BOX,
  SET_MOVE,
  SET_EDIT,
  SET_SCREENSHOT,
} from "./types";
import uuid from "uuid/dist/v4";
import EmptyIcon from "../../static/Icons/module/EmptyModule";

const initialstate = {
  index: null,
  Boxes: [],
  previewImage: undefined,
  size: 0,
  edit: false,
  selectedSizedata: { moduleList: [] },
};

const emptydata = {
  index: 25,
  name: null,

  icon: EmptyIcon,
  mainIcon: EmptyIcon,
  size: "normal",
};
const sizeReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SELECT_SIZE:
      // console.log(action.payload.data.value);
      // let NewArray = new Array(action.payload.data.value);
      let NewArray = [];
      for (let i = 0; i < action.payload.data.value; i++) {
        NewArray.push({ ...emptydata, id: uuid() });
        // console.log(NewArray);
      }

      // NewArray.fill(emptydata);
      // console.log(action.payload.data, "size reducer");
      return {
        ...state,
        index: action.payload.index,
        Boxes: NewArray,
        selectedSizedata: action.payload.data,
        ...action.payload.data,
      };
    case REMOVE_SIZE:
      return {
        index: null,
      };

    case PUSH_TO_BOX:
      // console.log(
      //   "Filter",

      //   state.Boxes.filter((c) => c.name === null),
      //   "\n",
      //   state.Boxes,
      //   "\n"
      // );
      let card = state.Boxes.filter((c) => c.name === null)[0];
      let BOX = state.Boxes;
      let ITEMINDEX = BOX.indexOf(card);
      // console.log(ITEMINDEX, "itemindex", card);
      BOX[ITEMINDEX] = { ...action.payload.data, id: uuid() };

      return {
        ...state,
        Boxes: BOX,
      };
    case REMOVE_FROM_BOX:
      let index = action.payload;
      let newBoxes = state.Boxes;
      newBoxes[index] = { ...emptydata, id: uuid() };

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

    case SET_SCREENSHOT:
      return {
        ...state,

        previewImage: action.payload,
      };
    case "RESET":
      return initialstate;
    default:
      return state;
  }
};

export default sizeReducer;
