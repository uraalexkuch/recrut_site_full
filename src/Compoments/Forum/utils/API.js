import axios from 'axios';

export default axios.create({
  baseURL: 'https://donocz.pp.ua/api',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Methods": "PUT, POST, DELETE, GET, PATCH",
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Expose-Headers': 'Content-Range',
  },
});
