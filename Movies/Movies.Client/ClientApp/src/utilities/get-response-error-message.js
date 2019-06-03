import { pathOr } from 'ramda';

const getResponseErrorMessage = pathOr('Something went wrong!', ['response', 'data', 'message']);

export default getResponseErrorMessage;