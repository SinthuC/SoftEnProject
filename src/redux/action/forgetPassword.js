import axios from 'axios';
import md5 from 'md5';

const getUserByUsername = (username) => ({
  type: 'GET_USER',
  payload: axios.post(
    `http://10.199.66.227/SoftEn2018/Sec01_NMB/api/user/readquestion.php`,
    {
      username: username,
    }
  )
});

const setForgetUsername = (username) => ({
  type: 'SET_FORGET_USERNAME',
  payload: username,
});

const setAnswer1 = (ans1) => ({
  type: 'SET_ANSWER_1',
  payload: ans1,
});

const setAnswer2 = (ans2) => ({
  type: 'SET_ANSWER_2',
  payload: ans2,
});

const setAnswer3 = (ans3) => ({
  type: 'SET_ANSWER_3',
  payload: ans3,
});

const setPassword = (password) => ({
  type: 'SET_PASSWORD',
  payload: password,
});

const setCPassword = (cpassword) => ({
  type: 'SET_CPASSWORD',
  payload: cpassword,
});


const increaseFailed = (failed) => ({
  type: 'INCREASE_FAILED',
  payload: failed,
});

const checkAnswer = (username,ans1,ans2,ans3) => ({
  type: 'CHECK_ANSWER',
  payload: axios.post(
    `http://10.199.66.227/SoftEn2018/Sec01_NMB/api/user/checkanswer.php`,
    {
      username: username,
      answer1: ans1,
      answer2: ans2,
      answer3: ans3,
    }
  )

});

const changePassword = (username,password, history) => {
  const promise = axios.post(
    `http://10.199.66.227/SoftEn2018/Sec01_NMB/api/user/changepassword.php`,
    {
      username: username,
      password: md5(password),
    }
  );

  return {
    type: 'CHANGE_PASSWORD',
    payload: promise,
  };
};

export {
  getUserByUsername,
  setForgetUsername,
  setAnswer1,
  setAnswer2,
  setAnswer3,
  setPassword,
  setCPassword,
  checkAnswer,
  changePassword,
  increaseFailed,
};