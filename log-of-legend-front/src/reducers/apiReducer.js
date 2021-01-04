import lolAPI from "../api/lolAPI";

const ROTATIONS = "ROTATIONS";

export const rotations = () => (dispatch) => {
  lolAPI
    .championRotations()
    .then((data) => {
      dispatch({
        type: ROTATIONS,
        data,
      });
    })
    .catch(() => {
      alert("The error occurred in the [rotations]");
    });
};

const apiState = {
  championRotations: {
    isLoaded: false,
    data: [],
  },
};

const apiReducer = (state = apiState, action) => {
  switch (action.type) {
    case ROTATIONS:
      return {
        ...state,
        championRotations: {
          data: action.data,
          isLoaded: true,
        },
      };
    default:
      return state;
  }
};

export default apiReducer;
