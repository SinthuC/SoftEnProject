
const togglePolicy = (isOpen) => ({
  type: 'TOGGLE_POLICY',
  payload: !isOpen,
});

const toggleSuccess = (isOpen) => ({
  type: 'TOGGLE_SUCCESS',
  payload: !isOpen,
});

export {
  togglePolicy,
  toggleSuccess,
};