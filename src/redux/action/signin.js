import axios from 'axios';
import md5 from 'md5';

const onSignIn = (username, password) => ({
  type: 'SIGN_IN',
  payload: axios.post(
    `http://10.199.66.227/SoftEn2018/Sec01_NMB/api/user/signin.php`,
    {
      username: username,
      password: md5(password),
    }
  )
});

const toggleSignIn = (isOpen) => ({
  type: 'TOGGLE_SIGN_IN',
  payload: !isOpen,
});

const setUsername = (username) => ({
  type: 'SET_SIGN_IN_USERNAME',
  payload: username,
});

const setPassword = (password) => ({
  type: 'SET_SIGN_IN_PASSWORD',
  payload: password,
});

const setRecaptcha = (recaptcha) => ({
  type: 'SET_RECAPTCHA',
  payload: recaptcha,
});

export {
  toggleSignIn,
  setUsername,
  setPassword,
  onSignIn,
  setRecaptcha,
};