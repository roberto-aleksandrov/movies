import { combineEpics } from 'redux-observable';

import { createMovieEpic$ } from './create-movie-epic';
import { getMoviesEpic$, getMovieByIdEpic$ } from './get-movies-epic';
import { deleteMovieEpic$ } from './delete-movie-epic';
import { updateMovieEpic$ } from './update-movie-epic';

export default combineEpics(
    createMovieEpic$,
    getMoviesEpic$,
    getMovieByIdEpic$,
    deleteMovieEpic$,
    updateMovieEpic$
);