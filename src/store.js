import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from './reducers/userReducers'

import {
  getProjectsReducer,
  getProjectByIdReducer,
  createProjectReducer,
  updateProjectReducer,
  deleteProjectReducer,
  getProjectsByUserReducer,
} from './reducers/projectReducers';

import {  
  createArticleReducer, 
  updateArticleReducer, 
  deleteArticleReducer, 
  getArticlesByUserReducer, 
  getAllArticlesReducer,
  getArticleByIdReducer} from './reducers/articleReducers';


const reducer = combineReducers({

  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,

  projectList: getProjectsReducer,
  projectDetails: getProjectByIdReducer,
  projectCreate: createProjectReducer,
  projectUpdate: updateProjectReducer,
  projectDelete: deleteProjectReducer,
  projectListByUser: getProjectsByUserReducer,

  articleList: getAllArticlesReducer,
  articleDetails: getArticleByIdReducer,
  articleCreate: createArticleReducer,
  articleUpdate: updateArticleReducer,
  articleDelete: deleteArticleReducer,
  articleListByUser: getArticlesByUserReducer,
  
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
