import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { merge, of } from 'rxjs';

import { GET_USERS, GET_USER_BY_ID } from '../types';
import { getUsersPending
    ,getUsersFulfilled
    ,getUsersRejected,
    getUserByIdPending,
    getUserByIdFulfilled,
    getUserByIdRejected } from '../actions';
import { sendApiRequest } from '../../../actions';
import { notifyError, notifyWarning } from '../../../actions';

const warnIfNoUsers = response => 
    response.data.length === 0 
    ? notifyWarning('There are no created users!')
    : getUsersFulfilled(response)

const getUserRequestPayload = payload => ({
    method: 'get',
    url: 'users',
    onSuccess: [warnIfNoUsers],
    onError: [getUsersRejected, notifyError],
    data: payload
});

const getUserRequestMeta = { api: 'ajaxApi' };

export const getUsersEpic$ = action$ => action$.pipe(
    ofType(GET_USERS.DEFAULT),
    mergeMap(({payload}) => 
        merge(
            of(getUsersPending()),
            of(sendApiRequest(getUserRequestPayload(payload), getUserRequestMeta))
        ))
);

const getUserByIdRequestPayload = payload => ({
    method: 'get',
    url: `users/${payload}`,
    onSuccess: [getUserByIdFulfilled],
    onError: [getUserByIdRejected, notifyError],
    data: payload
});

const getUserByIdRequestMeta = { api: 'ajaxApi' };

export const getUserByIdEpic$ = action$ => action$.pipe(
    ofType(GET_USER_BY_ID.DEFAULT),
    mergeMap(({payload}) => 
        merge(
            of(getUserByIdPending()),
            of(sendApiRequest(getUserByIdRequestPayload(payload), getUserByIdRequestMeta))
        ))
);