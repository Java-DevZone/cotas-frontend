const axios = require('axios');
const http = axios.create({
  baseURL: 'http://localhost:3000',
});

export default http;
