import { combineReducers } from 'redux';
import users from './UserReducer';

const rootReducer = combineReducers({
  // short hand property names
  users,
});

export default rootReducer;
