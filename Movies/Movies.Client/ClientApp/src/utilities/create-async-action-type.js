const createAsyncActionType = actionType => ({
  DEFAULT: actionType,
  PENDING: `${actionType}_PENDING`,
  FULFILLED: `${actionType}_FULFILLED`,
  REJECTED: `${actionType}_REJECTED`,
});

export default createAsyncActionType;
