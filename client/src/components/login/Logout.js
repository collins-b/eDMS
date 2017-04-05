import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default class Logout extends Component {
    constructor(props) {
    super(props);
    //this.handleClick = this.handleClick.bind(this);
  }


// handleClick() {
//     this.props.onLogoutClick;
//   }
  render() {
    const { onLogoutClick }  = this.props;
    return (
      <button onClick={() => onLogoutClick()} className="btn btn-primary">
        Logout
      </button>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.quotesApp
  };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ onLogoutClick: this.onLogoutClick }, dispatch);
}

Logout.propTypes = {
  onLogoutClick: PropTypes.func.isRequired
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Logout);
