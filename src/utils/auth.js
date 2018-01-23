import Cookies from 'js-cookie'

const TokenKey = 'token'
const nicknameKey = 'nickname'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function getRoles() {
    return Cookies.get('roles')
}

export function setRoles(roles) {
    return Cookies.get('roles', roles)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function getNickname() {
    return Cookies.get(nicknameKey)
}

export function setNickname(name) {
    return Cookies.get(nicknameKey, name)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
