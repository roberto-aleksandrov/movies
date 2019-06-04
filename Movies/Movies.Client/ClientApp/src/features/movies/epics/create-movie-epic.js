import { ofType } from 'redux-observable';
import { mergeMap, debounceTime } from 'rxjs/operators';
import { merge, of } from 'rxjs';
import { push } from 'connected-react-router';
import moment from 'moment';

import { CREATE_MOVIE } from '../types';
import { createMoviePending, createMovieFulfilled, createMovieRejected } from '../actions';
import { notifySuccess, notifyError } from '../../../actions';
import { sendApiRequest } from '../../../actions';
import routesConfig from '../../../routes/routes-config';

const onSuccess = [
    createMovieFulfilled,
    () => notifySuccess('Movie successfully created!'),
    () => push(routesConfig.movies.path)
];

const onError = [
    createMovieRejected,
    notifyError
];

const requestPayload = payload => ({
    method: 'post',
    url: 'movies/create',
    onSuccess,
    onError,
    data: {...payload, releaseDate: moment(payload.releaseDate).format("YYYY-MM-DD HH:mm:ss"), genreIds: payload.genres}
});

const requestMeta = { api: 'formDataApi' };

export const createMovieEpic$ = action$ => action$.pipe(
    ofType(CREATE_MOVIE.DEFAULT),
    debounceTime(500),
    mergeMap(({payload}) => 
        merge(
            of(createMoviePending()),
            of(sendApiRequest(requestPayload(payload), requestMeta))
        ))
);