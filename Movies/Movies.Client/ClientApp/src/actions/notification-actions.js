import { createAction } from 'redux-actions';

import { NOTIFY_SUCCESS, NOTIFY_ERROR, NOTIFY_WARNING } from '../types';

export const notifySuccess = createAction(NOTIFY_SUCCESS);

export const notifyError = createAction(NOTIFY_ERROR);

export const notifyWarning = createAction(NOTIFY_WARNING);