//
import { create } from 'apisauce';

const API_URL = 'http://localhost:3001';

const myStorage = window.localStorage;
const authorization = myStorage.getItem('authorization');
console.log("authorization", authorization)

// define the api
const api = create({
  baseURL: API_URL,
  headers: {
    authorization: authorization,
  },
});

// start making calls
// api
//   .get('/repos/skellock/apisauce/commits')
//   .then(response => response.data[0].commit.message)
//   .then(console.log)

// customizing headers per-request
// api.post('/users', { name: 'steve' }, { headers: { 'x-gigawatts': '1.21' } })

export default api;
