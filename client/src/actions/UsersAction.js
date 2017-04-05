import * as types from './ActionTypes';
import UsersApi from '../api/UsersApi';

export function loadCatsSuccess(users) {
  return { type: types.LOAD_USERS_SUCCESS, users };
}

export function updateCatSuccess(user) {
  return { type: types.UPDATE_USERS_SUCCESS, user };
}

export function createCatSuccess(user) {
  return { type: types.CREATE_USERS_SUCCESS, user };
}

export function deleteCatSuccess(user) {
  return { type: types.DELETE_USERS_SUCCESS, user };
}

export function loadUsers() {
  return function(dispatch) {
    return UsersApi.getAllUsers().then(users => {
      dispatch(loadCatsSuccess(users));
    }).catch(error => {
      throw(error);
    });
  };
}

// export function updateCat(cat) {
//   return function (dispatch) {
//     return catApi.updateCat(cat).then(responseCat => {
//       dispatch(updateCatSuccess(responseCat));
//     }).catch(error => {
//       throw(error);
//     });
//   };
// }

// export function createCat(cat) {
//   return function (dispatch) {
//     return catApi.createCat(cat).then(responseCat => {
//       dispatch(createCatSuccess(responseCat));
//       return responseCat;
//     }).catch(error => {
//       throw(error);
//     });
//   };
// }

// export function deleteCat(cat) {
//   return function(dispatch) {
//     return catApi.deleteCat(cat).then(() => {
//       console.log(`Deleted ${cat.id}`)
//       dispatch(deleteCatSuccess(cat));
//       return;
//     }).catch(error => {
//       throw(error);
//     })
//   }
// }







