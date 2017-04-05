import axios from 'axios';
import * as token from '../utilities/token';
import * as bot from '../utilities/tokenDecodeBot';

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const GET_MY_DOC = 'GET_MY_DOC';
export const SEARCH_DOC = 'SEARCH_DOC';


const userId = bot.tokenDecodeBot().id;

const config = {
  headers: { 'x-access-token': token.getToken() }
};

export function fetchItems() {
  const request = axios.get('http://localhost:3000/api/documents');
  return {
    type: FETCH_ITEMS,
    payload: request
  };
}

export function updateItem(item) {
  const request = axios.put(`http://localhost:3000/api/documents/${item.id}`, item, config);
  return {
    type: UPDATE_ITEM,
    payload: request
  };
}

export function deleteItem(itemId) {
  const request = axios.delete(`http://localhost:3000/api/documents/${itemId}`, config);

  return {
    type: DELETE_ITEM,
    payload: request
  };
}

export function addItem(doc) {
  const request = axios.post(`http://localhost:3000/api/users/${userId}/documents`, doc, config);
  return {
    type: ADD_ITEM,
    payload: request
  };
}

export function fetchMyDocs(doc) {
  const request = axios.get(`http://localhost:3000/api/users/${userId}/documents`, doc, config);
  return {
    type: GET_MY_DOC,
    payload: request
  };
}

export function searchDocs(searchTerm) {
  const request = axios.get(`http://localhost:3000/api/search/documents?q=${searchTerm}`, config);
	console.log(request)
  return {
    type: SEARCH_DOC,
    payload: request
  };
}
