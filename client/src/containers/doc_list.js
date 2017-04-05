import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchItems, addItem, updateItem, deleteItem, searchDocs } from '../actions/Documents';
import DocumentsList, { CreateDocument } from '../components/documents/DocumentsList';
import Search from '../components/documents/Search';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { default as swal } from 'sweetalert2'
import Snackbar from 'material-ui/Snackbar';
import * as bot from '../utilities/tokenDecodeBot';

//import  from '../components/documents/DocumentsList';

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      owner: owner,
      role: '',
      open:false,

    };
    this.onInputChange = this.onInputChange.bind(this);
    this.addDocument = this.addDocument.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  onInputChange(event){
    const field = event.target.name;
		const value = event.target.value;
    this.setState({[field]: value });
  }

  componentWillMount() {
    this.props.fetchItems();
  }
  renderItems() {
    if (this.props.documents.length === 0) {
      return(
        <li className="list-group-item todo-item empty-todo">No document found</li>
      );
    }
    return this.props.documents.map((document) => {
      return (
        <DocumentsList key={document.id} document={document} updateDocument={this.updateDocument.bind(this)} deleteDoc={this.deleteDoc.bind(this)} />
      );
    });
  }

  state = {
    open: false,
  };
  state = {
      value: 1,
    };
  handleChange(event, index, value) {
    const doc = this.state.role;
    this.state.role = value;
    this.setState({value: doc});
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
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
        onClick={this.addDocument}
        onTouchTap={this.handleClose}
        disabled={!this.state.title || !this.state.content || !this.state.role}
      />,
    ];

    const dispatch  = this.props
    const isAuthenticated = this.props;
    return (
      <ul className="list-group">
        {this.renderItems()}
        <CreateDocument addDocument={this.addDocument.bind(this)} />
        <MuiThemeProvider>
        <div style={{marginLeft:300}}> 
         {isAuthenticated.auth.auth.isAuthenticated && 
         <FloatingActionButton onTouchTap={this.handleOpen} style={createButtonPosition}  >
          <ContentAdd />
        </FloatingActionButton>
         }
        <Dialog
          title="Create Document"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}>
          <div style={{marginLeft:100}}>
          <TextField
          hintText="Title"
          floatingLabelText="Document Title"
          type="text"
          value={this.state.title}
          style={{width:600}}
          onChange={this.onInputChange}
          name="title"
        /><br /><br />
        <TextField
          hintText="Content"
          floatingLabelText="Document Content"
          type="text"
          onChange={this.onInputChange}
          value={this.state.content}
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
        <TextField
          hintText="Owner"
          floatingLabelText="Document Owner"
          type="text"
          onChange={this.onInputChange}
          value={this.state.owner}
          multiLine={true}
          rows={5}
          rowsMax={10}
          style={{width:600}}
          name="owner"
          disabled
        />
      </div>
            </Dialog>
          </div>
          </MuiThemeProvider>
      </ul>
    );
  }

  deleteDoc(id) {
		this.props.deleteItem(id);
	}

  updateDocument(document) {
		console.log(document)
		this.props.updateItem(document);
	}

  addDocument() {
    const doc = {
      title: this.state.title,
      content: this.state.content,
      owner: this.state.owner,
      role: this.state.role,
    };
    addItem(doc)
  }
}

function mapStateToProps(state) {
  return {
    documents: state.documents,
    auth: state.quotesApp
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    documents: documents
  }, dispatch);
}

const owner = bot.tokenDecodeBot().userName;

export default connect(mapStateToProps, {
  fetchItems,
  addItem,
  updateItem,
  deleteItem
})(TodoList);
        