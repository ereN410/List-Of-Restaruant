import { combineReducers } from '@reduxjs/toolkit';
import someReducer from './someReducer';

const rootReducer = combineReducers({
  some: someReducer,

});

export default rootReducer;
