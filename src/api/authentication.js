import api from './index';

class Authentication {
  static login(data) {
    return api
      .post('/login', data)
      .then((result) => {
        console.log('Authentication -> login -> result', result);
        const { data } = result;
        console.log('Authentication -> login -> data.token', data.data.token);
        window.localStorage.setItem('authorization', data.data.token);
      })
      .catch(console.log);
  }

  static register(data) {
    return api.post('/register', data).then((result) => {
      console.log('Authentication -> register -> result', result);
    });
  }
}

export default Authentication;
