export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
import { browserHistory } from 'react-router';

/**
 *
 * @param {*} creds
 * @returns {object} object
 */
function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  };
}

/**
 *
 * @param {*} user
 * @returns {object} object
 */
function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user,
    isRedirect: true
  };
}

/**
 *
 * @param {*} message
 * @returns {object} object
 */
function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  };
}

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

/**
 *
 * requestLogout
 * @returns {object} object
 */
function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  };
}

/**
 *
 * receiveLogin
 * @returns {object} object
 */
function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  };
}

/**
 *
 * loginUser
 * @returns {object} object
 */
export function logoutUser() {
  return (dispatch) => {
    dispatch(requestLogout());
    localStorage.removeItem('id_token');
    dispatch(receiveLogout());
  };
}

/**
 *
 * @param {*} creds
 * @returns {object} object
 */
export default function loginUser(creds) {
  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `userName=${creds.username}&password=${creds.password}`
  };
  return (dispatch) => {
    dispatch(requestLogin(creds));

    return fetch('http://localhost:3000/api/login', config)
      .then(response =>
        response.text().then(user => ({ user, response }))
            ).then(({ user, response }) => {
              if (!response.ok) {
                dispatch(loginError(user));
                return Promise.reject(user);
              }
              localStorage.setItem('id_token', user);
          // Dispatch the success action
              dispatch(receiveLogin(user));
              browserHistory.push('/home');
            })// .catch(err => console.log('Error: ', err));
      .catch((err) => {
        console.log(err);
        dispatch(loginError(err));
      });
  };
}
