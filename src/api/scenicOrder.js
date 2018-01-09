import fetch from 'utils/fetch';

export function scenicOrderList(query) {
    return fetch({
        url: 'supplier/scenicOrder',
        method: 'get',
        params: query
    });
}

export function getScenicOrder(id) {
    return fetch({
        url: 'supplier/scenicOrder/' + id,
        method: 'get',
    });
}
export function updateScenicOrder(id, data) {
    return fetch({
        url: 'supplier/scenicOrder/' + id,
        method: 'PUT',
        data: data
    });
}