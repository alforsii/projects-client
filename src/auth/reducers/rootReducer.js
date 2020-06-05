import { combineReducers } from 'redux';

import { postReducer } from './postReducer';
import { authReducer } from './authReducer';
import { projectReducer } from './projectReducer';

export const rootReducer = combineReducers({
  postReducer,
  authReducer,
  projectReducer,
});
