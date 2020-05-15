import activeModule from "./activemodulereducer/activeReducer";
import sizeModule from "./sizeReducer/sizeReducer";
import module from "./moduleReducer/moduleReducer";
import glassModule from "./glassReducer/glassReducer";
import wallModule from "./wallReducer/wallReducer";
import dashModule from "./dashReducer/dashReducer";
import utilModule from "./utilReducer/utilReducer";
import snackModule from "./snackReducer/snackReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  activeModule,
  sizeModule,
  module,
  glassModule,
  dashModule,
  snackModule,
  utilModule,
  wallModule,
});

export default rootReducer;
