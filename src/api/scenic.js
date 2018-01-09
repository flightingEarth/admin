import fetch from 'utils/fetch';

export function getScenic() {
    return fetch({
        url: 'supplier/scenic',
        method: 'get',
    });
}

export function updateScenic(id, data) {
    return fetch({
        url: 'supplier/scenic/' + id,
        method: 'PUT',
        data: data
    });
}
