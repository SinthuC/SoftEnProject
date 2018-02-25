const initState = {
  loading: false,
  username: '',
  password: '',
  toggleSignIn: false,
  error: false,
  success: true,
  message: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'TOGGLE_SIGN_IN':
      state = { ...state, toggleSignIn: action.payload };
      return state;
    case 'SET_USERNAME':
      state = { ...state, username: action.payload };
      return state;
    case 'SET_PASSWORD':
      state = { ...state, password: action.payload };
      return state;
    case 'SIGN_IN_PENDING':
      state = { ...state, loading: true, error: false };
      return state;
    case 'SIGN_IN_REJECTED':
      state = { ...state, loading: false, error: true, message: "network error.", success: true };
      return state;
    case 'SIGN_IN_FULFILLED':
      state = { ...state, loading: false, error: false, success: action.payload.data.success, message: action.payload.data.message, };
      return state;
    default:
      return state;
  }
};
