import fetch from 'utils/fetch';

export function getList(query) {
    return fetch({
        url: 'api/certificate',
        method: 'get',
        params: query
    });
}

export function addCertificate(data) {
    return fetch({
        url: 'api/certificate',
        method: 'post',
        data: data
    });
}

export function updateCertificate(id, data) {
    return fetch({
        url: 'api/certificate/' + id,
        method: 'PUT',
        data: data
    });
}

export function destroyCertificate(id) {
    return fetch({
        url: 'api/certificate/' + id,
        method: 'DELETE'
    });
}
