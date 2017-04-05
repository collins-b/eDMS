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
import CreateDocuments from '../create/CreateDocument'
import Gravatar from 'react-gravatar';
import * as bot from '../../utilities/tokenDecodeBot';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import { updateItem } from '../../actions/Documents';
import { connect } from 'react-redux';

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

/**
 *
 */
export default class MyDocuments extends Component {

/**
 *
 * @param {*} props
 */
constructor(props) {
    super(props);
    this.state = {
      document:{
      id: this.props.document.id,
      title: this.props.document.title,
      content: this.props.document.content,
      role: this.props.document.role.capitalize(),
      owner: this.props.document.owner.capitalize(),
      createdAt: new Date(Date.parse(this.props.document.createdAt)).toUTCString().split('GMT'),
      expanded: false,
    },
    newDocument:{
      title: '',
      content: '',
      owner: '',
      role: ''
    }
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.updateDocument = this.updateDocument.bind(this);
  }
  /**
 *
 * @param {*} event
 * @returns {object} object
 */
  onInputChange(event) {
    const field = event.target.name;
		const value = event.target.value;
    this.setState({[field]: value });
  }
  state = {
    open: false,
  };
  state = {
      value: 1,
    };

 handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleOpenDelete = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
  
/**
 *
 * @returns {component} component
 */
  render() {
    const editActions = [
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
        onClick={this.updateDocument()}
      />,
    ];

    return(
      <MuiThemeProvider>
      <div className="row" style={{ marginLeft: 250,marginTop:5 }}>
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} style={{marginTop:80}}>
      <Gravatar email={this.props.document.owner} style={{ float: 'left' }} size={50} rating="pg" default="identicon" className="CustomAvatar-image" />
        <CardHeader
          title=""
          subtitle={this.state.document.owner }
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText>
          <Toggle
            toggled={this.state.expanded}
            onToggle={this.handleToggle}
            labelPosition="right"
            label={this.state.document.title}
          />
        </CardText>
        <CardMedia
          expandable={true}
        >
        </CardMedia>
        <CardTitle title={this.state.document.role} subtitle={this.state.document.createdAt} expandable={true} />
        <CardText expandable={true}>
          {this.state.document.content}
          { bot.tokenDecodeBot().userName === this.props.document.owner  && 
         <p><FloatingActionButton onTouchTap={this.handleOpen} mini={true}  >
          <i className="fa fa-edit" />
        </FloatingActionButton>&nbsp;
        <FloatingActionButton onClick={() => this.props.deleteDoc(this.props.document.id)} mini={true} secondary={true} >
          <i className="fa fa-trash" />
        </FloatingActionButton>
        
        </p>
          }
          <br />
          <FlatButton label="Read Less" onTouchTap={this.handleReduce} />
        </CardText>
        <CardActions>
          <FlatButton label="Read More" onTouchTap={this.handleExpand} />
        </CardActions>
      </Card>
      <Dialog
          title="Update Document Details"
          actions={editActions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}>
        <div style={{marginLeft:100}}>
         <TextField
          hintText="Title"
          floatingLabelText="Document Title"
          type="text"
          defaultValue={this.state.document.title}
          style={{width:600}}
          onChange={this.onInputChange}
          name="title"
        /><br /><br />
        <TextField
          hintText="Content"
          floatingLabelText="Document Content"
          type="text"
          onChange={this.onInputChange}
          defaultValue={this.state.document.content}
          multiLine={true}
          rows={5}
          rowsMax={10}
          style={{width:600}}
          name="content"
        />
        <SelectField
          floatingLabelText="Select Access Level"
          value={this.state.role}
          onChange={this.handleChange}>
          <MenuItem value={"public"} primaryText="Public" />
          <MenuItem value={"private"} primaryText="Private" />
        </SelectField>
          </div>
    </Dialog>
      </div>
      </MuiThemeProvider>
    )
  }

  updateDocument(event) {
    const doc = {
      id: this.state.document.id,
      title: this.state.title,
      content: this.state.content,
    };
    updateItem(doc)
  }
  handleChange(event, index, value) {
    const doc = this.state.role;
    this.state.role = value;
    this.setState({value: doc});
  }
}

export class CreateDocument extends Component {

  state = {
    open: false,
  };
state = {
    value: "",
  };

handleChange = (event, index, value) => this.setState({value});

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
  render(){
    const createButtonPosition = {
    position: 'fixed',
    bottom: 0,
    right: 0
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
        onClick={this.props.addDocument}
      />,
    ];
  }
}