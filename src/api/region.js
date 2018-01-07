import fetch from 'utils/fetch';

export function getRegion(query) {
    return fetch({
        url: 'admin/region',
        method: 'get',
        params: query
    });
}

