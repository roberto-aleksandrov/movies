import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { merge, of } from 'rxjs';

import { GET_ALL_MOVIES, GET_MOVIE } from '../types';
import { getMoviesPending
    ,getMoviesFulfilled
    ,getMoviesRejected,
    getMoviePending,
    getMovieFulfilled,
    getMovieRejected } from '../actions';
import { sendApiRequest } from '../../../actions';
import { notifyError, notifyWarning } from '../../../actions';

const warnIfNoMovies = response => 
    response.data.length === 0 
    ? notifyWarning('There are no created movies!')
    : getMoviesFulfilled(response)

const getMovieRequestPayload = payload => ({
    method: 'get',
    url: 'movies/getall',
    onSuccess: [warnIfNoMovies],
    onError: [getMoviesRejected, notifyError],
    data: payload
});

const getMovieRequestMeta = { api: 'ajaxApi' };

export const getMoviesEpic$ = (action$, state) => console.log(state) || action$.pipe(
    ofType(GET_ALL_MOVIES.DEFAULT),
    mergeMap(({payload}) => 
        merge(
            of(getMoviesPending()),
            of(sendApiRequest(getMovieRequestPayload(state.value.moviesReducer.pageInfo), getMovieRequestMeta))
    ))
);


const getMovieByIdRequestPayload = payload => ({
    method: 'get',
    url: `movies/getbyid/${payload}`,
    onSuccess: [getMovieFulfilled],
    onError: [getMovieRejected, notifyError],
});

const getMovieByIdRequestMeta = { api: 'ajaxApi' };

export const getMovieByIdEpic$ = action$ => action$.pipe(
    ofType(GET_MOVIE.DEFAULT),
    mergeMap(({payload}) =>
        merge(
            of(getMoviePending()),
            of(sendApiRequest(getMovieByIdRequestPayload(payload), getMovieByIdRequestMeta))
        ))
);