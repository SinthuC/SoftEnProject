const initState = {
  loading: false,
  togglePolicy: false,
  toggleSuccess: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'TOGGLE_POLICY':
      state = { ...state, togglePolicy: action.payload };
      return state;
    case 'TOGGLE_SUCCESS':
      state = { ...state, toggleSuccess: action.payload };
      return state;
    default:
      return state;
  }
};
