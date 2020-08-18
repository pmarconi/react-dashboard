// import { User as userService } from 'services';
import AuthorizationApi from '../../api/authentication';

export const login = (data) => {
  return async function (dispatch, getState) {
    dispatch(request({ data }));
    try {
      const user = await AuthorizationApi.login(data);
      dispatch(success(user));
    } catch (error) {
      console.log('login -> error', error);
      dispatch(failure(error.toString()));
      // dispatch(alertActions.error(error.toString()));
    }
  };

  function request(user) {
    return { type: 'LOGIN_REQUEST', user };
  }
  function success(user) {
    return { type: 'LOGIN_SUCCESS', user };
  }
  function failure(error) {
    return { type: 'LOGIN_FAILURE', error };
  }
};

export const logout = () => {
  // userService.logout();
  return { type: 'LOGOUT' };
};
