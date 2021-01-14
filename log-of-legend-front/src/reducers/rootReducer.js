import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import apiReducer, { saga } from "./apiReducer";

const rootReducer = combineReducers({
  apiReducer,
});

export function* rootSaga() {
  yield all(saga);
}

export default rootReducer;
