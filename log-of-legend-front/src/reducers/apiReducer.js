import lolAPI from "../api/lolAPI";

const CHAMPION_ROTATIONS = "CHAMPION_ROTATIONS";

const PLATFORM_DATA = "PLATFORM_DATA";

export const championRaotaions = () => (dispatch) => {
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

export const platformData = () => (dispatch) => {
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
          data: action.data,
          isLoaded: true,
        },
      };
    case PLATFORM_DATA:
      return {
        ...state,
        platformData: {
          data: action.data,
          isLoaded: true,
        },
      };
    default:
      return state;
  }
};

export default apiReducer;
