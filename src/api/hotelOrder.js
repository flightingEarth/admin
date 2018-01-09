import fetch from 'utils/fetch';

export function hotelOrderList(query) {
    return fetch({
        url: 'supplier/hotelOrder',
        method: 'get',
        params: query
    });
}

export function getHotelOrder(id) {
    return fetch({
        url: 'supplier/hotelOrder/' + id +'/edit',
        method: 'get',
    });
}

export function updatehotelOrder(id, data) {
    return fetch({
        url: 'supplier/hotelOrder/' + id,
        method: 'PUT',
        data: data
    });
}

