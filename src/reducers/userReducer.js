const INPUTED = "INPUTED";

export const inputed = () => ({
  type: INPUTED,
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
    default:
      return state;
  }
};

export default userReducer;
