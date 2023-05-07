// articleReducers.js

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
  
  export const getAllArticlesReducer = (state = { articles: [] }, action) => {
    switch (action.type) {
      case GET_ALL_ARTICLES_REQUEST:
        return { loading_articles: true }
      case GET_ALL_ARTICLES_SUCCESS:
        return { loading_articles: false, articles: action.payload }
      case GET_ALL_ARTICLES_FAIL:
        return { loading_articles: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const getArticleByIdReducer = (state = { article: {} }, action) => {
    switch (action.type) {
      case GET_ARTICLE_BY_ID_REQUEST:
        return { loading_articles: true }
      case GET_ARTICLE_BY_ID_SUCCESS:
        return { loading_articles: false, article: action.payload }
      case GET_ARTICLE_BY_ID_FAIL:
        return { loading_articles: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const createArticleReducer = (state = { article: {} }, action) => {
    switch (action.type) {
      case CREATE_ARTICLE_REQUEST:
        return { loading_articles: true }
      case CREATE_ARTICLE_SUCCESS:
        return { loading_articles: false, success: true, article: action.payload }
      case CREATE_ARTICLE_FAIL:
        return { loading_articles: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const updateArticleReducer = (state = { article: {} }, action) => {
    switch (action.type) {
      case UPDATE_ARTICLE_REQUEST:
        return { loading_articles: true }
      case UPDATE_ARTICLE_SUCCESS:
        return { loading_articles: false, success: true, article: action.payload }
      case UPDATE_ARTICLE_FAIL:
        return { loading_articles: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const deleteArticleReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_ARTICLE_REQUEST:
        return { loading_articles: true }
      case DELETE_ARTICLE_SUCCESS:
        return { loading_articles: false, success: true }
      case DELETE_ARTICLE_FAIL:
        return { loading_articles: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const getArticlesByUserReducer = (state = { articles: [] }, action) => {
    switch (action.type) {
      case GET_ARTICLES_BY_USER_REQUEST:
        return { loading_articles: true }
      case GET_ARTICLES_BY_USER_SUCCESS:
        return { loading_articles: false, articles: action.payload }
      case GET_ARTICLES_BY_USER_FAIL:
        return { loading_articles: false, error: action.payload }
      default:
        return state
    }
  }
  