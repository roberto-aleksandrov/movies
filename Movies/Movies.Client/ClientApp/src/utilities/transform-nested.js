import {map, curry, filter} from 'ramda';

const childrenAreArrays = (arr) => filter((el) => Array.isArray(el), arr).length > 0;

const transfromNested = curry((props, transform, arr) => Array.isArray(arr) 
    ? childrenAreArrays(arr)
        ? map((el) => transfromNested(props, transform, el), arr)
        : props.length === 0
            ? transform(arr)
            : map((el) => transfromNested(props, transform, el), arr)
    : props.length === 0
        ? transform(arr)
        : {
            ...arr,
            [props[0]]: transfromNested(props.slice(1), transform, arr[props[0]]),
        }
);
    
export default transfromNested;
