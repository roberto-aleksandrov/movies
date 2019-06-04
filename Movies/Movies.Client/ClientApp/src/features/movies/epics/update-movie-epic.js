import { ofType } from 'redux-observable';
import { mergeMap, debounceTime } from 'rxjs/operators';
import { merge, of } from 'rxjs';
import { push } from 'connected-react-router';
import moment from 'moment';

import { UPDATE_MOVIE } from '../types';
import { updateMoviePending, updateMovieFulfilled, updateMovieRejected } from '../actions';
import { notifySuccess, notifyError } from '../../../actions';
import routesConfig from '../../../routes/routes-config';

import { sendApiRequest } from '../../../actions';

const onSuccess = [
    updateMovieFulfilled,
    () => notifySuccess('Movie successfully updated!'),
    () => push(routesConfig.movies.path)
];

const onError = [
    updateMovieRejected,
    notifyError
];

const requestPayload = ({id, ...data}) => ({
    method: 'put',
    url: `movies/update/${id}`,
    onSuccess,
    onError,
    data: {...data,  releaseDate: moment(data.releaseDate).format("YYYY-MM-DD HH:mm:ss")}
});

const requestMeta = { api: 'formDataApi' };

export const updateMovieEpic$ = action$ => action$.pipe(
    ofType(UPDATE_MOVIE.DEFAULT),
    debounceTime(500),
    mergeMap(({payload}) => 
        merge(
            of(updateMoviePending()),
            of(sendApiRequest(requestPayload(payload), requestMeta))
        ))
);