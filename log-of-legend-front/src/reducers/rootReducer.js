import { combineReducers } from "redux";
import interfaceReducer from "./interfaceReducer";
import apiReducer from "./apiReducer";

const rootReducer = combineReducers({
  interfaceReducer,
  apiReducer,
});

export default rootReducer;
