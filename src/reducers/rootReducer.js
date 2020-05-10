import counter from "./counter";
import activeModule from "./activemodulereducer/activeReducer";
import sizeModule from "./sizeReducer/sizeReducer";
import module from "./moduleReducer/moduleReducer";
import glassModule from "./glassReducer/glassReducer";
import wallModule from "./wallReducer/wallReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter,
  activeModule,
  sizeModule,
  module,
  glassModule,
  wallModule,
});

export default rootReducer;
