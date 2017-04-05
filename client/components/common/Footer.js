import React, { PropTypes } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className="demo-navigation mdl-navigation ">
        <div className="alert alert-success" style={{ marginLeft: 260, width: 1000 }}>&copy; {currentYear}  | eDMS  | Developed by Collins.</div>
      </footer>
    </div>
  );
};

export default Footer;
