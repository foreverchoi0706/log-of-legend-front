import { put, call, takeEvery } from "redux-saga/effects";
import lolAPI from "../api/lolAPI";

const GET_CHAMPION_ROTATIONS = "GET_CHAMPION_ROTATIONS";

const GET_CHAMPION_ROTATIONS_SUCCESS = "GET_CHAMPION_ROTATIONS_SUCCESS";

const GET_PLATFORM_DATA = "GET_PLATFORM_DATA";

const GET_PLATFORM_DATA_SUCCESS = "GET_PLATFORM_DATA_SUCCESS";

export const getChampionRaotaions = () => ({ type: GET_CHAMPION_ROTATIONS });

const getChampionRaotaionsSuccess = (data) => ({
  type: GET_CHAMPION_ROTATIONS_SUCCESS,
  data,
});

export const getPlatformData = () => ({ type: GET_PLATFORM_DATA });

const getPlatformDataSuccess = (data) => ({
  type: GET_PLATFORM_DATA_SUCCESS,
  data,
});

function* getChampionRaotaionsSaga() {
  const data = yield call(lolAPI.getChampionRotations);
  yield put(getChampionRaotaionsSuccess(data));
}

function* getPlatformDataSaga() {
  const data = yield call(lolAPI.getPlatformData);
  yield put(getPlatformDataSuccess(data));
}
export function* navigationSaga() {
  yield takeEvery(GET_CHAMPION_ROTATIONS, getChampionRaotaionsSaga);
  yield takeEvery(GET_PLATFORM_DATA, getPlatformDataSaga);
}

const initialState = {
  championRotations: {
    isLoaded: false,
    data: null,
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
