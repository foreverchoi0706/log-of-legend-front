const INPUTED = "INPUTED";

const UNINPUTED = "UNINPUTED";

const CLICKED = "CLICKED";

export const inputed = () => ({ type: INPUTED });

export const unInputed = () => ({ type: UNINPUTED });

export const clicked = (name) => ({ type: CLICKED, name });

const interfaceState = {
  inputState: {
    isInputed: false,
  },
  navState: {
    championRotations: false,
    nowRanking: false,
    platformData: false,
  },
};

const interfaceReducer = (state = interfaceState, action) => {
  switch (action.type) {
    case INPUTED:
      return {
        ...state,
        inputState: {
          isInputed: true,
        },
      };
    case UNINPUTED:
      return {
        ...state,
        inputState: {
          isInputed: false,
        },
      };
    case CLICKED:
      return {
        ...state,
        navState: {
          ...interfaceState.navState,
          [action.name]: true,
        },
      };
    default:
      return state;
  }
};

export default interfaceReducer;
