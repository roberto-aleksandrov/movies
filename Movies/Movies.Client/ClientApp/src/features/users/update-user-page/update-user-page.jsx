import React, { Component } from 'react';
import { connect } from 'react-redux';
import { equals } from 'ramda';

import UpserUserForm from '../components/upsert-user-form';
import { CreateUserValidationSchema } from '../utilities';
import { getUserById, updateUser } from '../actions';
import { notifyWarning } from '../../../actions';

class UpdateUserPage extends Component { 
    
    componentDidMount() {
        const id = this.props.match.params.id

        this.props.getUserById(id);
    }

    handleSubmit = (data) => {
        const { updateUser, notifyWarning, user } = this.props

        if(equals(data, user)) {
            notifyWarning('No changes detected!');
            return;
        }

        updateUser(data);
    }

    render() {
        const { user } = this.props;
    
        return  (
           <React.Fragment>
            {user && 
                <UpserUserForm
                    isUpdate
                    title='Update User'
                    handleSubmit={this.handleSubmit}
                    validationSchema={CreateUserValidationSchema}
                    initialValues={user} 
                /> 
            }
           </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    user: state.usersReducer.selectedUser
});

const mapDispatchToProps = dispatch => ({
    notifyWarning: (message) => dispatch(notifyWarning(message)),
    getUserById: (id) => dispatch(getUserById(id)),
    updateUser: (data) => dispatch(updateUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUserPage);