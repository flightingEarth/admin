import fetch from 'utils/fetch';

export function getList(query) {
    return fetch({
        url: 'admin/scenic',
        method: 'get',
        params: query
    });
}

export function getScenic(id) {
    return fetch({
        url: 'admin/scenic/' + id +'/edit',
        method: 'get',
    });
}

export function addScenic(data) {
    return fetch({
        url: 'admin/scenic',
        method: 'post',
        data: data
    });
}

export function updateScenic(id, data) {
    return fetch({
        url: 'admin/scenic/' + id,
        method: 'PUT',
        data: data
    });
}

export function destroyScenic(id) {
    return fetch({
        url: 'admin/scenic/' + id,
        method: 'DELETE'
    });
}

