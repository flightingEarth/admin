import fetch from 'utils/fetch';

export function getCategories() {
    return fetch({
        url: 'api/category/image',
        method: 'get'
    });
}

export function addCategory(data) {
    return fetch({
        url: 'api/category/image',
        method: 'post',
        data: data
    });
}

export function updateCategory(id, data) {
    return fetch({
        url: 'api/category/image/'+ id,
        method: 'PUT',
        data: data
    });
}

export function destroyCategory(id) {
    return fetch({
        url: 'api/category/image/' + id,
        method: 'DELETE',
    });
}