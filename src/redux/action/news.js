import axios from 'axios';
require('dotenv').config();

const getAllNews = () => ({
  type: 'GET_ALL_NEWS',
  payload: axios.get(`${process.env.API_URL}/news/read.php`),
});


export {
  getAllNews
};