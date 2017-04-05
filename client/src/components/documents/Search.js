import React, { Component, PropTypes } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import { connect } from 'react-redux';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { searchDocs } from '../../actions/Documents';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/*const SearchDoc = props => (
  <div>
    <AutoComplete
      hintText="Search here"
      searchText={this.state.searchText}
      onUpdateInput={this.handleUpdateInput}
      onNewRequest={this.handleNewRequest}
      dataSource={docArray}
      filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
      openOnFocus
    /><FloatingActionButton primary mini onClick={() => this.searchDocument(this.state.searchText)} >
      <i className="fa fa-search" />
    </FloatingActionButton>

    <FlatButton
      label="Search" primary
      onTouchTap={(e) => {
        e.preventDefault();
        props.loadDocuments(props.searchTerm);
      }}
    />
  </div>
  );
SearchDoc.PropTypes = {
  dataSource: PropTypes.array.isRequired,
  handleUpdateInput: PropTypes.func.isRequired,
  searchDocument: PropTypes.func.isRequired,
};*/

class Search extends Component {

  state = {
    searchText: '',
  };

  handleUpdateInput = (searchText) => {
    this.setState({
      searchText: searchText,
    });
  };

  handleNewRequest = () => {
    this.setState({
    searchText: '',
   });
   };

  render() {
const docArray = this.props.documents.map(function (doc) { return doc.title; });
    return (
    <MuiThemeProvider>
      <div>
        <AutoComplete
          hintText="Search here"
          searchText={this.state.searchText}
          onUpdateInput={this.handleUpdateInput}
          onNewRequest={this.handleNewRequest}
          dataSource={docArray}
          filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
          openOnFocus={true}
        /><FloatingActionButton primary={true} mini={true} onClick={() => this.searchDocument(this.state.searchText)} >
         <i className="fa fa-search" />
        </FloatingActionButton>
      </div>
      </MuiThemeProvider>
    );
  }
  searchDocument() {
    console.log(this.props)
    searchDocs(encodeURIComponent(this.state.searchText))
    console.log(this.props)
  }
}
function mapStateToProps(state) {
  return {
    auth: state.quotesApp,
    documents: state.documents
  };
}

export default connect(mapStateToProps, {
 searchDocs
})(Search);

