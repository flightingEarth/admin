import fetch from 'utils/fetch';

export function getHotel() {
    return fetch({
        url: 'supplier/hotel',
        method: 'get'
    });
}
export function updateHotel(id, data) {
    return fetch({
        url: 'supplier/hotel/' + id,
        method: 'PUT',
        data: data
    });
}
