import { GET_USERS, GET_USER_BY_ID, DELETE_USER } from '../types';

const initialState = {
    selectedUser: undefined,
    users: []
};

export const usersReducer = (state = initialState, {type, payload})=> {
    switch(type){
        case GET_USERS.FULFILLED:
            return {
                ...state,
                users: payload.data
            };  
        case GET_USER_BY_ID.FULFILLED: 
            return {
                ...state,
                selectedUser: payload.data
            };      
        case DELETE_USER.FULFILLED:
            return {
                ...state,
                users: state.users.filter(({_id}) => _id !== payload.data.id)
            }; 
        default: 
            return state;
    };
};

export default usersReducer;