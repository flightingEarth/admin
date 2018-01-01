import fetch from 'utils/fetch';

export function roomList(query) {
    return fetch({
        url: 'admin/hotelRoom',
        method: 'get',
        params: query
    });
}

export function getHotelRoom(id) {
    return fetch({
        url: 'admin/hotelRoom/' + id +'/edit',
        method: 'get',
    });
}

export function addHotelRoom(data) {
    return fetch({
        url: 'admin/hotelRoom',
        method: 'post',
        data: data
    });
}

export function updateHotelRoom(id, data) {
    return fetch({
        url: 'admin/hotelRoom/' + id,
        method: 'PUT',
        data: data
    });
}
