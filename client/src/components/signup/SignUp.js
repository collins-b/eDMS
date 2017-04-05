import React, { PropTypes, Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import { addUser } from '../../actions/Signup';

/**
 * @class SignUp
 */
export default class SignUp extends Component {

/**
 * @param {*} props
 */
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      otherNames: '',
      email: '',
      phone: '',
      userName: '',
      password: '',
      role: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.createAccount = this.createAccount.bind(this);
  }

/**
 * @param {*} event
 * @returns {void}
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
    const creds = {
      firstName: this.state.firstName,
      otherNames: this.state.otherNames,
      email: this.state.email,
      phone: this.state.phone,
      userName: this.state.userName,
      password: this.state.password,
      role: this.state.role
    };
    this.props.onSignUpClick(creds);
  }

/**
 * @method render
 * @returns {html} sign up form
 */
  render() {
    const hide = {
      display: 'none'
    }
    const emailTest = /\S+@\S+\.\S+/;
    const passwordStrength = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return (
      <MuiThemeProvider>
        <div className="col-md-6 col-md-offset-4" style={{ marginTop: 68 }}>
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Create Account</h3>
            </div>
            <div className="panel-body">
              <div>
                <TextField
                  hintText="First Name"
                  floatingLabelText="Enter First Name"
                  type="text"
                  fullWidth
                  name="firstName"
                  onChange={this.onInputChange}
                  value={this.state.firstName} />
                <br />
                <TextField
                  hintText="Other Name(s)"
                  floatingLabelText="Enter Your Other Name(s)"
                  type="text"
                  name="otherNames"
                  onChange={this.onInputChange}
                  value={this.state.otherNames}
                  fullWidth
                  required />
                <br />
                <TextField
                  hintText="Email Address"
                  floatingLabelText="Enter Your Email Address"
                  type="email"
                  name="email"
                  onChange={this.onInputChange}
                  value={this.state.email}
                  fullWidth
                  required />
                <br />
                <TextField
                  hintText="Phone Number"
                  floatingLabelText="Enter Your Phone/Telephone Number"
                  type="number"
                  name="phone"
                  onChange={this.onInputChange}
                  value={this.state.phone}
                  fullWidth
                  required />
                <br />
                <TextField
                  hintText="Username"
                  floatingLabelText="Enter Your Username"
                  type="text"
                  name="userName"
                  onChange={this.onInputChange}
                  value={this.state.userName}
                  fullWidth
                  required />
                <br />
                <TextField
                  hintText="Password"
                  floatingLabelText="Create Your Password"
                  type="password"
                  name="password"
                  onChange={this.onInputChange}
                  value={this.state.password}
                  fullWidth
                  required />
                <br />
                <TextField
                  hintText="Role"
                  floatingLabelText="Role"
                  type="text"
                  name="role"
                  onChange={this.onInputChange}
                  value="user"
                  fullWidth
                  style={hide}
                  required />
                <b />
                <RaisedButton
                  label="Create Account"
                  labelPosition="before"
                  primary
                  disabled={!this.state.userName || !this.state.password || !this.state.firstName || !this.state.otherNames ||
                  !this.state.email || !this.state.phone || !emailTest.test(this.state.email) ||
                  !(this.state.password).match(passwordStrength)}
                  onClick={this.createAccount} />
              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }

/**
 * createAccount function
 * @returns {void}
 */
  createAccount() {
    const user = {
      firstName: this.state.firstName,
      otherNames: this.state.otherNames,
      email: this.state.email,
      phone: this.state.phone,
      userName: this.state.userName,
      password: this.state.password,
      role: 'user'
    };
    addUser(user);
  }
}

SignUp.propTypes = {
  onSignUpClick: PropTypes.func.isRequired,
};


module.exports = SignUp;
