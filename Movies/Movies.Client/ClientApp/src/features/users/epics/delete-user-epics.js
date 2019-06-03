import { mergeMap, debounceTime } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { merge, of } from 'rxjs';

import { DELETE_USER } from '../types';
import { deleteUserPending, deleteUserFulfilled, deleteUserRejected } from '../actions';
import { sendApiRequest } from '../../../actions';
import { notifySuccess, notifyError } from '../../../actions';

const requestPayload = payload => ({
    method: 'delete',
    url: `users/${payload}`,
    onSuccess: [deleteUserFulfilled, () => notifySuccess('User successfully deleted!')],
    onError: [deleteUserRejected, notifyError],
});

const requestMeta = { api: 'ajaxApi' };

export const deleteUserEpic$ = action$ => action$.pipe(
    ofType(DELETE_USER.DEFAULT),
    debounceTime(500),
    mergeMap(({payload}) => 
        merge(
            of(deleteUserPending()),
            of(sendApiRequest(requestPayload(payload), requestMeta))
        ))
);