import {
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAIL,
  GET_PROJECT_BY_ID_REQUEST,
  GET_PROJECT_BY_ID_SUCCESS,
  GET_PROJECT_BY_ID_FAIL,
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_FAIL,
  UPDATE_PROJECT_REQUEST,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAIL,
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAIL,
  GET_PROJECTS_BY_USER_REQUEST,
  GET_PROJECTS_BY_USER_SUCCESS,
  GET_PROJECTS_BY_USER_FAIL,
} from '../constants/projectConstants';

export const getProjectsReducer = (state = { projects: [] }, action) => {
  switch (action.type) {
    case GET_PROJECTS_REQUEST:
      return { loading_projects_projects: true, projects: [] };
    case GET_PROJECTS_SUCCESS:
      return { loading_projects: false, projects: action.payload };
    case GET_PROJECTS_FAIL:
      return { loading_projects: false, error: action.payload };
    default:
      return state;
  }
};

export const getProjectByIdReducer = (state = { project: {} }, action) => {
  switch (action.type) {
    case GET_PROJECT_BY_ID_REQUEST:
      return { loading_projects: true, project: {} };
    case GET_PROJECT_BY_ID_SUCCESS:
      return { loading_projects: false, project: action.payload };
    case GET_PROJECT_BY_ID_FAIL:
      return { loading_projects: false, error: action.payload };
    default:
      return state;
  }
};

export const createProjectReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_PROJECT_REQUEST:
      return { loading_projects: true };
    case CREATE_PROJECT_SUCCESS:
      return { loading_projects: false, success: true, project: action.payload };
    case CREATE_PROJECT_FAIL:
      return { loading_projects: false, error: action.payload };
    default:
      return state;
  }
};

export const updateProjectReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PROJECT_REQUEST:
      return { loading_projects: true };
    case UPDATE_PROJECT_SUCCESS:
      return { loading_projects: false, success: true, project: action.payload };
    case UPDATE_PROJECT_FAIL:
      return { loading_projects: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteProjectReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PROJECT_REQUEST:
      return { loading_projects: true };
    case DELETE_PROJECT_SUCCESS:
      return { loading_projects: false, success: true };
    case DELETE_PROJECT_FAIL:
      return { loading_projects: false, error: action.payload };
    default:
      return state;
  }
};

export const getProjectsByUserReducer = (state = { projects: [] }, action) => {
  switch (action.type) {
    case GET_PROJECTS_BY_USER_REQUEST:
      return { loading_projects: true, projects: [] };
    case GET_PROJECTS_BY_USER_SUCCESS:
      return { loading_projects: false, projects: action.payload };
    case GET_PROJECTS_BY_USER_FAIL:
      return { loading_projects: false, error: action.payload };
    default:
      return state;
  }
};
