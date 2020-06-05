import { SIGNUP, LOGIN, LOGOUT, IS_LOGGED_IN } from '../types/authTypes';

const initialState = {
  user: null,
  message: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        user: action.data.user,
        message: action.data.message,
      };
    case LOGIN:
      console.log(state, action);
      return {
        ...state,
        user: action.data.user,
        message: action.data.message,
      };
    case LOGOUT:
      console.log(state, action);
      return {
        ...state,
        user: null,
        message: action.data.message,
      };
    case IS_LOGGED_IN:
      return {
        ...state,
        user: action.data.user,
      };
    default:
      return state;
  }
};
