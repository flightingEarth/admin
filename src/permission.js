import router from './router'
import store from './store'
import { getNickname, getRoles } from '@/utils/auth' // getToken from cookie
import { Message } from 'element-ui'

// permissiom judge
function hasPermission(roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true // admin permission passed directly
  // if (!permissionRoles) return true
  // return roles.some(role => permissionRoles.indexOf(role) >= 0)
  return false
}

router.beforeEach((to, from, next) => {
  if (window.User.role) { // 判断是否有token
      if (window.User.role.length === 0) { // 判断当前用户是否已拉取完user_info信息
          // location.reload()
          window.location.href= 'http://58.240.82.126:8300/tbdpdas/login'
      } else {
          //   // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
          if (hasPermission(window.User.role, to.meta.role)) {
              next()//
          } else {
              next({ path: '/401', query: { noGoBack: true }})
          }
      }
  } else {
      // location.reload()
      window.location.href= 'http://58.240.82.126:8300/tbdpdas/login'
  }
})
