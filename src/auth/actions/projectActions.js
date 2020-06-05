import { service } from '../services/AuthServices';
import {
  GET_PROJECTS,
  ADD_PROJECT,
  UPDATE_PROJECTS,
  DELETE_PROJECTS,
  LOADING,
} from '../types/projectTypes';

export const getProjects = () => (dispatch) => {
  console.log('getProjects');
  service
    .get('/projects')
    .then((response) => {
      console.log('Output for: getProjects -> projects', response);
      return dispatch({ type: GET_PROJECTS, projects: response.data });
    })
    .catch((err) => console.log(err));
};
