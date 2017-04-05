// import {createStore, applyMiddleware, compose} from 'redux';
// import rootReducer from '../reducers';
// import thunk from 'redux-thunk';
// // import createLogger from 'redux-logger';

// // const logger = createLogger();

// // const configureStore = () => {
// //   return createStore(
// //     rootReducer,
// //     compose(
// //       applyMiddleware(
// //         thunk
// //       ),
// //       window.devToolsExtension && window.devToolsExtension())
// //     );
// // };

// export default configureStore;
// export default function configureStore(initialState) {
//   const finalCreateStore = compose(
//     applyMiddleware(promise),
//     window.devToolsExtension ? window.devToolsExtension() : f => f
//   )(createStore);

//   const store = finalCreateStore(reducer, initialState);

// //   if (module.hot) {
// //     // Enable Webpack hot module replacement for reducers
// //     module.hot.accept('../reducers', () => {
// //       const nextReducer = require('../reducers');
// //       store.replaceReducer(nextReducer);
// //     });
// //   }

//   return store;
// }