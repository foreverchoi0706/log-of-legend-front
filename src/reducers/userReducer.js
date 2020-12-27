const INPUTED = "INPUTED";

const UNINPUTED = "UNINPUTED";

export const inputed = () => ({
  type: INPUTED,
});

export const unInputed = () => ({
  type: UNINPUTED,
});

const userState = {
  isInputed: false,
};

const userReducer = (state = userState, action) => {
  switch (action.type) {
    case INPUTED:
      return {
        ...state,
        isInputed: true,
      };
    case UNINPUTED:
      return {
        ...state,
        isInputed: false,
      };
    default:
      return state;
  }
};

export default userReducer;
