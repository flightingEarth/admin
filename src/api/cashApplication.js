import fetch from 'utils/fetch';

export function withdrawList(query) {
    return fetch({
        url: 'supplier/withdraw',
        method: 'get',
        params: query
    });
}

export function auditWithdraw(id, query) {
    return fetch({
        url: 'supplier/withdraw/' + id,
        method: 'put',
        params: query
    });
}
