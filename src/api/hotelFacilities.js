import fetch from 'utils/fetch';

export function getFacilities(query) {
    return fetch({
        url: 'admin/hotelFacilities',
        method: 'get',
        params: query
    });
}
