import fetch from 'utils/fetch';

export function refundList(query) {
    return fetch({
        url: 'admin/hotelOrderRefund',
        method: 'get',
        params: query
    });
}

export function auditWithdraw(id , query) {
    return fetch({
        url: 'admin/hotelOrderRefund/' + id,
        method: 'put',
        params: query
    });
}
