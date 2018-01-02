import fetch from 'utils/fetch';

export function ProductList(query) {
    return fetch({
        url: 'admin/hotelRoomGoods',
        method: 'get',
        params: query
    });
}

export function getProduct(id) {
    return fetch({
        url: 'admin/hotelRoomGoods/' + id +'/edit',
        method: 'get',
    });
}

export function addProduct(data) {
    return fetch({
        url: 'admin/hotelRoomGoods',
        method: 'post',
        data: data
    });
}

export function updateProduct(id, data) {
    return fetch({
        url: 'admin/hotelRoomGoods/' + id,
        method: 'PUT',
        data: data
    });
}

export function destroyProduct(id) {
    return fetch({
        url: 'admin/hotelRoomGoods/' + id,
        method: 'DELETE'
    });
}

