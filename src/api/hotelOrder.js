import fetch from 'utils/fetch';

export function hotelOrderList(query) {
    return fetch({
        url: 'admin/hotelOrder',
        method: 'get',
        params: query
    });
}

export function gethotelOrder(id) {
    return fetch({
        url: 'admin/hotelOrder/' + id +'/edit',
        method: 'get',
    });
}

export function addhotelOrder(data) {
    return fetch({
        url: 'admin/hotelOrder',
        method: 'post',
        data: data
    });
}

export function updatehotelOrder(id, data) {
    return fetch({
        url: 'admin/hotelOrder/' + id,
        method: 'PUT',
        data: data
    });
}

export function destroyhotelOrder(id) {
    return fetch({
        url: 'admin/hotelOrder/' + id,
        method: 'DELETE'
    });
}

