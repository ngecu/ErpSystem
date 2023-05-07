import axios from 'axios';
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

// Action creator for getting all projects
export const getProjects = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PROJECTS_REQUEST });

    const { data } = await axios.get('https://text-image-backend.onrender.com/api/projects');

    dispatch({
      type: GET_PROJECTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROJECTS_FAIL,
      payload: error.response?.data.message || error.message,
    });
  }
};

// Action creator for getting a project by ID
export const getProjectById = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_PROJECT_BY_ID_REQUEST });

    const { data } = await axios.get(`https://text-image-backend.onrender.com/api/projects/${id}`);

    dispatch({
      type: GET_PROJECT_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROJECT_BY_ID_FAIL,
      payload: error.response?.data.message || error.message,
    });
  }
};

// Action creator for creating a project
export const createProject = (projectData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_PROJECT_REQUEST });

    const { data } = await axios.post('https://text-image-backend.onrender.com/api/projects', projectData);

    dispatch({
      type: CREATE_PROJECT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_PROJECT_FAIL,
      payload: error.response?.data.message || error.message,
    });
  }
};

// Action creator for updating a project
export const updateProject = (id, projectData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROJECT_REQUEST });

    const { data } = await axios.put(`https://text-image-backend.onrender.com/api/projects/${id}`, projectData);

    dispatch({
      type: UPDATE_PROJECT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PROJECT_FAIL,
      payload: error.response?.data.message || error.message,
    });
  }
};

// Action creator for deleting a project
export const deleteProject = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PROJECT_REQUEST });

    await axios.delete(`/api/projects/${id}`);

    dispatch({ type: DELETE_PROJECT_SUCCESS });
  } catch (error) {
    dispatch({
      type: DELETE_PROJECT_FAIL,
      payload: error.response?.data.message || error.message,
    });
  }
};


// Action creator for getting projects by user
export const getProjectsByUser = (userId) => async (dispatch) => {
    try {
      dispatch({ type: GET_PROJECTS_BY_USER_REQUEST });
  
      const { data } = await axios.get(`https://text-image-backend.onrender.com/api/projects/user/${userId}`);
  
      dispatch({
        type: GET_PROJECTS_BY_USER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_PROJECTS_BY_USER_FAIL,
        payload: error.response?.data.message || error.message,
      });
    }
  };
  