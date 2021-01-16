import { put, delay, call, takeLatest } from "redux-saga/effects";
import lolAPI from "../api/lolAPI";

const SEARCH = "SEARCH";

const SEARCH_DONE = "SEARCH_DONE";

const SEARCH_NONE = "SEARCH_NONE";

export const search = (keyword) => ({ type: SEARCH, keyword });

const searchDone = (data) => ({ type: SEARCH_DONE, data });

const searchNone = (error) => ({ type: SEARCH_NONE });

function* AAA(action) {
  yield delay(1000);
  try {
    const data = yield call(lolAPI.searchSummoner, action.keyword);
    yield put(searchDone(data));
  } catch (error) {
    yield put(searchNone());
  }
}

export function* searchSaga() {
  yield takeLatest(SEARCH, AAA);
}

const initialState = {
  result: {
    isSearched: false,
    data: null,
  },
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return {
        result: {
          isSearched: false,
          data: null,
        },
      };
    case SEARCH_DONE:
      return {
        result: {
          isSearched: true,
          data: action.data,
        },
      };
    case SEARCH_NONE:
      return {
        result: {
          isSearched: true,
          data: null,
        },
      };
    default:
      return state;
  }
}
