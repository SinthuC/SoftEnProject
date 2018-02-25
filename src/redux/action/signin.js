import axios from 'axios';

const onSignIn = (username, password) => ({
  type: 'SIGN_IN',
  payload: axios.post(
    `http://10.199.66.227/SoftEn2018/Sec01_NMB/api/user/signin.php`,
    {
      username: username,
      password: password,
    }
  )
});

const toggleSignIn = (isOpen) => ({
  type: 'TOGGLE_SIGN_IN',
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
  setUsername,
  setPassword,
  onSignIn,
};