import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers, deleteUser } from '../actions/Users';
import UsersList  from '../components/users/UsersList';
import { default as swal } from 'sweetalert2';
import Snackbar from 'material-ui/Snackbar';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn }
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';

export class UserList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: true,
      height: '300px',
    };
    this.deleteUserInfo = this.deleteUserInfo.bind(this);
  }

  componentWillMount() {
    this.props.fetchUsers();
  }
  renderUsers() {
    if (this.props.users.length === 0) {
      return (
        <li className="list-group-item todo-item empty-todo">No user found</li>
      );
    }
    return this.props.users.map((user) => {
      return (
        <UsersList key={user.id} user={user} />
      );
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div style={{ marginLeft: 250 }}>
          { this.renderUsers()}
          <br /> <br /><br /><br />
          <Table
            height={this.state.height}
            fixedHeader={this.state.fixedHeader}
            fixedFooter={this.state.fixedFooter}
            selectable={this.state.selectable}
            multiSelectable={this.state.multiSelectable}
        >
            <TableHeader
              displaySelectAll={this.state.showCheckboxes}
              adjustForCheckbox={this.state.showCheckboxes}
              enableSelectAll={this.state.enableSelectAll}>
            <TableRow>
              <TableHeaderColumn colSpan="3" tooltip="Current Registered Users" style={{ textAlign: 'center' }}>
                <i className="fa fa-users fa-2x"/> <h7>Current Registered Users</h7>
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="">#</TableHeaderColumn>
              <TableHeaderColumn tooltip="First Name">Full Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="Email Address">Email Address</TableHeaderColumn>
              <TableHeaderColumn tooltip="Email Address">Phone Number</TableHeaderColumn>
              <TableHeaderColumn tooltip="Username">Username</TableHeaderColumn>
              <TableHeaderColumn tooltip="User Role">Role</TableHeaderColumn>
              <TableHeaderColumn tooltip="Suspend User">Suspend</TableHeaderColumn>
              <TableHeaderColumn tooltip="Delete User">Delete</TableHeaderColumn>
            </TableRow>
          </TableHeader>
            <TableBody
              displayRowCheckbox={this.state.showCheckboxes}
              deselectOnClickaway={this.state.deselectOnClickaway}
              showRowHover={this.state.showRowHover}
              stripedRows={this.state.stripedRows}>
              {this.props.users.map( (row, index) => (
                <TableRow key={index} selected={row.selected}>
                  <TableRowColumn>{index + 1}</TableRowColumn>
                  <TableRowColumn>{row.firstName} {row.otherNames}</TableRowColumn>
                  <TableRowColumn>{row.email}</TableRowColumn>
                  <TableRowColumn>{row.phone}</TableRowColumn>
                  <TableRowColumn>{row.userName}</TableRowColumn>
                  <TableRowColumn>{row.role}</TableRowColumn>
                  <TableRowColumn>{<button className="btn btn-warning btn-sm">
                    <i className="fa fa-remove" /></button>}</TableRowColumn>
                  <TableRowColumn tooltip={row.id}>{/* <button onClick={() => this.deleteUserInfo(row.id)} className="btn btn-danger btn-sm">
                    <i className="fa fa-trash" /></button>*/}
                     <FloatingActionButton onClick={() => this.deleteUserInfo(row.id)} mini={true} secondary={true} >
                     <i className="fa fa-trash" />
                    </FloatingActionButton>
                    </TableRowColumn>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </MuiThemeProvider>

    );
  }
  deleteUserInfo(id) {
		this.props.deleteUser(id);
	}

}

function mapStateToProps(state) {
  return {
    users: state.UserReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    users: users
  }, dispatch);
}

export default connect(mapStateToProps, {
  fetchUsers,
  deleteUser
})(UserList);
