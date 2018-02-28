import fetch from 'utils/fetch';

export function ProductList(query) {
    return fetch({
        url: 'supplier/hotelRoomGoods',
        method: 'get',
        params: query
    });
}

export function getProduct(id) {
    return fetch({
        url: 'supplier/hotelRoomGoods/' + id +'/edit',
        method: 'get',
    });
}

export function addProduct(data) {
    return fetch({
        url: 'supplier/hotelRoomGoods',
        method: 'post',
        data: data
    });
}

export function updateProduct(id, data) {
    return fetch({
        url: 'supplier/hotelRoomGoods/' + id,
        method: 'PUT',
        data: data
    });
}

export function destroyProduct(id) {
    return fetch({
        url: 'supplier/hotelRoomGoods/' + id,
        method: 'DELETE'
    });
}
