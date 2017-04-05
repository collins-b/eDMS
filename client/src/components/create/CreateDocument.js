import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import dialogPolyfill from 'dialog-polyfill';
// mport { Button,Dialog,DialogTitle,DialogActions,DialogContent, Card, CardText } from 'react-mdl';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var injectTapEventPlugin = require("react-tap-event-plugin");
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
injectTapEventPlugin();

export default class CreateDocuments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      owner: '',
      role: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event){
    const field = event.target.name;
		const value = event.target.value;
    this.setState({[field]: value });
  }

  // handleOpenDialog() {
  //   this.setState({
  //     openDialog: true
  //   });
  // }

  // handleCloseDialog() {
  //   this.setState({
  //     openDialog: false
  //   });
  // }

  // state = {
  //   open: false,
  // };

  // handleOpen = () => {
  //   this.setState({open: true});
  // };

  // handleClose = () => {
  //   this.setState({open: false});
  // };
  // render() {
  //   const actions = [
  //     <FlatButton
  //       label="Cancel"
  //       primary={true}
  //       onTouchTap={this.handleClose}
  //     />,
  //     <FlatButton
  //       label="Submit"
  //       primary={true}
  //       keyboardFocused={true}
  //       onTouchTap={this.handleClose}
  //     />,
  //   ];
  //   const createButtonPosition = {
  //   position: 'fixed',
  //   bottom: 0,
  //   right: 0
  // }; 
  // const fontWhite = {
  //   color: 'white',
  //   fontWeight: 700
  // }; 
  // return (
  //   <div>
  //     <section className="site-container padding-tb">
  //       <section className="card wow fadeInLeft">
  //         <h3 className="wow fadeInDown panel-title" data-wow-delay="0.4s"><i className="fa fa-newspaper-o" /> Please Create Your Document</h3>
          
  //           <div className="form__wrapper wow fadeInDown" data-wow-delay="0.5s">
  //             <input type="text" className="form__input" id="doc" name="username" onChange={this.onInputChange}
	// 				 required />
  //             <label className="form__label" htmlFor="doc">
  //               <span className="form__label-content">Document Title</span>
  //             </label>
  //           </div>
  //           <div className="form__wrapper wow fadeInDown" data-wow-delay="0.6s">
  //             <textarea type="text" className="form__input" id="password" name="content" cols="60" required />
  //             <label className="form__label" htmlFor="password">
  //               <span className="form__label-content">Document Contents</span>
  //             </label>
  //           </div>
  //           <div className="form__wrapper wow fadeInDown" data-wow-delay="0.6s">
  //             <select className="form-control" required>
  //               <option value="">Select Document Accessibility</option>
  //               <option value="Public">Public</option>
  //               <option value="Private">Private</option>
  //             </select>
  //           </div>
  //           <div className="form__wrapper--submit wow fadeInLeft" data-wow-delay="0.7s">
  //             <div className="form__input-submit"><button onClick={this.props.addTodo} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent btn-block">
  //               <b style={fontWhite}><i className="fa fa-save" /> Save Your Document</b></button>
  //             </div>
  //           </div>
         
  //       </section>
  //     </section>
  //   </div>
  // );
  render(){
//   return (
//     <MuiThemeProvider>
// <div style={{marginLeft:100}}>
// {this.state.title}
//  <TextField
//           hintText="Title"
//           floatingLabelText="Document Title"
//           type="text"
//           value={this.state.title}
//           style={{width:600}}
//           onChange={this.onInputChange}
//           name="title"
//         /><br /><br />
//         <TextField
//           hintText="Content"
//           floatingLabelText="Document Content"
//           type="text"
//           onChange={this.onInputChange}
//           value={this.state.content}
//           multiLine={true}
//           rows={5}
//           rowsMax={10}
//           style={{width:600}}
//           name="content"
//         />
//         <SelectField
//           floatingLabelText="Select Access Level"
//           name="role"
//           value={this.state.role}
//           onChange={this.onInputChange}>
//           <MenuItem value={"public"} primaryText="Public" />
//           <MenuItem value={"private"} primaryText="Private" />
//         </SelectField>
//         <TextField
//           hintText="Owner"
//           floatingLabelText="Document Owner"
//           type="text"
//           value="user"
//           multiLine={true}
//           rows={5}
//           rowsMax={10}
//           style={{width:600}}
//           name="owner"
//         />
//       </div>
//       </MuiThemeProvider>
//   );
  }
  }
//};

// module.exports = CreateDocument;
