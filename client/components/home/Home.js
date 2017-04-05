import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <main className="mdl-layout__content mdl-color--grey-100" style={{ marginLeft: 235, marginTop: 50 }}>
        <div className="mdl-grid demo-content">
          <div className="demo-charts mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="panel panel-primary mdl-shadow--2dp">
                  <div className="panel-heading">
                    <div className="row">
                      <div className="col-xs-3">
                        <i className="fa fa-newspaper-o fa-5x" />
                      </div>
                      <div className="col-xs-9 text-right">
                        <div className="huge">0</div>
                        <div>New Documents</div>
                      </div>
                    </div>
                  </div>
                  <a href="#">
                    <div className="panel-footer">
                      <span className="pull-left">View Details</span>
                      <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
                      <div className="clearfix" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="panel panel-green mdl-shadow--2dp">
                  <div className="panel-heading">
                    <div className="row">
                      <div className="col-xs-3">
                        <i className="fa fa-users fa-5x" />
                      </div>
                      <div className="col-xs-9 text-right">
                        <div className="huge">0</div>
                        <div>Registered Users</div>
                      </div>
                    </div>
                  </div>
                  <a href="#">
                    <div className="panel-footer">
                      <span className="pull-left">View Details</span>
                      <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
                      <div className="clearfix" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="panel panel-yellow mdl-shadow--2dp">
                  <div className="panel-heading">
                    <div className="row">
                      <div className="col-xs-3">
                        <i className="fa fa-files-o fa-5x" />
                      </div>
                      <div className="col-xs-9 text-right">
                        <div className="huge">0</div>
                        <div>Public Documents</div>
                      </div>
                    </div>
                  </div>
                  <a href="#">
                    <div className="panel-footer">
                      <span className="pull-left">View Details</span>
                      <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
                      <div className="clearfix" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="panel panel-success">
                  <div className="panel-heading">
                    <div className="row">
                      <div className="col-xs-3">
                        <i className="fa fa-lock fa-5x" />
                      </div>
                      <div className="col-xs-9 text-right">
                        <div className="huge">0</div>
                        <div>Private Documents</div>
                      </div>
                    </div>
                  </div>
                  <a href="#">
                    <div className="panel-footer">
                      <span className="pull-left">View Details</span>
                      <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
                      <div className="clearfix" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing">
            <div className="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--24-col-tablet mdl-cell--12-col-desktop">
              <div className="mdl-card__title mdl-card--expand mdl-color--teal-300">
                <h2 className="mdl-card__title-text">My first document</h2>
              </div>
              <div className="mdl-card__supporting-text mdl-color-text--grey-600">
                This is my first document in eDMS.
              </div>
              <div className="mdl-card__actions mdl-card--border">
                <a href="#" className="mdl-button mdl-js-button mdl-js-ripple-effect">Read More</a>
              </div>
            </div>
            <div className="demo-separator mdl-cell--1-col" />
          </div>
          <div className="col-lg-12">
            <p className="col-xs-4">hhghdb</p>
            <p className="col-xs-4">hhghdb</p>
            <p className="col-xs-4">hhghdb</p>
          </div>
          <section className="section--footer mdl-color--white mdl-grid">
            <div className="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
              <div className="section__circle-container__circle mdl-color--accent section__circle--big" />
            </div>
            <div className="section__text mdl-cell mdl-cell--4-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
              <h5>Testing title of doc</h5>
              Contents  doc.
            </div>
            <div className="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
              <div className="section__circle-container__circle mdl-color--accent section__circle--big" />
            </div>
            <div className="section__text mdl-cell mdl-cell--4-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
              <h5>Title of doc</h5>
              Contents of doc.
            </div>
          </section>
        </div>
      </main>
    );
  }
}
module.exports = HomePage;
