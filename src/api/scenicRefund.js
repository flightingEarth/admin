import fetch from 'utils/fetch';

export function refundlList(query) {
    return fetch({
        url: 'admin/scenicOrderRefund',
        method: 'get',
        params: query
    });
}

export function auditWithdraw(id , query) {
    return fetch({
        url: 'admin/scenicOrderRefund/' + id,
        method: 'put',
        params: query
    });
}
