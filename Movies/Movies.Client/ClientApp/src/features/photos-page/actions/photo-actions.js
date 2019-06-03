import { createAction } from 'redux-actions';

import { GET_PHOTOS, SET_PHOTOS_FILTERS, PROCESS_PHOTOS, CLEAR_PHOTOS } from '../types';
import { createAsyncActions } from '../../../utilities';

export const setPhotosFilters = createAction(SET_PHOTOS_FILTERS)

export const clearPhotos = createAction(CLEAR_PHOTOS)

export const {
    getPhotos,
    getPhotosPending,
    getPhotosFulfilled,
    getPhotosRejected,
} = createAsyncActions(GET_PHOTOS, 'getPhotos');

export const {
    processPhotos,
    processPhotosPending,
    processPhotosFulfilled,
    processPhotosRejected,
} = createAsyncActions(PROCESS_PHOTOS, 'processPhotos');

