import fetch from 'utils/fetch';

export function getList() {
    return fetch({
        url: 'api/company',
        method: 'get',
    });
}

export function updateCompany(id, data) {
    return fetch({
        url: 'api/company/' + id,
        method: 'PUT',
        data: data
    });
}