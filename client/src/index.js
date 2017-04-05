import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import configureStore from './store/ConfigureStore';
import { loadUsers } from './actions/UsersAction';
import routes from './config/routes';
import reducers from './reducers/';
import TodoList from './containers/doc_list';
import createLogger from 'redux-logger';
import promise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

require('./assets/stylesheets/boot-scss.scss');
require('./assets/stylesheets/login.scss');
require('./assets/stylesheets/login1.scss');
require('./assets/stylesheets/styles.scss');

const logger = createLogger({collapsed: true});
const createStoreWithMiddleware = applyMiddleware(promise, logger, thunkMiddleware)(createStore);
const store = configureStore();
//store.dispatch(loadUsers());

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);

// note replace <Router history={browserHistory} routes={routes} /> instead for <TodoList/>