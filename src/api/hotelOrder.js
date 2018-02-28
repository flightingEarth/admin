import fetch from 'utils/fetch';

export function hotelOrderList(query) {
    return fetch({
        url: 'supplier/hotelOrder',
        method: 'get',
        params: query
    });
}

export function gethotelOrder(id) {
    return fetch({
        url: 'supplier/hotelOrder/' + id +'/edit',
        method: 'get',
    });
}

export function addhotelOrder(data) {
    return fetch({
        url: 'supplier/hotelOrder',
        method: 'post',
        data: data
    });
}

export function updatehotelOrder(id, data) {
    return fetch({
        url: 'supplier/hotelOrder/' + id,
        method: 'PUT',
        data: data
    });
}

export function destroyhotelOrder(id) {
    return fetch({
        url: 'supplier/hotelOrder/' + id,
        method: 'DELETE'
    });
}
