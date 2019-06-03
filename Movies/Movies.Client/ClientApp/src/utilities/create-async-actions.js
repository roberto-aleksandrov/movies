import { createAction } from 'redux-actions';

const createAsyncActions = (actionTypes, actionName) => ({
    [actionName]: createAction(actionTypes.DEFAULT),
    [`${actionName}Pending`]: createAction(actionTypes.PENDING),
    [`${actionName}Fulfilled`]: createAction(actionTypes.FULFILLED),
    [`${actionName}Rejected`]: createAction(actionTypes.REJECTED),
})

export default createAsyncActions;