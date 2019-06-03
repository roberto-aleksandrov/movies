import { createAsyncActionType } from '../../../utilities';

export const GET_USERS = createAsyncActionType('GET_USERS');

export const GET_USER_BY_ID = createAsyncActionType('GET_USER_BY_ID');

export const UPDATE_USER = createAsyncActionType('UPDATE_USER');

export const DELETE_USER = createAsyncActionType('DELETE_USER');

export const CREATE_USER = createAsyncActionType('CREATE_USER');
