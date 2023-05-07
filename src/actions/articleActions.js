import axios from 'axios'

import {
  GET_ALL_ARTICLES_REQUEST,
  GET_ALL_ARTICLES_SUCCESS,
  GET_ALL_ARTICLES_FAIL,
  GET_ARTICLE_BY_ID_REQUEST,
  GET_ARTICLE_BY_ID_SUCCESS,
  GET_ARTICLE_BY_ID_FAIL,
  CREATE_ARTICLE_REQUEST,
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_FAIL,
  UPDATE_ARTICLE_REQUEST,
  UPDATE_ARTICLE_SUCCESS,
  UPDATE_ARTICLE_FAIL,
  DELETE_ARTICLE_REQUEST,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_FAIL,
  GET_ARTICLES_BY_USER_REQUEST,
  GET_ARTICLES_BY_USER_SUCCESS,
  GET_ARTICLES_BY_USER_FAIL
} from '../constants/articleConstants'

// Get all articles
export const getAllArticles = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_ARTICLES_REQUEST })

    const { data } = await axios.get('https://text-image-backend.onrender.com/api/articles')

    dispatch({
      type: GET_ALL_ARTICLES_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: GET_ALL_ARTICLES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

// Get article by ID
export const getArticleById = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_ARTICLE_BY_ID_REQUEST })

    const { data } = await axios.get(`https://text-image-backend.onrender.com/api/articles/${id}`)

    dispatch({
      type: GET_ARTICLE_BY_ID_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: GET_ARTICLE_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

// Create article
export const createArticle = (article) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_ARTICLE_REQUEST })

    const { data } = await axios.post('https://text-image-backend.onrender.com/api/articles', article)

    dispatch({
      type: CREATE_ARTICLE_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: CREATE_ARTICLE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

// Update article
export const updateArticle = (article) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_ARTICLE_REQUEST })

    const { data } = await axios.put(`https://text-image-backend.onrender.com/api/articles/${article._id}`, article)

    dispatch({
      type: UPDATE_ARTICLE_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: UPDATE_ARTICLE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

// Delete article
export const deleteArticle = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_ARTICLE_REQUEST })

    await axios.delete(`https://text-image-backend.onrender.com/api/articles/${id}`)

    dispatch({
      type: DELETE_ARTICLE_SUCCESS
    })
  } catch (error) {
    dispatch({
      type: DELETE_ARTICLE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

// Get articles by user
export const getArticlesByUser = (userId) => async (dispatch) => {
    try {
      dispatch({ type: GET_ARTICLES_BY_USER_REQUEST });
  
      const { data } = await axios.get(`https://text-image-backend.onrender.com/api/articles/user/${userId}`);
  
      dispatch({
        type: GET_ARTICLES_BY_USER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ARTICLES_BY_USER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };