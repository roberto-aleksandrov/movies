import { toast } from 'react-toastify';
import { assoc, pipe } from 'ramda';

const createToastType = (type) => (message, ...args) =>  toast[type](message, pipe(...args)({}))

export const position = {
    bottom: assoc('position', toast.POSITION.BOTTOM_RIGHT),
    top: assoc('position', toast.POSITION.TOP_CENTER)
};

export const autoClose = assoc('autoClose');

export const notify = {
    success: createToastType('success'),
    warn: createToastType('warn'),
    error: createToastType('error')
};