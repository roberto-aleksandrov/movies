export const GET_PHOTOS_QUERY_STRING = ({page, tags}) => ({
    page,
    tags,
    per_page: 20,
    extras: 'tags,description,url_o,url_c',
    method: 'flickr.photos.search',
    tag_mode: 'all',
});