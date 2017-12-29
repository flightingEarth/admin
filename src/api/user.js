import fetch from 'utils/fetch';

export function updateUser(id, data) {
    return fetch({
        url: 'api/user/' + id,
        method: 'PUT',
        data: data
    });
}
