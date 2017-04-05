import axios from 'axios';
import * as token from '../utilities/token';
import * as bot from '../utilities/tokenDecodeBot';
const userId = bot.tokenDecodeBot().id;

const config = {
  headers: { 'x-access-token': token.getToken() }
};

export const FETCH_USERS = 'FETCH_USERS';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';

export function fetchUsers() {
  const request = axios.get('http://localhost:3000/api/users', config);
  return {
    type: FETCH_USERS,
    payload: request
  };
}

export function deleteUser(userId) {
	const request = axios.delete(`http://localhost:3000/api/users/${userId}`, config);
	return {
		type: DELETE_USER,
		payload: request
	};
}

export function updateUser(user) {
	const request = axios.put(`http://localhost:3000/api/users/${userId}`, user, config);
	return {
		type: UPDATE_USER,
		payload: request
	};
}