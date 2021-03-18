import { put, delay, call, takeLatest, takeEvery } from "redux-saga/effects";
import api from "../api/api";

const SEARCH = "SEARCH";

const SEARCH_DONE = "SEARCH_DONE";

const MATCH_LIST = "MATCH_LIST";

const MATCH_LIST_SUCCESS = "MATCH_LIST_SUCCESS";

const GET_CHAMPIONS = "GET_CHAMPIONS";

const GET_CHAMPIONS_SUCCESS = "GET_CHAMPIONS_SUCCESS";

export const search = (summonerName) => ({ type: SEARCH, summonerName });

const searchDone = (data) => ({ type: SEARCH_DONE, data });

function* handleSearch(action) {
  yield delay(1000);
  const data = yield call(api.summonerInfo, action.summonerName);
  yield put(searchDone(data));
}

export const matchList = (accountId) => ({ type: MATCH_LIST, accountId });

const matchListSuccess = (data) => ({ type: MATCH_LIST_SUCCESS, data });

function* handleMatchList(action) {
  const data = yield call(api.matchList, action.accountId);
  yield put(matchListSuccess(data));
}

export const getChampions = () => ({ type: GET_CHAMPIONS });

const getChampionsSuccess = (data) => ({ type: GET_CHAMPIONS_SUCCESS, data });

function* handleGetChampions() {
  const data = yield call(api.getChampions);
  yield put(getChampionsSuccess(data));
}

export function* searchSaga() {
  yield takeLatest(SEARCH, handleSearch);
  yield takeEvery(MATCH_LIST, handleMatchList);
  yield takeEvery(GET_CHAMPIONS, handleGetChampions);
}

const initialState = {
  result: {
    isSearched: false,
    data: null,
  },
  matchList: {
    isLoaded: false,
    data: null,
  },
  match: {
    isLoaded: false,
    data: null,
  },
  champions: {
    isLoaded: false,
    data: null,
  },
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        result: {
          isSearched: false,
          data: null,
        },
      };
    case SEARCH_DONE:
      return {
        ...state,
        result: {
          isSearched: true,
          data: action.data,
        },
      };
    case MATCH_LIST:
      return {
        ...state,
        matchList: {
          isLoaded: false,
          data: null,
        },
      };
    case MATCH_LIST_SUCCESS:
      return {
        ...state,
        matchList: {
          isLoaded: true,
          data: action.data,
        },
      };
    case GET_CHAMPIONS:
      return {
        ...state,
        champions: {
          isLoaded: false,
          data: null,
        },
      };
    case GET_CHAMPIONS_SUCCESS:
      return {
        ...state,
        champions: {
          isLoaded: true,
          data: action.data,
        },
      };
    default:
      return state;
  }
}
