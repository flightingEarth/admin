import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Layout from '@/views/layout/Layout'
import Dashboard from '@/views/dashboard'
import News from '@/views/news'
import NewsCreate from '@/views/news/create'
import NewsEdit from '@/views/news/edit'
import Attachment from '@/views/attachment'
import Case from '@/views/cases'
import CaseCreate from '@/views/cases/create'
import CaseEdit from '@/views/cases/edit'
import Product from '@/views/product'
import ProductCreate from '@/views/product/create'
import ProductEdit from '@/views/product/edit'
import Category from '@/views/category'
import Certificate from '@/views/setting/certificate'
import Banner from '@/views/setting/banner'
import AboutUs from '@/views/setting/aboutUs'
import Password from '@/views/setting/password'
import { getToken } from 'utils/auth';

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/login', component: Login, hidden: true, requiresAuth: false },
      {
          path: '/',
          component: Layout,
          name: '控制面板',
          icon: 'quanxian',
          requiresAuth:true,
          children: [
              {
                  path: '/', icon: "quanxian", component: Dashboard, name: '权限测试页', requiresAuth:true
              },
          ]
      },
      {
          path: '/news',
          component: Layout,
          name: '资讯中心',
          icon: 'quanxian',
          children: [
              {
                  path: '/news', component: News, name: '资讯中心',
              },
              {
                  path: '/news/create',
                  hidden: true,
                  component: NewsCreate,
                  name: '添加',
              },
              {
                  path: '/news/:id/edit',
                  hidden: true,
                  component: NewsEdit,
                  name: '编辑'
              }
          ]
      },
      {
          path: '/case',
          component: Layout,
          name: '案例展示',
          icon: 'quanxian',
          children: [
              {
                  path: '/case', component: Case, name: '案例展示',
              },
              {
                  path: '/case/create',
                  hidden: true,
                  component: CaseCreate,
                  name: '添加',
              },
              {
                  path: '/case/:id/edit',
                  hidden: true,
                  component: CaseEdit,
                  name: '编辑'
              }
          ]
      },
      {
          path: '/product',
          component: Layout,
          name: '产品中心',
          icon: 'quanxian',
          children: [
              {
                  path: '/product', component: Product, name: '产品中心',
              },
              {
                  path: '/product/create',
                  hidden: true,
                  component: ProductCreate,
                  name: '添加',
              },
              {
                  path: '/product/:id/edit',
                  hidden: true,
                  component: ProductEdit,
                  name: '编辑'
              }
          ]
      },
      {
          path: '/category',
          component: Layout,
          name: '分类管理',
          icon: 'quanxian',
          children: [
              {
                  path: '/category', component: Category, name: '分类管理',
              },
          ]
      },
      {
          path: '/',
          component: Layout,
          name: '我的文件',
          icon: 'quanxian',
          children: [
              {
                  path: '/attachment/index', component: Attachment, name: '我的文件', meta: {},
              }
          ]
      },
      {
          path: '/setting',
          component: Layout,
          name: '设置',
          icon: 'quanxian',
          children: [
              {
                  path: '/setting/certificate', component: Certificate, name: '资质证书'
              },
              {
                  path: '/setting/banner', component: Banner, name: 'Banner'
              },
              {
                  path: '/setting/aboutUs', component: AboutUs, name: '关于我们'
              },
              {
                  path: '/setting/password', component: Password, name: '重置密码'
              }
          ]
      },
  ]
})

export default router

// router.beforeEach((to, from, next) => {
//     let token = window.localStorage.getItem('token');
//     console.log(to.matched)
//     if (to.matched.some(record => record.requiresAuth) && (!token || token === null)) {
//         console.log(11)
//         next({
//             path: '/login',
//             query: { redirect: to.fullPath }
//         })
//     } else {
//         next()
//     }
// })

const whiteList = ['/login'];// 不重定向白名单

router.beforeEach((to, from, next) => {
    // if (getToken()) { // 判断是否有token
    //     if (to.path === '/login') {
    //         next({ path: '/' });
    //     } else {
            next();
            // if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
            //     store.dispatch('GetInfo').then(res => { // 拉取user_info
            //         const roles = res.data.role;
            //         store.dispatch('GenerateRoutes', { roles }).then(() => { // 生成可访问的路由表
            //             router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
            //             next({ ...to }); // hack方法 确保addRoutes已完成
            //         })
            //     }).catch(() => {
            //         store.dispatch('FedLogOut').then(() => {
            //             next({ path: '/login' });
            //         })
            //     })
            // } else {
            //     // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
            //     if (hasPermission(store.getters.roles, to.meta.role)) {
            //         next();//
            //     } else {
            //         next({ path: '/401', query: { noGoBack: true } });
            //     }
            //     // 可删 ↑
            // }
    //     }
    // } else {
    //     if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
    //         next()
    //     } else {
    //         next('/login'); // 否则全部重定向到登录页
    //     }
    // }
});
