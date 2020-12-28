import lolAPI from "../api/lolAPI";

const ROTATIONS = "ROTATIONS";

export const rotations = () => (dispatch) => {
  lolAPI
    .championRotations()
    .then((championRotations) => {
      console.log(championRotations);
      dispatch({
        type: ROTATIONS,
        championRotations,
      });
    })
    .catch(() => {
      alert("ERROR");
    });
};

const apiState = {
  championRotations: null,
};

const apiReducer = (state = apiState, action) => {
  switch (state) {
    case ROTATIONS:
      return {
        ...state,
        championRotations: action.championRotations,
      };
    default:
      return state;
  }
};

export default apiReducer;
