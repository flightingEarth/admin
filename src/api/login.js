import fetch from 'utils/fetch';

export function login(email, password) {
  const data = {
    grant_type: 'password',
    client_id: 1,
    client_secret: 'QjLKM9HjDFHBfVzlFZ33vHpxxNd6EQX1dp2pdhVX',
    scope: '*',
    username:email,
    password:password
  };
  return fetch({
    url: 'oauth/token',
    method: 'post',
    data:data
  });
}

export function logout() {
  return fetch({
    url: '/login/logout',
    method: 'post'
  });
}

export function getUserInfo() {
    return fetch({
        url: '/profile',
        method: 'get',
    })
}

