import { put, delay, call, takeLatest, takeEvery } from "redux-saga/effects";
import api from "../api/api";

const SEARCH_SUMMONER = "SEARCH_SUMMONER";

const SEARCH_SUMMONER_DONE = "SEARCH_SUMMONER_DONE";

const GET_MATCH_LIST = "GET_MATCH_LIST";

const GET_MATCH_LIST_SUCCESS = "GET_MATCH_LIST_SUCCESS";

const GET_NEXT_MATCH_LIST = "GET_NEXT_MATCH_LIST";

const GET_NEXT_MATCH_LIST_SUCCESS = "GET_NEXT_MATCH_LIST_SUCCESS";

export const search = (summonerName) => ({
  type: SEARCH_SUMMONER,
  summonerName,
});

const searchDone = (data) => ({ type: SEARCH_SUMMONER_DONE, data });

function* searchSummonerSaga(action) {
  yield delay(1000);
  const data = yield call(api.summonerInfo, action.summonerName);
  yield put(searchDone(data));
}

export const matchList = (accountId) => ({ type: GET_MATCH_LIST, accountId });

const matchListSuccess = (data) => ({ type: GET_MATCH_LIST_SUCCESS, data });

function* matchListSaga(action) {
  const data = yield call(api.matchList, action.accountId);
  yield put(matchListSuccess(data));
}

export const nextMatchList = (accountId, beginIndex, endIndex) => ({
  type: GET_NEXT_MATCH_LIST,
  accountId,
  beginIndex,
  endIndex,
});

const nextMatchListSuccess = (data) => ({
  type: GET_NEXT_MATCH_LIST_SUCCESS,
  data,
});

function* nextMatchListSaga(action) {
  const data = yield call(
    api.nextMatchList,
    action.accountId,
    action.beginIndex,
    action.endIndex
  );
  yield put(nextMatchListSuccess(data));
}

export function* searchSaga() {
  yield takeLatest(SEARCH_SUMMONER, searchSummonerSaga);
  yield takeEvery(GET_MATCH_LIST, matchListSaga);
  yield takeEvery(GET_NEXT_MATCH_LIST, nextMatchListSaga);
}

const initialState = {
  summoner: {
    isSearched: false,
    data: null,
  },
  matchList: {
    isLoaded: false,
    data: null,
  },
  nextLoaded: false,
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
    case SEARCH_SUMMONER:
      return {
        ...state,
        summoner: {
          isSearched: false,
          data: null,
        },
      };
    case SEARCH_SUMMONER_DONE:
      return {
        ...state,
        summoner: {
          isSearched: true,
          data: action.data,
        },
      };
    case GET_MATCH_LIST:
      return {
        ...state,
        matchList: {
          isLoaded: false,
          data: null,
        },
      };
    case GET_MATCH_LIST_SUCCESS:
      return {
        ...state,
        matchList: {
          isLoaded: true,
          data: action.data,
        },
      };
    case GET_NEXT_MATCH_LIST:
      return {
        ...state,
        nextLoaded: false,
      };
    case GET_NEXT_MATCH_LIST_SUCCESS:
      return {
        ...state,
        matchList: {
          ...state.matchList,
          data: state.matchList.data.concat(action.data),
        },
        nextLoaded: true,
      };
    default:
      return state;
  }
}
