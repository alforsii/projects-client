import { GET_PROJECTS } from '../types/projectTypes';

const initialState = {
  projects: [],
};

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.projects,
      };
    default:
      return state;
  }
};
