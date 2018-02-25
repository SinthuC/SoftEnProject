const toggleSignUp = (isOpen) => ({
  type: 'TOGGLE_SIGN_UP',
  payload: !isOpen,
});

export {
  toggleSignUp,
};