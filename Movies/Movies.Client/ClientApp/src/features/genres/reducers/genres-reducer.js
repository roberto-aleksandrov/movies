import {GET_GENRES } from '../types';

const initialState = [];

export const genresReducer = (state = initialState, {type, payload})=> {
    switch(type){
        case GET_GENRES.FULFILLED:
            return payload.data        
        default: 
            return state;
    }
};