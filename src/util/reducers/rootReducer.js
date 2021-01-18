import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import navigationReducer, { navigationSaga } from "./navigationReducer";
import searchReducer, { searchSaga } from "./searchReducer";

const rootReducer = combineReducers({
  navigationReducer,
  searchReducer,
});

export function* rootSaga() {
  yield all([navigationSaga(), searchSaga()]);
}

export default rootReducer;
