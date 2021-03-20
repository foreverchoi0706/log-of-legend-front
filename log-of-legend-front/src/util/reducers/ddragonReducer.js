import { put, call, takeEvery } from "redux-saga/effects";
import api from "../api/api";

const GET_DDRAGON = "GET_DDRAGON";

const GET_DDRAGON_SUCCESS = "GET_DDRAGON_SUCCESS";

export const getDdragon = () => ({ type: GET_DDRAGON });

const getDdragonSuccess = (data) => ({ type: GET_DDRAGON_SUCCESS, data });

function* getDdragonSaga() {
  const data = yield call(api.getDdragon);
  yield put(getDdragonSuccess(data));
}

export function* ddragonSaga() {
  yield takeEvery(GET_DDRAGON, getDdragonSaga);
}

const initialState = {
  ddragon: {
    isSearched: false,
    data: {
      champions: null,
      spells: null,
    },
  },
};

export default function ddragonReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DDRAGON:
      return initialState;
    case GET_DDRAGON_SUCCESS:
      return {
        ddragon: {
          isSearched: true,
          data: {
            champions: action.data.champions,
            spells: action.data.spells,
          },
        },
      };
    default:
      return state;
  }
}
