import axios from 'axios';

export const ADD_USER = 'ADD_USER';

export function addUser(user) {
  const request = axios.post('http://localhost:3000/api/users', user);
  return {
    type: ADD_USER,
    payload: request
  };
}
