import fetch from 'utils/fetch';

export function hotelList(query) {
    return fetch({
        url: 'supplier/hotel',
        method: 'get',
        params: query
    });
}

export function getHotel(id) {
    return fetch({
        url: 'supplier/hotel/' + id +'/edit',
        method: 'get',
    });
}

export function addHotel(data) {
    return fetch({
        url: 'supplier/hotel',
        method: 'post',
        data: data
    });
}

export function updateHotel(id, data) {
    return fetch({
        url: 'supplier/hotel/' + id,
        method: 'PUT',
        data: data
    });
}

export function destroyHotel(id) {
    return fetch({
        url: 'supplier/hotel/' + id,
        method: 'DELETE'
    });
}
