import { combineEpics } from 'redux-observable';
import apiRequestEpic from './api-request-epic';
import { getPhotosEpic$, processPhotosEpic$ } from '../features/photos-page/epics';
import { getUsersEpic$, deleteUserEpic$, getUserByIdEpic$, updateUserEpic$, createUserEpic$ } from '../features/users/epics';
import movieEpics$ from '../features/movies/epics';
import genresEpic$ from '../features/genres/epics';

const rootEpic = (apis) => combineEpics(
    apiRequestEpic(apis),
    getPhotosEpic$,
    processPhotosEpic$,
    createUserEpic$,
    getUsersEpic$,
    getUserByIdEpic$,
    updateUserEpic$,
    deleteUserEpic$,
    movieEpics$,
    genresEpic$
);

export default rootEpic;