import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip'

import './user-row.css';

const UserRow = ({ _id, email, givenName, familyName, created, handleUserDeletion, handleUserUpdate }) => (
    <tr>
        <td>{givenName}</td>
        <td>{familyName}</td>
        <td col={3}>{email}</td>
        <td>{new Date(created).toLocaleString()}</td>
        <td className='text-center user-table-actions'>
            <ReactTooltip id='delete-icon' type='error'>
                <span>Delete</span>
            </ReactTooltip>
            <ReactTooltip id='edit-icon' type='warning'>
                <span>Edit</span>
            </ReactTooltip>
            <FaTrashAlt onClick={() => handleUserDeletion(_id)} data-tip data-for='delete-icon' color='red'/>
            <FaEdit onClick={() => handleUserUpdate(_id)} data-tip data-for='edit-icon' color='warn'/>
        </td>
    </tr>
);

export default UserRow;