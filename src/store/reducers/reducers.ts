import { combineReducers } from '@reduxjs/toolkit';
import userInfoReducer from '../addCapital/addCapitalSlice';

export default combineReducers({
  userInfo: userInfoReducer,
});
