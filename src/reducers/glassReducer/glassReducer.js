import {
  SELECT_GLASS,
  REMOVE_GLASS,
  PUSH_TO_BOX,
  REMOVE_FROM_BOX,
} from "./types";

const initialstate = {
  index: 0,
  item: {
    index: 0,
    name: "white",

    value: "white",
    bg:
      "linear-gradient(159.39deg, #FFFFFF -51.91%, #F7F7F7 42.06%, #EEEEEE 42.55%)",
  },
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
    case "RESET":
      return initialstate;
    default:
      return state;
  }
};

export default GlassSELECT_GLASSReducer;
