import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

/**
 *
 */
export default class UsersList extends Component {

/**
 *
 * @param {*} props
 */
  constructor(props) {
    super(props);
    this.state = {
    firstName: this.props.user.firstName,
    otherNames: this.props.user.otherNames,
    email: this.props.user.email,
    phone: this.props.user.phone,
    userName: this.props.user.userName,
    role: this.props.user.role,
    createdAt: new Date(Date.parse(this.props.user.createdAt)).toUTCString().split('GMT'),
    updatedAt: new Date(Date.parse(this.props.user.updatedAt)).toUTCString().split('GMT'),
    }
    }

/**
 *
 * @returns {component} component
 */
  render() {
    return (
      null
    );
  }
}
