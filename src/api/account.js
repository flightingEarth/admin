import request from '@/utils/fetch'

export function getAccount(query) {
  return request({
    url: 'admin/account',
    method: 'get',
    params: query
  })
}
export function accountDetails(query) {
  return request({
    url: 'admin/accountDetail',
    method: 'get',
    params: query
  })
}
