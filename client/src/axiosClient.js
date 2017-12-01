let axios = require('axios');

let axiosClient = axios.create({
  baseURL: 'http://localhost:3000'
});

export default axiosClient;
