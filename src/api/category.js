import fetch from 'utils/fetch';

export function getList() {
    return fetch({
        url: 'api/category/list',
        method: 'get'
    });
}

export function getCategories(query) {
    return fetch({
        url: 'api/category',
        method: 'get',
        params: query
    });
}

export function addCategory(data) {
    return fetch({
        url: 'api/category',
        method: 'post',
        data: data
    });
}

export function getCategory(id) {
    return fetch({
        url: 'api/category/' + id + '/edit',
        method: 'get'
    });
}

export function updateCategory(id, data) {
    return fetch({
        url: 'api/category/' + id,
        method: 'PUT',
        data: data
    });
}

export function destroyCategory(id) {
    return fetch({
        url: 'api/category/' + id,
        method: 'DELETE'
    });
}

