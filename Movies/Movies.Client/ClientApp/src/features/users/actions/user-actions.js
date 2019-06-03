import { GET_USERS, DELETE_USER, GET_USER_BY_ID, UPDATE_USER, CREATE_USER } from '../types';
import { createAsyncActions } from '../../../utilities';

export const {
    getUsers,
    getUsersPending,
    getUsersFulfilled,
    getUsersRejected,
} = createAsyncActions(GET_USERS, 'getUsers');

export const {
    getUserById,
    getUserByIdPending,
    getUserByIdFulfilled,
    getUserByIdRejected,
} = createAsyncActions(GET_USER_BY_ID, 'getUserById');

export const {
    deleteUser,
    deleteUserPending,
    deleteUserFulfilled,
    deleteUserRejected,
} = createAsyncActions(DELETE_USER, 'deleteUser');

export const {
    updateUser,
    updateUserPending,
    updateUserFulfilled,
    updateUserRejected,
} = createAsyncActions(UPDATE_USER, 'updateUser');


export const {
    createUser,
    createUserPending,
    createUserFulfilled,
    createUserRejected,
} = createAsyncActions(CREATE_USER, 'createUser');