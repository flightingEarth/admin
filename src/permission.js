import router from './router'
import store from './store'
import { getToken } from '@/utils/auth' // getToken from cookie
import { Message } from 'element-ui'

// permissiom judge
function hasPermission(roles, permissionRoles) {
  if (roles.indexOf('scenic') >= 0) return true // admin permission passed directly
  // if (!permissionRoles) return true
  // return roles.some(role => permissionRoles.indexOf(role) >= 0)
  return false
}

const whiteList = ['/login', '/authredirect']// no redirect whitelist

router.beforeEach((to, from, next) => {
  let token = getToken()
  if (token) { // 判断是否有token
      if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
        store.dispatch('GetUserInfo').then(res => { // 拉取user_info
            next()
          // const roles = res.data.role
          //   console.log(res,1)
          // store.dispatch('GenerateRoutes', { roles }).then(() => { // 生成可访问的路由表
          //   router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
          //   next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
          // })
        }).catch((err) => {
          store.dispatch('FedLogOut').then(() => {
            Message.error('Verification failed, please login again')
              window.location.href= 'http://58.240.82.126:8300/tbdpdas/login'
          })
        })
      } else {
      //   // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
        if (hasPermission(store.getters.roles, to.meta.role)) {
          next()//
        } else {
          next({ path: '/401', query: { noGoBack: true }})
        }
      }
  } else {
    window.location.href= 'http://58.240.82.126:8300/tbdpdas/login'
  }
})
