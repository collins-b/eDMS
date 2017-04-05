
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import loginUser from '../actions/Auth';
import Login from '../components/login/Login';
import SideBar from '../components/common/SideBar';


class Authenticate extends Component {
  render() {
    const { isAuthenticated, dispatch, errorMessage } = this.props;
    return (
      <div>
      {!isAuthenticated &&
        <Login
          isAuthenticated={isAuthenticated}
          errorMessage={errorMessage}
          dispatch={dispatch}
          onLoginClick={creds => dispatch(loginUser(creds))}
        />
      }
      </div>
    )
  }
}

Authenticate.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
}

// These props come from the application's
// state when it is started
function mapStateToProps(state) {

  const { auth } = state;
  const { isAuthenticated, errorMessage } = auth;

  return {
    isAuthenticated,
    errorMessage
  };
}

export default connect(mapStateToProps)(Authenticate);
