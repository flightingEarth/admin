import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'


import Login from '@/views/login'
import AccountReceipts from '@/views/financial/accountReceipts'

import Attachment from '@/views/attachment/index'

import HotelEdit from '@/views/hotel/edit'

import PriceCalendar from '@/views/hotel/priceCalendar'

import HotelRoom from '@/views/hotelRoom'
import RoomCreate from '@/views/hotelRoom/create'
import RoomEdit from '@/views/hotelRoom/edit'

import HotelProduct from '@/views/hotelProduct'
import HotelProductCreate from '@/views/hotelProduct/create'
import HotelProductEdit from '@/views/hotelProduct/edit'

import HotelOrder from '@/views/hotelOrder'
import HotelOrderCreate from '@/views/hotelOrder/create'
import HotelOrderEdit from '@/views/hotelOrder/edit'
import HotelOrderDetail from '@/views/hotelOrder/detail'


Vue.use(Router)

const router = new Router({
    routes: [
        { path: '/login', component: Login, hidden: true, requiresAuth: false },
        {
            path: '/',
            component: Layout,
            name: '酒店管理',
            icon: 'quanxian',
            children: [
                {
                    path: '/financial/accountReceipts', component: AccountReceipts, name: '账户收支',
                },
                {
                    path: '/', component: HotelEdit, name: '酒店管理'
                },
                {
                    path: '/hotel/priceCalendar', hidden: true, component: PriceCalendar, name: '价格日历'
                },

                //房型管理
                {
                    path: '/hotel/hotelRoom', component: HotelRoom, name: '房型管理'
                },
                {
                    path: '/hotel/hotelRoom/create', hidden: true, component: RoomCreate, name: '房型添加'
                },
                {
                    path: '/hotel/hotelRoom/:id/edit', hidden: true, component: RoomEdit, name: '房型编辑'
                },

                //酒店产品
                {
                    path: '/hotelproduct', hidden: true, component: HotelProduct, name: '酒店产品'
                },
                {
                    path: '/hotelproduct/create', hidden: true, component: HotelProductCreate, name: '酒店产品添加'
                },
                {
                    path: '/hotelproduct/:id/edit', hidden: true, component: HotelProductEdit, name: '酒店产品编辑'
                },

                //酒店订单
                {
                    path: '/hotelorder', component: HotelOrder, name: '酒店订单'
                },
                {
                    path: '/hotelorder/create', hidden: true, component: HotelOrderCreate, name: '酒店订单添加'
                },
                {
                    path: '/hotelorder/:id/edit', hidden: true, component: HotelOrderEdit, name: '酒店订单编辑'
                },
                {
                    path: '/hotelorder/:id/detail', hidden: true, component: HotelOrderDetail, name: '酒店订单详情'
                },

                {
                    path: '/attachment/index', component: Attachment, name: '我的图片'
                },
            ]
        }
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
