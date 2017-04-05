// import { browserHistory } from 'react-router';
// import * as types from '../actions/ActionTypes';
// import initialState from './InitialState';

// export default function userReducer(state = initialState.users, action) {
//   // state variable here reps just an array of courses
//   switch(action.type) {
//     case types.LOAD_USERS_SUCCESS:
//      return Object.assign([], state, action.users);
//     default:
//       return state;
//   }
// }

import { FETCH_USERS, UPDATE_USER } from '../actions/Users';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
	case FETCH_USERS:
		return action.payload.data;
	case UPDATE_USER:
	    return action.payload.data;
	default:
		return state;
	}
}
