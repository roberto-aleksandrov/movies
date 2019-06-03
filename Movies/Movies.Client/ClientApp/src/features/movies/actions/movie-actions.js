import { createAction } from 'redux-actions';

import { createAsyncActions } from '../../../utilities';
import { GET_ALL_MOVIES, CREATE_MOVIE, DELETE_MOVIE, GET_MOVIE, UPDATE_MOVIE, CLEAR_MOVIES } from '../types';

export const {
    createMovie,
    createMoviePending,
    createMovieFulfilled,
    createMovieRejected,
} = createAsyncActions(CREATE_MOVIE, 'createMovie');

export const {
    getMovies,
    getMoviesPending,
    getMoviesFulfilled,
    getMoviesRejected,
} = createAsyncActions(GET_ALL_MOVIES, 'getMovies');

export const {
    deleteMovie,
    deleteMoviePending,
    deleteMovieFulfilled,
    deleteMovieRejected,
} = createAsyncActions(DELETE_MOVIE, 'deleteMovie');

export const {
    getMovie,
    getMoviePending,
    getMovieFulfilled,
    getMovieRejected,
} = createAsyncActions(GET_MOVIE, 'getMovie');

export const {
    updateMovie,
    updateMoviePending,
    updateMovieFulfilled,
    updateMovieRejected,
} = createAsyncActions(UPDATE_MOVIE, 'updateMovie');


export const clearMovies = createAction(CLEAR_MOVIES);