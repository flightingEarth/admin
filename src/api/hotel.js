import fetch from 'utils/fetch';

export function hotelList(query) {
    return fetch({
        url: 'admin/hotel',
        method: 'get',
        params: query
    });
}

export function addBanner(data) {
    return fetch({
        url: 'api/banner',
        method: 'post',
        data: data
    });
}

export function updateBanner(id, data) {
    return fetch({
        url: 'api/banner/' + id,
        method: 'PUT',
        data: data
    });
}

export function destroyBanner(id) {
    return fetch({
        url: 'api/banner/' + id,
        method: 'DELETE'
    });
}

