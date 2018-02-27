const initState = {
  loading: false,
  news: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'GET_LIMIT_NEWS_PENDING':
      state = { ...state, loading: true };
      return state;
    case 'GET_LIMIT_NEWS_FULFILLED':
      state = { ...state, loading: false, news: action.payload.data.message };
      return state;
    default:
      return state;
  }
};