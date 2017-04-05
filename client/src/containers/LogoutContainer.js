
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import logoutUser from '../actions/Auth';
import Logout from '../components/login/Logout';


class Logout extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <Logout
          dispatch={dispatch}
          onLogoutClick={dispatch(logoutUser())}
        />
      </div>
    )
  }
}

Logout.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

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

export default connect(mapStateToProps)(Logout);
