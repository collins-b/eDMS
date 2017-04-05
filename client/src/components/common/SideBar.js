import React, { PropTypes, Component } from 'react';
import { Link, IndexLink } from 'react-router';
import { testAction } from '../../actions/index';
import { addRole } from '../../actions/RoleAction';
import { loginUser, logoutUser } from '../../actions/Auth';
import Logout from '../../containers/DocumentsListContainer';
import Dialog from 'material-ui/Dialog';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import jwtDecode from 'jwt-decode';
import * as bot from '../../utilities/tokenDecodeBot';
import Gravatar from 'react-gravatar';
import Divider from 'material-ui/Divider';
import Search from '../../components/documents/Search';

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

class SideBar extends Component{
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      accessLevel: 0,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.addRole = this.addRole.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
onInputChange(event){
    const field = event.target.name;
		const value = event.target.value;
    this.setState({[field]: value });
  }

  handleClickHello() {
    this.props.testAction();
  }
state = {
    open: false,
  };

state = {
    value: 1,
  };
  handleChange(event, index, value) {
    const accessLevel = this.state.accessLevel;
    this.state.accessLevel = value;
    this.setState({value: accessLevel});
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

render() {
  let accessLevel;
  if(this.state.title === 'admin'){
    accessLevel = 1;
  }
  else if(this.state.title === 'user'){
    accessLevel = 2;
  }
  else if(this.state.title === 'guest') {
    accessLevel = 3;
  }
  else {
    accessLevel = '';
  }
const actions = [
  <FlatButton
    label="Cancel"
    primary={true}
    onTouchTap={this.handleClose}
  />,
  <FlatButton
    label="Submit"
    onClick={this.addRole}
    primary={true}
    keyboardFocused={true}
    onTouchTap={this.handleClose}
    disabled={!this.state.title || !this.state.accessLevel}
  />,
];
const { dispatch }  = this.props
const isAuthenticated = this.props;
  return (
      <MuiThemeProvider>
    <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
    <Dialog
          title="Create Roles"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField
          hintText="Title"
          floatingLabelText="Role's Title"
          type="text"
          value={this.state.title}
          style={{width:600}}
          name="title"
          onChange={this.onInputChange}
        /><br /><br />
        <SelectField
          floatingLabelText="Select Level of Access"
          value={this.state.accessLevel}
          name="accessLevel"
          onChange={this.handleChange}>
          <MenuItem value={1} primaryText="High" />
          <MenuItem value={2} primaryText="Medium" />
          <MenuItem value={3} primaryText="Low" />
        </SelectField>
        
    </Dialog>
      <header className="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">eDMS - The Document Handler.</span>
          <div className="mdl-layout-spacer" />
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
          </div>
          {isAuthenticated.auth.auth.isAuthenticated &&
          <Search />
          }
          <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="hdrbtn">
            <i className="material-icons">more_vert</i>
          </button>
           {isAuthenticated.auth.auth.isAuthenticated &&
          <div>
          <ul className="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right" htmlFor="hdrbtn">
            <li className="mdl-menu__item">All</li>
            <li className="mdl-menu__item">Private</li>
            <li className="mdl-menu__item">Analytics</li>
            <hr />
            <Logout />
          </ul>
          </div>
           }
        </div>
      </header>

      <div className="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
       {isAuthenticated.auth.auth.isAuthenticated &&
        <header className="demo-drawer-header">
        <Gravatar className="demo-avatar" email={email} size={100} style={{ float: 'centre' }} rating="pg" default="identicon" />
          <div className="demo-avatar-dropdown">
            <span>Welcome {activeUser.capitalize()}</span>
            <div className="mdl-layout-spacer"></div>
            <button id="accbtn" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
              <i className="material-icons" role="presentation">arrow_drop_down</i>
            </button>
            <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" htmlFor="accbtn">
              <li className="mdl-menu__item"><i className="fa fa-user"></i> <Link to="/profile">Profile</Link> </li>
              <Divider />
              <li className="mdl-menu__item"><Link to="/profile">Sign Out</Link></li>
            </ul>
          </div>
        </header>
       }
        <nav className="demo-navigation mdl-navigation mdl-color--blue-grey-800">
          {isAuthenticated.auth.auth.isAuthenticated &&
          <Link to="/home" className="mdl-navigation__link"><i className="fa fa-home fa-1x" />&nbsp; Home</Link>
          }
           {isAuthenticated.auth.auth.isAuthenticated &&
          <Link to="/docs" className="mdl-navigation__link"><i className="fa fa-file fa-1x" />&nbsp; Create Document</Link>
           }
          {isAuthenticated.auth.auth.isAuthenticated && activeRole === 'admin' &&
          <Link to="#" onTouchTap={this.handleOpen} className="mdl-navigation__link"><i className="fa fa-group fa-1x" />&nbsp; Create Role</Link>
          }
          <Link className="mdl-navigation__link" to="/docs"><i className="fa fa-newspaper-o fa-1x" />&nbsp; Public Documents</Link>
          {isAuthenticated.auth.auth.isAuthenticated &&
          <Link to="/mydocs"  className="mdl-navigation__link"><i className="fa fa-gears fa-1x" />&nbsp; Manage Documents</Link>
          }
         {isAuthenticated.auth.auth.isAuthenticated &&
          <Link to="/home" className="mdl-navigation__link"><i className="fa fa-sign-out" />&nbsp; Sign Out</Link>
         }
        </nav>
      </div>
    </div>
   </MuiThemeProvider>
  );
}

addRole() {
    const role = {
      title: this.state.title,
      accessLevel: this.state.accessLevel,
    };
    addRole(role)
  }

}

function getToken() {
  return window.localStorage;
}

const activeUser = bot.tokenDecodeBot().userName;
const activeRole = bot.tokenDecodeBot().role;
const email = bot.tokenDecodeBot().email;

function mapStateToProps(state) {
  return {
    auth: state.quotesApp,
    documents: state.documents
  };
}

SideBar.propTypes = {
  isAuthenticated: PropTypes.bool,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { loginUser, logoutUser })(SideBar);
