import fetch from 'utils/fetch';

export function roomList(query) {
    return fetch({
        url: 'admin/hotelRoom',
        method: 'get',
        params: query
    });
}
