import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from './common/Header';
import SideBar from './common/SideBar';
import Footer from './common/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <SideBar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.object.isRequired
};
export default App;
