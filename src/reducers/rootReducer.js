import { combineReducers } from 'redux';

import { postReducer } from './postReducer';
import { projectReducer } from './projectReducer';

export const rootReducer = combineReducers({
  postReducer,
  projectReducer,
});
