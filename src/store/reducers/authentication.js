const initialState = {};

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        loggingIn: true,
        user: action.user,
      };
    case 'LOGIN_SUCCESS':
      return {
        loggingIn: false,
        loggedIn: true,
        user: action.user,
      };
    case 'LOGIN_FAILURE':
      return {
        loggingIn: false,
        loggedIn: false,
        user: null,
      };
    case 'LOGOUT':
      return {
        loggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authentication;
