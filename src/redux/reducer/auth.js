const initialState = {
  toggleSignIn: false,
  toggleSignUp: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_SIGN_IN':
      state = { ...state, toggleSignIn: action.payload };
      return state;
    case 'TOGGLE_SIGN_UP':
      state = { ...state, toggleSignUp: action.payload };
      return state;
    default:
      return state;
  }
};
