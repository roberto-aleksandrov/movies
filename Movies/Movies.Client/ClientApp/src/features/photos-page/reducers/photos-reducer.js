import { PROCESS_PHOTOS, SET_PHOTOS_FILTERS, GET_PHOTOS, CLEAR_PHOTOS } from '../types';

const initialState = {
    pagesInfo: {
        page: 0, 
        pages: 1,
    },
    photos: [],
    perPage: 20,
    filters: {
        tags: ['safe'],
    }
};

export const photosReducer = (state = initialState, {type, payload})=> {
    switch(type){
        case PROCESS_PHOTOS.FULFILLED:
            return {
                ...state,
                pagesInfo: {
                    page: payload.photos.page,
                    pages: payload.photos.pages,
                },
                photos: [...state.photos, ...payload.photos.photo]
            };
        case SET_PHOTOS_FILTERS:
            return {
                ...initialState,
                filters: {
                    tags: ['safe', ...payload.tags.split(',')]
                }
            };
        case PROCESS_PHOTOS.REJECTED:
        case GET_PHOTOS.REJECTED:
            return {
                ...state,
                pagesInfo: { page: 0 }
            };
        case CLEAR_PHOTOS: 
            return initialState;
        default: 
            return state;
    }
};