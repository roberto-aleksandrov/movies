import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import notificationsReducer from './notifications-reducer';
import { photosReducer } from '../features/photos-page/reducers';
import { usersReducer } from '../features/users/reducers';
import { genresReducer } from '../features/genres/reducers';
import { moviesReducer } from '../features/movies/reducers';
import { updateMovieReducer } from '../features/movies/update-movie-page/reducers';

const rootReducer = history => combineReducers({
    router: connectRouter(history),
    notificationsReducer,
    photosReducer,
    usersReducer,
    genresReducer,
    moviesReducer,
    updateMovieReducer
});

export default rootReducer;