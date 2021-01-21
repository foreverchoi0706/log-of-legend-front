import { put, call, takeEvery } from "redux-saga/effects";
import api from "../api/api";

const GET_CHAMPION_ROTATIONS = "GET_CHAMPION_ROTATIONS";

const GET_CHAMPION_ROTATIONS_SUCCESS = "GET_CHAMPION_ROTATIONS_SUCCESS";

const GET_CHALLENGER_RANK = "GET_CHALLENGER_RANK";

const GET_CHALLENGER_RANK_SUCCESS = "GET_CHALLENGER_RANK_SUCCESS";

const GET_PLATFORM_DATA = "GET_PLATFORM_DATA";

const GET_PLATFORM_DATA_SUCCESS = "GET_PLATFORM_DATA_SUCCESS";

export const getChampionRaotaions = () => ({ type: GET_CHAMPION_ROTATIONS });

const getChampionRaotaionsSuccess = (data) => ({
  type: GET_CHAMPION_ROTATIONS_SUCCESS,
  data,
});

export const getChallengerRank = () => ({ type: GET_CHALLENGER_RANK });

const getChallengerRankSuccess = (entries) => ({
  type: GET_CHALLENGER_RANK_SUCCESS,
  entries,
});

export const getPlatformData = () => ({ type: GET_PLATFORM_DATA });

const getPlatformDataSuccess = (data) => ({
  type: GET_PLATFORM_DATA_SUCCESS,
  data,
});

function* getChampionRaotaionsSaga() {
  const entries = yield call(api.getChampionRotations);
  yield put(getChampionRaotaionsSuccess(entries));
}

function* getChallengerRankSaga() {
  const data = yield call(api.getChallengerRank);
  yield put(getChallengerRankSuccess(data));
}

function* getPlatformDataSaga() {
  const data = yield call(api.getPlatformData);
  yield put(getPlatformDataSuccess(data));
}

export function* navigationSaga() {
  yield takeEvery(GET_CHAMPION_ROTATIONS, getChampionRaotaionsSaga);
  yield takeEvery(GET_CHALLENGER_RANK, getChallengerRankSaga);
  yield takeEvery(GET_PLATFORM_DATA, getPlatformDataSaga);
}

const initialState = {
  championRotations: {
    isLoaded: false,
    data: null,
  },
  challengerRank: {
    isLoaded: false,
    entries: null,
  },
  platformData: {
    isLoaded: false,
    data: null,
  },
};

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHAMPION_ROTATIONS_SUCCESS:
      return {
        ...state,
        championRotations: {
          isLoaded: true,
          data: action.data,
        },
      };
    case GET_CHALLENGER_RANK_SUCCESS:
      return {
        ...state,
        challengerRank: {
          isLoaded: true,
          entries: action.entries,
        },
      };
    case GET_PLATFORM_DATA_SUCCESS:
      return {
        ...state,
        platformData: {
          isLoaded: true,
          data: action.data,
        },
      };
    default:
      return state;
  }
};

export default navigationReducer;
