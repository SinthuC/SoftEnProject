const signin = (username, password) => ({
  type: 'FETCH_SIGN_IN',
  payload: {
    name: 'Admin',
    role: 'admin',
  },
});

const toggleSignIn = (isOpen) => ({
  type: 'TOGGLE_SIGN_IN',
  payload: !isOpen,
});

const toggleSignUp = (isOpen) => ({
  type: 'TOGGLE_SIGN_UP',
  payload: !isOpen,
});

const setUsername = (username) => ({
  type: 'SET_USERNAME',
  payload: username,
});

const setPassword = (password) => ({
  type: 'SET_PASSWORD',
  payload: password,
});

export {
  toggleSignIn,
  toggleSignUp,
  setUsername,
  setPassword,
};
