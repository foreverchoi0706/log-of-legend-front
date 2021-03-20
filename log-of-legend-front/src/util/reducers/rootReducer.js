import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
//sagas
import navigationReducer, { navigationSaga } from "./navigationReducer";
import searchReducer, { searchSaga } from "./searchReducer";
import ddragonReducer, { ddragonSaga } from "./ddragonReducer";

const rootReducer = combineReducers({
  navigationReducer,
  searchReducer,
  ddragonReducer,
});

export function* rootSaga() {
  yield all([navigationSaga(), searchSaga(), ddragonSaga()]);
}

export default rootReducer;
