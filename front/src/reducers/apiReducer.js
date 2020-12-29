import lolAPI from "../api/lolAPI";

const ROTATIONS = "ROTATIONS";

export const rotations = () => (dispatch) => {
  lolAPI
    .championRotations()
    .then((championRotations) => {
      dispatch({
        type: ROTATIONS,
        championRotations,
      });
    })
    .catch(() => {
      alert("The error occurred in the [rotations]");
    });
};





const apiState = {
  championRotations: {
    isLoaded: false,
    freeChampionIds: [],
    freeChampionIdsForNewPlayers: [],
    maxNewPlayerLevel: 0,
  },
};

const apiReducer = (state = apiState, action) => {
  switch (action.type) {
    case ROTATIONS:
      return {
        ...state,
        championRotations: {
          ...action.championRotations,
          isLoaded: true,
        },
      };
    default:
      return state;
  }
};

export default apiReducer;
