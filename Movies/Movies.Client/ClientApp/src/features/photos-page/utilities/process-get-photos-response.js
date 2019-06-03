import { pipe, props, map, filter, find, converge, assoc, identity, isNil, complement, where } from 'ramda';
import { transformNested } from '../../../utilities';
import { AUTHOR_LINK, PHOTO_LINK } from '../constants';

const notNill = complement(isNil);

const getUrl = pipe(props(['url_o', 'url_c']), find(notNill));

const setPhotoUrl = converge(assoc('imageUrl'), [
    getUrl,
    identity
]);

const processGetPhotosResponse = transformNested(['photos', 'photo'], pipe(
    map(setPhotoUrl),
    filter(where({imageUrl: notNill})),
    map((photo) => ({
        ...photo, 
        authorLink: AUTHOR_LINK(photo.owner),
        photoLink: PHOTO_LINK(photo.owner, photo.id)
    })),
));

export default processGetPhotosResponse;