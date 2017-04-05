import React from 'react';
import App from '../components/App';

const ReactRouter = require('react-router');
const HomePage = require('../components/home/Home');
const Login = require('../components/login/Login');
const SignUp = require('../components/signup/SignUp');
// const CreateDocument = require('../components/create/CreateDocument');
import CreateDocument from '../components/create/CreateDocument';
const SideBar = require('../components/common/SideBar');
// const DocumentsList = require('../components/documents/DocumentsList');
import DocumentsList from '../components/documents/DocumentsList';
const Router = ReactRouter.Router;
const hashHistory = ReactRouter.hashHistory;
const Route = ReactRouter.Route;
// const Analytics = require('../components/analytics/Analytics');
const IndexRoute = ReactRouter.IndexRoute;
import DocList from '../containers/doc_list';
import UserList from '../containers/UsersListContainer';
import Authenticate from '../containers/AuthContainer';
import Signup from '../containers/SignupContainer';
import Profile from '../components/profile/ProfilePage';
import MyDocs from '../containers/MyDocsContainer';

const routes = (
   <Router history={hashHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Authenticate} />
    <Route path="home" component={HomePage} />
    <Route path="signup" component={Signup} />
    <Route path="create" component={CreateDocument} />
    <Route path="docs" component={DocList} />
    <Route path="users" component={UserList} />
    <Route path="profile" component={Profile} />
    <Route path="mydocs" component={MyDocs} />
  </Route>
    </Router>

);
module.exports = routes;
