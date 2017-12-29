import fetch from 'utils/fetch';

export function getList() {
    return fetch({
        url: 'api/homePage',
        method: 'get',
    });
}

export function update(id, data) {
    return fetch({
        url: 'api/homePage/' + id,
        method: 'PUT',
        data: data
    });
}

