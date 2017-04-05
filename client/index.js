import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import configureStore from './store/ConfigureStore';
import { loadUsers } from './actions/UsersAction';
import routes from './config/routes';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

const store = configureStore();
store.dispatch(loadUsers());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
