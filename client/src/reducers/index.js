// import { combineReducers } from 'redux';
// import users from './UserReducer';

// const rootReducer = combineReducers({
//   // short hand property names
//   users,
// });

import { combineReducers } from 'redux';
import AuthReducer from './auth_reducer';
import DocumentsReducer from './DocumentReducer';
import docReducer from './docReducer';
import quotesApp from './AuthReducer';
import Signup from './SignupReducer';
import UserReducer from './UserReducer';

 const rootReducer = combineReducers({
   auth: AuthReducer,
   posts: DocumentsReducer,
   documents: docReducer,
   quotesApp,
   Signup,
   UserReducer
 });

export default rootReducer;
