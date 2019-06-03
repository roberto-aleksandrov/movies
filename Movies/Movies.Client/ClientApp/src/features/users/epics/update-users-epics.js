import { ofType } from 'redux-observable';
import { mergeMap, debounceTime } from 'rxjs/operators';
import { merge, of } from 'rxjs';
import { push } from 'connected-react-router';

import { UPDATE_USER } from '../types';
import { updateUserPending, updateUserFulfilled, updateUserRejected } from '../actions';
import { notifySuccess, notifyError } from '../../../actions';
import routesConfig from '../../../routes/routes-config';

import { sendApiRequest } from '../../../actions';

const onSuccess = [
    updateUserFulfilled,
    () => notifySuccess('User successfully updated!'),
    () => push(routesConfig.users.path)
];

const onError = [
    updateUserRejected,
    notifyError
];

const requestPayload = ({_id, ...data}) => ({
    method: 'put',
    url: `users/${_id}`,
    onSuccess,
    onError,
    data
});

const requestMeta = { api: 'ajaxApi' };

export const updateUserEpic$ = action$ => action$.pipe(
    ofType(UPDATE_USER.DEFAULT),
    debounceTime(500),
    mergeMap(({payload}) => 
        merge(
            of(updateUserPending()),
            of(sendApiRequest(requestPayload(payload), requestMeta))
        ))
);