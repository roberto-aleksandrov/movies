import { GET_MOVIE, DELETE_MOVIE } from '../../types';

const initialState = {

};

export const updateMovieReducer = (state = initialState, {type, payload})=> {
    switch(type){
        case GET_MOVIE.FULFILLED:
            return payload.data;
        default: 
            return state;
    }
};