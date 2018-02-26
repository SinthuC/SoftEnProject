const initState = {
  // user: null,
  user: {
    username: "admin",
    admin: false,
    point: 0,
  },
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'SET_AUTH': 
      state = { ...state, user: action.payload}
      return state
    default:
      return state;
  }
};