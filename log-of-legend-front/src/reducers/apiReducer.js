import { takeEvery, takeLatest } from "redux-saga/effects";
import lolAPI from "../api/lolAPI";

const CHAMPION_ROTATIONS = "CHAMPION_ROTATIONS";

const PLATFORM_DATA = "PLATFORM_DATA";

const MATCH_LIST = "MATCH_LIST";

export const championRaotaions = () => ({ type: CHAMPION_ROTATIONS });

export const platformData = () => ({ type: PLATFORM_DATA });

export const matchList = () => ({ type: MATCH_LIST });

const championRaotaionsSaga = () => (dispatch) => {
  lolAPI
    .championRotations()
    .then((data) => {
      dispatch({
        type: CHAMPION_ROTATIONS,
        data,
      });
    })
    .catch(() => {
      alert("The error occurred in the [championRaotaions]");
    });
};

const platformDataSaga = () => (dispatch) => {
  lolAPI
    .platformData()
    .then((data) => {
      dispatch({
        type: PLATFORM_DATA,
        data,
      });
    })
    .catch(() => {
      alert("The error occurred in the [platformData]");
    });
};

export function* saga() {
  yield takeEvery(CHAMPION_ROTATIONS, championRaotaionsSaga);
  yield takeEvery(PLATFORM_DATA, platformDataSaga);
}

const apiState = {
  championRotations: {
    isLoaded: false,
    data: [],
  },
  platformData: {
    isLoaded: false,
    data: {},
  },
};

const apiReducer = (state = apiState, action) => {
  switch (action.type) {
    case CHAMPION_ROTATIONS:
      return {
        ...state,
        championRotations: {
          isLoaded: true,
          data: action.data,
        },
      };
    case PLATFORM_DATA:
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

export default apiReducer;
