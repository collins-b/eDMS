import { browserHistory } from 'react-router';
import * as types from '../actions/ActionTypes';
import initialState from './InitialState';

export default function userReducer(state = initialState.users, action) {
  // state variable here reps just an array of courses
  switch(action.type) {
    case types.LOAD_USERS_SUCCESS:
     return Object.assign([], state, action.users);
    default:
      return state;
  }
}
