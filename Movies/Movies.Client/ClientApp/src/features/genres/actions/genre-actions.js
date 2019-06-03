import { GET_GENRES } from '../types';
import { createAsyncActions } from '../../../utilities';

export const {
    getGenres,
    getGenresPending,
    getGenresFulfilled,
    getGenresRejected,
} = createAsyncActions(GET_GENRES, 'getGenres');
