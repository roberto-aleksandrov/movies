import { ofType } from 'redux-observable';
import { mergeMap, map, debounceTime, catchError } from 'rxjs/operators';
import { merge, of } from 'rxjs';

import { GET_PHOTOS, PROCESS_PHOTOS } from '../types'
import { 
    getPhotosPending,
    getPhotosFulfilled,
    getPhotosRejected,
    processPhotos,
    processPhotosFulfilled,
    processPhotosRejected } from '../actions';
import { sendApiRequest, notifyError } from '../../../actions';
import { processGetPhotosResponse } from '../utilities';;

const requestPayload = payload => ({
    url: 'services/rest/',
    onSuccess: [getPhotosFulfilled, processPhotos],
    onError: [getPhotosRejected, notifyError],
    data: payload
});

const requestMeta = { api: 'flickrApi' };

export const getPhotosEpic$ = action$ => action$.pipe(
    ofType(GET_PHOTOS.DEFAULT),
    debounceTime(500),
    mergeMap(({payload}) => 
        merge(
            of(getPhotosPending()),
            of(sendApiRequest(requestPayload(payload), requestMeta))
        ))
);

export const processPhotosEpic$ = action$ => action$.pipe(
    ofType(PROCESS_PHOTOS.DEFAULT),
    map(({payload}) => processGetPhotosResponse(payload)),
    map(processPhotosFulfilled),
    catchError(err => merge(
        of(processPhotosRejected(err)), 
        of(notifyError(err)))
    )
);