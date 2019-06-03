import { GET_ALL_MOVIES, DELETE_MOVIE, CLEAR_MOVIES } from '../types';

const initialState = {
    movies: [],
    pageInfo: {
        take: 8,
        skip: 0,
        hasMore: true
    }
};

export const moviesReducer = (state = initialState, {type, payload})=> {
    switch(type){
        case GET_ALL_MOVIES.FULFILLED:
            const pageInfo = payload.data.length > 0 
                ? { take: state.pageInfo.take + 8, skip: state.pageInfo.skip + 8, hasMore: true }
                : { ...state.pageInfo, hasMore: false };

            return {
                ...state,
                pageInfo,
                movies: [...state.movies, ...payload.data],
            };
        case DELETE_MOVIE.FULFILLED:
            return {
              ...state,
              movies: state.movies.filter(n => n.id !== payload.data[0])  
            };
        case CLEAR_MOVIES: 
            return initialState;
        default: 
            return state;
    }
};