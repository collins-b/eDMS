import React from 'react';
import { Link } from 'react-router';
import DocList from '../../containers/doc_list';
import UserList from '../../containers/UsersListContainer';
import { connect } from 'react-redux';
import * as bot from '../../utilities/tokenDecodeBot';

/**
 * HomePage Component
 */
class HomePage extends React.Component {

    /**
     * render
     * @returns {ReactElement} markup
     */
  render() {
    const hidden = {
      display: 'none'
    };
    const activeRole = bot.tokenDecodeBot().role;
    const activeUser = bot.tokenDecodeBot().userName;
    return (
      <div>
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
                          <div>My Documents</div>
                        </div>
                      </div>
                    </div>
                    <a href="/mydocs">
                      <div className="panel-footer">
                        <span className="pull-left">View Details</span>
                        <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
                        <div className="clearfix" />
                      </div>
                    </a>
                  </div>
                </div>
                {activeRole === 'admin' &&
                <div className="col-lg-3 col-md-6">
                  <div className="panel panel-green mdl-shadow--2dp">
                    <div className="panel-heading">
                      <div className="row">
                        <div className="col-xs-3">
                          <i className="fa fa-users fa-5x" />
                        </div>
                        <div className="col-xs-9 text-right">
                          <div className="huge">{this.props.users.length}</div>
                          <div>Registered Users</div>
                        </div>
                      </div>
                    </div>
                    <Link to="/users">
                      <div className="panel-footer">
                        <span className="pull-left">View Details</span>
                        <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
                        <div className="clearfix" />
                      </div>
                    </Link>
                  </div>
                </div>
              }
                <div className="col-lg-3 col-md-6">
                  <div className="panel panel-yellow mdl-shadow--2dp">
                    <div className="panel-heading">
                      <div className="row">
                        <div className="col-xs-3">
                          <i className="fa fa-files-o fa-5x" />
                        </div>
                        <div className="col-xs-9 text-right">
                          <div className="huge">{this.props.documents.length}</div>
                          <div>Public Documents</div>
                        </div>
                      </div>
                    </div>
                    <Link to="/docs">
                      <div className="panel-footer">
                        <span className="pull-left">View Details</span>
                        <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
                        <div className="clearfix" />
                      </div>
                    </Link>
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
                    <Link href="#">
                      <div className="panel-footer">
                        <span className="pull-left">View Details</span>
                        <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
                        <div className="clearfix" />
                      </div>
                    </Link>
                  </div>
                </div>
                {activeRole === 'user' &&
                <div className="col-lg-3 col-md-6">
                  <div className="panel panel-red mdl-shadow--2dp">
                    <div className="panel-heading">
                      <div className="row">
                        <div className="col-xs-3">
                          <i className="fa fa-bug fa-5x" />
                        </div>
                        <div className="col-xs-9 text-right">
                          <div className="huge">{0}</div>
                          <div>Reported Issues</div>
                        </div>
                      </div>
                    </div>
                    <Link to="/">
                      <div className="panel-footer">
                        <span className="pull-left">Report Issue</span>
                        <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
                        <div className="clearfix" />
                      </div>
                    </Link>
                  </div>
                </div>
              }
              </div>
            </div>
          </div>
        </main>
        <div className="col-md-12">
          <DocList />
          <p style={hidden}>
            <UserList />
          </p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    documents: state.documents,
    users: state.UserReducer,
    auth: state.quotesApp
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    documents,
    users
  }, dispatch);
}

module.exports = connect(mapStateToProps)(HomePage);
