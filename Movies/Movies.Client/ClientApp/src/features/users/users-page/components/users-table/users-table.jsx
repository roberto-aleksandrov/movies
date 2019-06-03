import React from 'react';
import { Table } from 'reactstrap';

import UserRow from './user-row';

const UsersTable = ({ users, handleUserDeletion, handleUserUpdate }) => {
    const rows = users.map(user => (
        <UserRow 
            key={user._id} 
            handleUserDeletion={handleUserDeletion} 
            handleUserUpdate={handleUserUpdate} 
            {...user}
        />
    ))

    return (
        <div className='table-responsive'>
        <Table className='users-table' striped bordered>
            <thead className='thead-dark'>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Date Created</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </Table>
        </div>
    )
}

export default UsersTable;