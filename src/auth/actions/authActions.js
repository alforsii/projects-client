import { service } from '../services/AuthServices';
import { SIGNUP, LOGIN, LOGOUT, IS_LOGGED_IN } from '../types/authTypes';

export const signup = (data) => (dispatch) => {
  return service
    .post('/signup', data, {
      //   onUploadProgress: (event) => {
      //     progress = Math.round((event.loaded * 100) / event.total);
      //     dispatch(loading('Signing up, please wait...', progress));
      //   },
    })
    .then((response) => {
      return dispatch({ type: SIGNUP, data: response.data });
    })
    .catch((err) => {
      if (err.response && err.response.data) {
        return err.response.data.message;
      } else {
        console.log(err);
        return 'Sorry, something went wrong!';
      }
    });
};
export const login = (data) => (dispatch) => {
  console.log(data);
  return service
    .post('/login', data, {
      //   onUploadProgress: (event) => {
      //     progress = Math.round((event.loaded * 100) / event.total);
      //     dispatch(loading('Signing up, please wait...', progress));
      //   },
    })
    .then((response) => {
      console.log('Output for: login -> response', response);
      return dispatch({ type: LOGIN, data: response.data });
    })
    .catch((err) => {
      console.log(err);
      if (err.response && err.response.data) {
        return err.response.data.message;
      } else {
        return 'Sorry, something went wrong!';
      }
    });
};

export const logout = () => (dispatch) => {
  return service
    .post(
      '/logout',
      {},
      {
        //   onUploadProgress: (event) => {
        //     progress = Math.round((event.loaded * 100) / event.total);
        //     dispatch(loading('Signing up, please wait...', progress));
        //   },
      }
    )
    .then((response) => {
      console.log('Output for: login -> response', response);
      return dispatch({ type: LOGOUT, data: response.data });
    })
    .catch((err) => {
      console.log(err);
      if (err.response && err.response.data) {
        return err.response.data.message;
      } else {
        return 'Sorry, something went wrong!';
      }
    });
};

export const isLoggedIn = () => (dispatch) => {
  console.log('IS_LOGGED_IN');
  service
    .get('/isLoggedIn', {
      //   onUploadProgress: (event) => {
      //     progress = Math.round((event.loaded * 100) / event.total);
      //     dispatch(loading('Signing up, please wait...', progress));
      //   },
    })
    .then((response) => {
      return dispatch({ type: IS_LOGGED_IN, data: response.data });
    })
    .catch((err) => console.log(err));
};

//@desc update loading status
// export const loading = (message, progress) => ({
//   type: LOADING,
//   message,
//   progress,
// });
