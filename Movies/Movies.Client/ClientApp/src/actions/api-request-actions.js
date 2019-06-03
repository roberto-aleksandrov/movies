import { API_REQUEST } from '../types';
import { createAction } from 'redux-actions';
import { nthArg } from 'ramda';

export const sendApiRequest = createAction(API_REQUEST, null, nthArg(1));