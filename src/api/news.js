import fetch from 'utils/fetch';

export function getList(query) {
    return fetch({
        url: 'api/news',
        method: 'get',
        params: query
    });
}

export function addNews(data) {
    return fetch({
        url: 'api/news',
        method: 'post',
        data: data
    });
}

export function getNews(id) {
    return fetch({
        url: 'api/news/' + id + '/edit',
        method: 'get'
    });
}

export function updateNews(id, data) {
    return fetch({
        url: 'api/news/' + id,
        method: 'PUT',
        data: data
    });
}


export function getRegion(query) {
    return fetch({
        url: 'admin/region?parent_id=1',
        method: 'get',
        params: query
    });
}

