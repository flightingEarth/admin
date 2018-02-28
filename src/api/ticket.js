import fetch from 'utils/fetch';

export function getList(scenicId, query) {
    return fetch({
        url: 'supplier/scenicTicket',
        method: 'get',
        params: query
    });
}

export function getTicket(scenicId, id) {
    return fetch({
        url: 'supplier/scenicTicket/' + id +'/edit',
        method: 'get',
    });
}

export function addTicket(scenicId, data) {
    return fetch({
        url: 'supplier/scenicTicket',
        method: 'post',
        data: data
    });
}

export function updateTicket(scenicId, id, data) {
    return fetch({
        url: 'supplier/scenicTicket/' + id,
        method: 'PUT',
        data: data
    });
}

export function destroyTicket(scenicId, id) {
    return fetch({
        url: 'supplier/scenicTicket/' + id,
        method: 'DELETE'
    });
}
