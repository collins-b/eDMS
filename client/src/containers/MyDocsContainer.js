import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMyDocs, updateItem, deleteItem } from '../actions/Documents';
import MyDocuments from '../components/documents/MyDocuments';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { default as swal } from 'sweetalert2';
import Snackbar from 'material-ui/Snackbar';
import * as bot from '../utilities/tokenDecodeBot';

export class MyDocs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      owner: owner,
      role: '',
      open:false
    };
    this.onInputChange = this.onInputChange.bind(this);
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
    this.props.fetchMyDocs();
  }
  renderItems() {
    if (this.props.documents.length === 0) {
      return(
        <li className="list-group-item todo-item empty-todo">No document found</li>
      );
    }
console.log(this.props.documents.documents)
    return this.props.documents.documents.map((document) => {
      return (
        <MyDocuments key={document.id} document={document} updateDocument={this.updateDocument.bind(this)} deleteDoc={this.deleteDoc.bind(this)} />
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
    console.log(this.state)
    const createButtonPosition = {
    position: 'fixed',
    bottom: 0,
    right: 0
  }; 
  
    const dispatch  = this.props
    const isAuthenticated = this.props;
    return (
      <ul className="list-group">
        {this.renderItems()}
        <MuiThemeProvider>
        <div style={{marginLeft:300}}> 
          </div>
        </MuiThemeProvider>
      </ul>
    );
  }

  deleteDoc(id) {
		this.props.deleteItem(id);
	}

  updateDocument(document) {
		this.props.updateItem(document);
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
  fetchMyDocs,
  updateItem,
  deleteItem
})(MyDocs);
