import { mergeMap, catchError } from 'rxjs/operators';
import { from, of, merge } from 'rxjs';
import { ofType } from 'redux-observable';

import { API_REQUEST } from '../types';

const apiRequestEpic$ = (apis) => action$ => action$.pipe(
    ofType(API_REQUEST),
    mergeMap(({payload, meta}) => from(apis[meta.api].exec(payload))
        .pipe(
            mergeMap((response) => merge(...payload.onSuccess.map(action => of(action(response))))),
            catchError(err => merge(...payload.onError.map(action => of(action(err)))))
        )
    )
);

export default apiRequestEpic$;