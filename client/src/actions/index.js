import axios from 'axios';
import { TEST_ACTION } from './ActionTypes';

const API_URL = 'http://localhost:3000';

export function testAction() {
  return function(dispatch) {
    axios.get(`${API_URL}/api/documents`)
    .then(response => {
      dispatch({
        type: TEST_ACTION,
        payload: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }
}