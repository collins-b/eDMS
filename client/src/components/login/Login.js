import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import { connect } from 'react-redux';

// const Login = () => {
export default class Login extends Component {

/**
 * @param {*} props
 */
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

/**
 * @param {*} event
 *
 * @returns {void} void
 */
  onInputChange(event) {
    const field = event.target.name;
    const value = event.target.value;
    this.setState({ [field]: value });
  }

/**
 * @param {*} event
 *
 * @returns {void} void
 */
  handleClick(event) {
    const creds = { username: this.state.userName, password: this.state.password };
    this.props.onLoginClick(creds);
  }

/**
 *@returns {html} login form
 */
  render() {
    const style = {
      margin: 12,
    };
    const errorMessage = this.props;
    const dispatch = this.props;
    const isAuthenticated = this.props;
    return (
      <MuiThemeProvider>
        <div className="col-md-6 col-md-offset-3" style={{ marginTop: 80 }}>
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">To explore more,Please Sign In</h3>
            </div>
            <div className="panel-body">
              <div>
                <TextField
                  hintText="Username"
                  floatingLabelText="Enter Username"
                  type="text"
                  fullWidth
                  name="userName"
                  onChange={this.onInputChange}
                  value={this.state.userName}
                />
                <br />
                <TextField
                  hintText="Password"
                  floatingLabelText="Enter Your Password"
                  type="password"
                  name="password"
                  onChange={this.onInputChange}
                  value={this.state.password}
                  fullWidth
                  required
                />
                <br />
                <RaisedButton
                  label="Login"
                  labelPosition="before"
                  primary
                  style={style}
                  disabled={!this.state.userName || !this.state.password}
                  onClick={event => this.handleClick(event)}
                />
                {this.props.auth.auth.errorMessage &&
                <div className="alert alert-danger"><i style={{ color: 'red' }}><i className="fa fa-warning" /> Access Denied!Check your username or password</i></div>
                }
              </div>
              <Divider />
              <b>Don't have account?</b><Link to="/signup"> <i className="fa fa-user" /><FlatButton label="Create One" primary /></Link>
            </div>
          </div>
        </div>
      </MuiThemeProvider>

    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.quotesApp
  };
}

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  isAuthenticated: PropTypes.bool
};

module.exports = connect(mapStateToProps)(Login);
