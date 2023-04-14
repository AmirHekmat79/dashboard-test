import axios from 'axios';

const apiConfig = axios.create({
  baseURL: '188.165.126.234:8080/api/',
  headers: {
    'Content-Type': 'application/json',
  },
  auth: {
    username: 'test',
    Password: 'password',
  },
});

export default apiConfig;
