import { take, trim } from 'ramda';

const cutText = (length, text) => {
    let cutText = trim(take(length, text));

    if(text.length > length) {
        cutText = `${cutText}...`
    }

    return cutText;
}

export default cutText;