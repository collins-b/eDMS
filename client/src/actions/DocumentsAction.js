import * as actionTypes from './ActionTypes';
import Axios from 'axios';
export function fetchDocumentsRequest() {
  return {
    type: actionTypes.FETCH_DOCUMENTS_REQUEST
  };
}