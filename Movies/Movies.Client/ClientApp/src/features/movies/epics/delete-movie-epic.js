import { ofType } from 'redux-observable';
import { mergeMap, debounceTime } from 'rxjs/operators';
import { merge, of } from 'rxjs';

import { DELETE_MOVIE } from '../types';
import { deleteMoviePending, deleteMovieFulfilled, deleteMovieRejected } from '../actions';
import { notifySuccess, notifyError } from '../../../actions';
import { sendApiRequest } from '../../../actions';

const onSuccess = [
    deleteMovieFulfilled,
    () => notifySuccess('Movie successfully deleted!')
];

const onError = [
    deleteMovieRejected,
    notifyError
];

const requestPayload = payload => ({
    method: 'delete',
    url: `movies/delete/${payload}`,
    onSuccess,
    onError,
});

const requestMeta = { api: 'ajaxApi' };

export const deleteMovieEpic$ = action$ => action$.pipe(
    ofType(DELETE_MOVIE.DEFAULT),
    debounceTime(500),
    mergeMap(({payload}) => 
        merge(
            of(deleteMoviePending()),
            of(sendApiRequest(requestPayload(payload), requestMeta))
        ))
);