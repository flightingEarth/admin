import fetch from 'utils/fetch';

export function getList(query) {
    return fetch({
        url: 'api/product',
        method: 'get',
        params: query
    });
}

export function addProduct(data) {
    return fetch({
        url: 'api/product',
        method: 'post',
        data: data
    });
}

export function getProduct(id) {
    return fetch({
        url: 'api/product/' + id + '/edit',
        method: 'get'
    });
}

export function updateProduct(id, data) {
    return fetch({
        url: 'api/product/' + id,
        method: 'PUT',
        data: data
    });
}

export function destroyProduct(id) {
    return fetch({
        url: 'api/product/' + id,
        method: 'DELETE'
    });
}

