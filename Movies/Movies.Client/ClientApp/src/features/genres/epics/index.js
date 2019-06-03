import { combineEpics } from 'redux-observable';

import { getGenresEpic$ } from './get-genres-epic';

export default combineEpics(
    getGenresEpic$
);