import fetch from 'utils/fetch';

export function getImages(query) {
    return fetch({
        url: 'admin/image',
        method: 'get',
        params: query
    });
}

export function addImages(data) {
    return fetch({
        url: 'admin/image',
        method: 'post',
        data: data
    });
}

export function updateImages(id, data) {
    return fetch({
        url: 'admin/image/' + id,
        method: 'PUT',
        data: data
    });
}

export function updateImagesCategory(data) {
    return fetch({
        url: 'admin/imageCategory',
        method: 'PUT',
        data: data
    });
}

export function destroyImages(data) {
    return fetch({
        url: 'admin/image',
        method: 'DELETE',
        data: data
    });
}