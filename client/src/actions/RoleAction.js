import axios from 'axios';
import * as token from '../utilities/token';

export const ADD_ROLE = 'ADD_ROLE';

const config = {
  headers: { 'x-access-token': token.getToken() }
};

export function addRole(role) {
  const request = axios.post('http://localhost:3000/api/roles', role, config);
  return {
    type: ADD_ROLE,
    payload: request
  };
}
