
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import addUser from '../actions/Signup';
import SignUp from '../components/signup/SignUp';


class SignupContainer extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <SignUp
          dispatch={dispatch}
          onSignUpClick={creds => dispatch(addUser(creds))}
        />
      </div>
    )
  }
}

SignupContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    user: state
  };
}

// These props come from the application's
// state when it is started
// function mapStateToProps(state) {

//   const { auth } = state;
//   const { isAuthenticated, errorMessage } = auth;

//   return {
//     isAuthenticated,
//     errorMessage
//   };
// }

export default connect(mapStateToProps)(SignupContainer);
