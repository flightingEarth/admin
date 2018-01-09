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
        url: 'admin/scenicOrder/' +id,
        method: 'get',
    });
}
export function updateScenicOrder(id, data) {
    return fetch({
        url: 'admin/scenicOrder/' + id,
        method: 'PUT',
        data: data
    });
}
