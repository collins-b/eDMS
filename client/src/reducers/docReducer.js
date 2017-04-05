// import {Map, List, fromJS} from 'immutable';
// import * as actionTypes from '../constants';

// export const INITIAL_DOC_STATE = Map({
//   docList: List(),
//   isFetching: false,
//   document: Map({
//     docContent: Map({
//       title: '',
//       content: '',
//       role: ''
//     }),
//     isUpdatingDoc: false,
//     isShowingDialog: false,
//     confirmDelete: false
//   }),
//   error: null
// });

// export default function(state = INITIAL_DOC_STATE, action) {
//   switch(action.type) {
//   case actionTypes.DOC_GET_REQUEST:
//     return (
//       state.merge(Map({
//         isFetching: true,
//         document: INITIAL_DOC_STATE.getIn(['document']),
//         error: null
//       }))
//     );
//   case actionTypes.DOC_GET_SUCCESS:
//     return (
//       state.merge(Map({
//         isFetching: false,
//         docList: fromJS(action.doc),
//         document: INITIAL_DOC_STATE.getIn(['document']),
//         error: null
//       }))
//     );
//     default:
//     return state;
//   }
// }
import {
	FETCH_ITEMS,
	UPDATE_ITEM,
	DELETE_ITEM,
	ADD_ITEM,
	GET_MY_DOC,
	SEARCH_DOC
} from '../actions/Documents';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
	case FETCH_ITEMS:
	   return action.payload.data;
	case GET_MY_DOC:
	    return action.payload.data;
	case UPDATE_ITEM:
	    return action.payload.data;
	case DELETE_ITEM:
	   return action.payload.data;
	case ADD_ITEM:
	   return action.payload.data;
	case SEARCH_DOC:
	console.log('I am here')
	console.log(action.payload.data)
	   return action.payload.data;
	default:
	   return state;
	}
}
