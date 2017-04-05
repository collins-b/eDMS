import { ADD_USER } from '../actions/Signup';

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_USER:
      return action.payload.data;
    default:
      return state;
  }
}
