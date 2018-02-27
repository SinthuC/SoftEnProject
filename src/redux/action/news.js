import axios from 'axios';

const getNewsByLimit = (start, end) => ({
  type: 'GET_LIMIT_NEWS',
  payload: axios.get(`http://10.199.66.227/SoftEn2018/Sec01_NMB/api/news/read_limit.php?start=${start}&end=${end}`),
});

export {
  getNewsByLimit
};