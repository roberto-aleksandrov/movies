import { ofType } from 'redux-observable';
import { mergeMap, debounceTime } from 'rxjs/operators';
import { merge, of } from 'rxjs';
import { push } from 'connected-react-router';

import { CREATE_USER } from '../types';
import { createUserPending, createUserFulfilled, createUserRejected } from '../actions';
import { notifySuccess, notifyError } from '../../../actions';
import { sendApiRequest } from '../../../actions';
import routesConfig from '../../../routes/routes-config';

const onSuccess = [
    createUserFulfilled,
    () => notifySuccess('User successfully created!'),
    () => push(routesConfig.users.path)
];

const onError = [
    createUserRejected,
    notifyError
];

const requestPayload = payload => ({
    method: 'post',
    url: 'users/register',
    onSuccess,
    onError,
    data: payload
});

const requestMeta = { api: 'ajaxApi' };

export const createUserEpic$ = action$ => action$.pipe(
    ofType(CREATE_USER.DEFAULT),
    debounceTime(500),
    mergeMap(({payload}) => 
        merge(
            of(createUserPending()),
            of(sendApiRequest(requestPayload(payload), requestMeta))
        ))
);