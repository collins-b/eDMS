import React from 'react';
import Paper from 'material-ui/Paper';
import Gravatar from 'react-gravatar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as bot from '../../utilities/tokenDecodeBot';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import { updateUser } from '../../actions/Users';

/**
 * Profile
 */
class Profile extends React.Component {

/**
 *
 * @param {*} props
 */
constructor(props) {
    super(props);
    this.state = {
      userInfo:{
      id: bot.tokenDecodeBot().id,
      firstName: bot.tokenDecodeBot().firstName ,
      otherNames: bot.tokenDecodeBot().otherNames ,
      email: bot.tokenDecodeBot().email ,
      phone: bot.tokenDecodeBot().phone ,
      password: bot.tokenDecodeBot().password
    }
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.updateUserInfo = this.updateUserInfo.bind(this);
  }

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  /**
   * render
   * @returns {*} void
   */
  render() {
    const style = {
      height: 500,
      width: 800,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
      marginTop: 80
    };

    const style2 = {
      height: 500,
      width: 700,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
      marginTop: 80
    };

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Save"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
        onClick={this.updateUserInfo()}
      />,
    ];

    return (
      <MuiThemeProvider>
        <div style={{ marginLeft: 320 }} className="alert alert-info">
          <Paper style={style} zDepth={1} rounded={false}>
            <div className="col-md-10">
              <div className="col-md-5">
                <div className="container">
                  <div className="row">
                    <h4>{ bot.tokenDecodeBot().firstName } { bot.tokenDecodeBot().otherNames }</h4>
                    <div className="col-xs-12 col-sm-6 col-md-6" style={style2}>
                      <div className="well well-sm">
                        <div className="row">
                          <div className="col-sm-6 col-md-4">
                            <Gravatar className="demo-avatar" email={bot.tokenDecodeBot().email} size={100} style={{ float: 'centre' }} rating="pg" default="identicon" />
                          </div>
                          <address>
                          <div className="col-sm-6 col-md-8">
                           <i className="fa fa-user" /> { bot.tokenDecodeBot().role }
                            <br /><br />
                            <Divider />
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<i className="fa fa-envelope" /> { bot.tokenDecodeBot().email }
                              <br /> <br />
                              <Divider />
                              &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;<i className="fa fa-phone" /> { bot.tokenDecodeBot().phone }
                              <br /> <br />
                              <Divider />
                              <i className="fa fa-calendar" style={{marginLeft:195}} /> Date Joined: { new Date(Date.parse(bot.tokenDecodeBot().createdAt)).toUTCString().split('GMT') }
                              <br /><br />
                              <Divider />
                            <div className="btn-group">
                              <br />
                              <br />
                              <br />
                              <br />
                              <button className="btn btn-primary" onTouchTap={this.handleOpen}><i className="fa fa-edit" /> Edit Profile</button>
                            </div>
                          </div>
                          </address>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Paper>
          <Dialog
          title="Edit your details"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}>
         <div>
        <TextField
          id="text-field-controlled"
          defaultValue={ bot.tokenDecodeBot().firstName }
          onChange={this.onInputChange}
          name="firstName"
        />
        <br />
        <TextField
          id="text-field-controlled"
          defaultValue={ bot.tokenDecodeBot().otherNames }
          onChange={this.onInputChange}
          name="otherNames"
        />
        <br />
        <TextField
          id="text-field-controlled"
          defaultValue={ bot.tokenDecodeBot().email }
          onChange={this.onInputChange}
          name="email"
        />
        <br />
        <TextField
          id="text-field-controlled"
          defaultValue={ bot.tokenDecodeBot().phone }
          onChange={this.onInputChange}
          name="phone"
        />

        </div>
        </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }

    updateUserInfo() {
    const user = {
      id: this.state.userInfo.id,
      firstName: this.state.firstName,
      otherNames: this.state.otherNames,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password
    };
    updateUser(user)
  }

  onInputChange(event) {
    const field = event.target.name;
		const value = event.target.value;
    this.setState({[field]: value });
  }
}

export default Profile;
