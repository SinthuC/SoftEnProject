import axios from 'axios';
import bcrypt from 'bcryptjs';

const onSignIn = (username, password) => ({
  type: 'SIGN_IN',
  payload: axios.post(
    `http://10.199.66.227/SoftEn2018/Sec01_NMB/api/user/signin.php`,
    {
      username: username,
      password: bcrypt.hash(password, 10),
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

export {
  toggleSignIn,
  setUsername,
  setPassword,
  onSignIn,
};