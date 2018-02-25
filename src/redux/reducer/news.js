const initialState = {
  loading: false,
  reponse: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_NEWS_PENDING':
      state = { ...state, loading: true };
      return state;
    case 'GET_ALL_NEWS_FULFILLED':
      state = { ...state, loading: false, reponse: action.payload };
      return state;
    default:
      return state;
  }
};