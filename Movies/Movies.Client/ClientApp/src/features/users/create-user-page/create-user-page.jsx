import React, { Component } from 'react';
import { connect } from 'react-redux';

import UpsertUserForm from '../components/upsert-user-form';
import { createUser } from '../actions';
import { CreateUserValidationSchema } from '../utilities';

class CreateUserPage extends Component { 

    handleSubmit = (data) => {
        this.props.createUser(data);
    }

    render() {
        return  (
            <UpsertUserForm 
                title='Create User'
                handleSubmit={this.handleSubmit}
                validationSchema={CreateUserValidationSchema}
                initialValues={{email: '', givenName: '', familyName: ''}}
            />
        )
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    createUser: (data) => dispatch(createUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserPage);