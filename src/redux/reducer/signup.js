const initState = {
  loading: false,
  username: '',
  password: '',
  cpassword: '',
  personalId: '',
  toggleSignUp: false,
  error: false,
  success: true,
  message: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'TOGGLE_SIGN_UP':
      state = { ...state, toggleSignUp: action.payload };
      return state;
    default:
      return state;
  }
};
