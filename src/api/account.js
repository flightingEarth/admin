import request from '@/utils/fetch'

export function getAccount(query) {
  return request({
    url: 'supplier/account',
    method: 'get',
    params: query
  })
}
export function accountDetails(query) {
  return request({
    url: 'supplier/accountDetail',
    method: 'get',
    params: query
  })
}
