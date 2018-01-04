import fetch from 'utils/fetch';

export function getCategories() {
    return fetch({
        url: 'admin/image/category',
        method: 'get'
    });
}

export function addCategory(data) {
    return fetch({
        url: 'admin/image/category',
        method: 'post',
        data: data
    });
}

export function updateCategory(id, data) {
    return fetch({
        url: 'admin/image/category/'+ id,
        method: 'PUT',
        data: data
    });
}

export function destroyCategory(id) {
    return fetch({
        url: 'admin/image/category/' + id,
        method: 'DELETE',
    });
}