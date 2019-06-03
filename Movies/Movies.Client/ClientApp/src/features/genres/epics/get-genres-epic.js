import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { merge, of } from 'rxjs';

import { GET_GENRES } from '../types';
import { getGenresPending
    ,getGenresFulfilled
    ,getGenresRejected } from '../actions';
import { sendApiRequest } from '../../../actions';
import { notifyError, notifyWarning } from '../../../actions';

const warnIfNoGenres = response => 
    response.data.length === 0 
    ? notifyWarning('There are no created genres!')
    : getGenresFulfilled(response)

const getGenreRequestPayload = payload => ({
    method: 'get',
    url: 'genres/getall',
    onSuccess: [warnIfNoGenres],
    onError: [getGenresRejected, notifyError],
    data: payload
});

const getGenreRequestMeta = { api: 'ajaxApi' };

export const getGenresEpic$ = action$ => action$.pipe(
    ofType(GET_GENRES.DEFAULT),
    mergeMap(({payload}) => 
        merge(
            of(getGenresPending()),
            of(sendApiRequest(getGenreRequestPayload(payload), getGenreRequestMeta))
        ))
);