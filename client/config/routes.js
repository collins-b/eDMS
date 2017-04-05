import React from 'react';
import App from '../components/App';

const ReactRouter = require('react-router');
const HomePage = require('../components/home/Home');
const Login = require('../components/login/Login');
const SignUp = require('../components/signup/SignUp');
const SideBar = require('../components/common/SideBar');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
// const Analytics = require('../components/analytics/Analytics');
const IndexRoute = ReactRouter.IndexRoute;

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
  </Route>
);

module.exports = routes;
