import fetch from 'utils/fetch';

export function getList(query) {
    return fetch({
        url: 'admin/scenicType',
        method: 'get',
        params: query
    });
}