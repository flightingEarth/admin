import fetch from 'utils/fetch';

export function getList(scenicId, query) {
    return fetch({
        url: 'admin/scenic/' + scenicId + '/ticket',
        method: 'get',
        params: query
    });
}

export function getTicket(scenicId, id) {
    return fetch({
        url: 'admin/scenic/' + scenicId + '/ticket/' + id +'/edit',
        method: 'get',
    });
}

export function addTicket(scenicId, data) {
    return fetch({
        url: 'admin/scenic/' + scenicId + '/ticket',
        method: 'post',
        data: data
    });
}

export function updateTicket(scenicId, id, data) {
    return fetch({
        url: 'admin/scenic/' + scenicId + '/ticket/' + id,
        method: 'PUT',
        data: data
    });
}

export function destroyTicket(scenicId, id) {
    return fetch({
        url: 'admin/scenic/' + scenicId + '/ticket/' + id,
        method: 'DELETE'
    });
}

