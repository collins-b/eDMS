import React, { PropTypes } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const style ={
  position: 'absolute',
  right: 0,
  bottom: 0,
  left: 0,
  padding: 1,
  textAlign: 'center',
  top:691

  }
  return (
    <div style={style}>
      <footer className="demo-navigation mdl-navigation ">
        <div className="alert alert-info" style={{ marginLeft: 260, width: 1200 }}>&copy; {currentYear}  | eDMS  | Developed by Collins.</div>
      </footer>
    </div>
  );
};

export default Footer;
