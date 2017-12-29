import fetch from 'utils/fetch';

export function getList(query) {
    return fetch({
        url: 'api/case',
        method: 'get',
        params: query
    });
}

export function addCase(data) {
    return fetch({
        url: 'api/case',
        method: 'post',
        data: data
    });
}

export function getCase(id) {
    return fetch({
        url: 'api/case/' + id + '/edit',
        method: 'get'
    });
}

export function updateCase(id, data) {
    return fetch({
        url: 'api/case/' + id,
        method: 'PUT',
        data: data
    });
}

export function destroyCase(id) {
    return fetch({
        url: 'api/case/' + id,
        method: 'DELETE'
    });
}

