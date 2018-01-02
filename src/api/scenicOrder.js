import fetch from 'utils/fetch';

export function scenicOrderList(query) {
    return fetch({
        url: 'admin/scenicOrder',
        method: 'get',
        params: query
    });
}

export function getScenicOrder(id) {
    return fetch({
        url: 'admin/scenicOrder/' + id +'/edit',
        method: 'get',
    });
}

export function addScenicOrder(data) {
    return fetch({
        url: 'admin/scenicOrder',
        method: 'post',
        data: data
    });
}

export function updateScenicOrder(id, data) {
    return fetch({
        url: 'admin/scenicOrder/' + id,
        method: 'PUT',
        data: data
    });
}

export function destroyScenicOrder(id) {
    return fetch({
        url: 'admin/scenicOrder/' + id,
        method: 'DELETE'
    });
}

