import axios from 'axios';

const checkAuth = (token) => ({
  type: 'CHECK_AUTH',
  payload: axios.post(
    `http://10.199.66.227/SoftEn2018/Sec01_NMB/api/user/checkauth.php`,
    {
      token: token,
    }
  )
});

const setToken = (token) => ({
  type: 'SET_TOKEN',
  payload: token,
});

const signOut = () => ({
  type: 'SIGN_OUT',
  payload: null,
});

const readByToken = (token) =>({
  type: 'READ_BY_TOKEN',
  payload: axios.post(
    `http://10.199.66.227/SoftEn2018/Sec01_NMB/api/user/readbytoken.php`,
    {
      token: token,
    }
  )
});
export {
  checkAuth,
  setToken,
  signOut,
  readByToken,
};
