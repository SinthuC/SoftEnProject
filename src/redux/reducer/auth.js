const initState = {
  loading: false,
  token: localStorage.getItem("token"),
  admin: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      localStorage.setItem("token", action.payload);
      state = { ...state, token: action.payload };
      return state;
    case 'CHECK_AUTH_PENDING':
      state = { ...state, loading: true };
      return state;
    case 'CHECK_AUTH_REJECTED':
      state = { ...state, loading: false };
      return state;
    case 'CHECK_AUTH_FULFILLED':
      if (!action.payload.data.success) {
        localStorage.clear();
        state = { ...state, loading: false, admin: false };
      }
      else {
        state = { ...state, loading: false, admin: action.payload.data.message.admin };
      }
      return state;
    case 'SIGN_OUT':
      state = { ...state, token: action.payload };
      return state;
    default:
      return state;
  }
};