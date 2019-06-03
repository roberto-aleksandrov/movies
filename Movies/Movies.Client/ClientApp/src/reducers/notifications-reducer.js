import { toast } from 'react-toastify';

import { NOTIFY_SUCCESS, NOTIFY_ERROR, NOTIFY_WARNING } from '../types';
import { getResponseErrorMessage } from '../utilities';

const initialState = {type: '', message: ''};

export const notificationsReducer = (state = initialState, {type, payload})=> {
    switch(type){
        case NOTIFY_SUCCESS: 
            toast.success(payload, {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        return { type: 'SUCCESS', message: payload };
        case NOTIFY_ERROR: 
            toast.error(getResponseErrorMessage(payload), {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            return { type: 'ERROR', message: payload };
        case NOTIFY_WARNING: 
            toast.warn(payload, {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            return { type: 'WARN', message: payload };
        default: 
            return state;
    };
};

export default notificationsReducer;