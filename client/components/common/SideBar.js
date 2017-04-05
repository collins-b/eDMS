import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const SideBar = () => {
  return (
    <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
      <header className="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">eDMS - The Document Handler.</span>
          <div className="mdl-layout-spacer" />
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
            <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <div className="mdl-textfield__expandable-holder">
              <input className="mdl-textfield__input" type="text" id="search" />
              <label className="mdl-textfield__label" htmlFor="search">Search here...</label>
            </div>
          </div>
          <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="hdrbtn">
            <i className="material-icons">more_vert</i>
          </button>
          <ul className="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right" htmlFor="hdrbtn">
            <li className="mdl-menu__item">All</li>
            <li className="mdl-menu__item">Private</li>
            <li className="mdl-menu__item">Analytics</li>
          </ul>
        </div>
      </header>
      <div className="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
        <header className="demo-drawer-header">
         <img src="images/avatar.png" alt="Avatar" className="demo-avatar" />
          <div className="demo-avatar-dropdown">
            <span>Welcome Collo</span>
            <div className="mdl-layout-spacer"></div>
            <button id="accbtn" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
              <i className="material-icons" role="presentation">arrow_drop_down</i>
            </button>
            <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" htmlFor="accbtn">
              <li className="mdl-menu__item">Sign Out</li>
            </ul>
          </div>
        </header>
        <nav className="demo-navigation mdl-navigation mdl-color--blue-grey-800">
          <Link to="/" className="mdl-navigation__link"><i className="fa fa-home fa-1x" />&nbsp; Home</Link>
          <Link to="/login" className="mdl-navigation__link" href=""><i className="fa fa-file fa-1x" />&nbsp; Create Document</Link>
          <Link to="/" className="mdl-navigation__link" href=""><i className="fa fa-sitemap fa-1x" />&nbsp; All Documents</Link>
          <Link className="mdl-navigation__link" href=""><i className="fa fa-newspaper-o fa-1x" />&nbsp; Public Documents</Link>
          <Link to="/" className="mdl-navigation__link" href=""><i className="fa fa-book fa-1x" />&nbsp; Private Documents </Link>
          <Link to="/" className="mdl-navigation__link" href=""><i className="fa fa-gears fa-1x" />&nbsp; Manage Documents</Link>
          <Link to="/" className="mdl-navigation__link" href=""><i className="fa fa-sign-out" />&nbsp; Sign Out</Link>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
