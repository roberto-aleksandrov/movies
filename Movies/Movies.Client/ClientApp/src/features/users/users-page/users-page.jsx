import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';

import UsersTable from './components/users-table';
import { getUsers, deleteUser } from '../actions';

import './users-page.css';

class UsersPage extends Component { 

    componentDidMount() {
        this.props.getUsers();
    }

    handleUserDeletion = (id) => {
        this.props.deleteUser(id);
    }

    handleUserUpdate = (id) => {
        this.props.history.push(`/users/update/${id}`);
    }

    render() {
        const { users } = this.props;
        
        return  (
            <Container className='h-100'>
                {users && users.length > 0 &&
                    <UsersTable 
                        users={users}
                        handleUserDeletion={this.handleUserDeletion}
                        handleUserUpdate={this.handleUserUpdate}
                    />
                }
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    users: state.usersReducer.users
});

const mapDispatchToProps = dispatch => ({
    getUsers: () => dispatch(getUsers()),
    deleteUser: (id) => dispatch(deleteUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);