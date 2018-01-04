import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
import Dashboard from '@/views/dashboard'


import Financial from '@/views/financial'
import CashApplication from '@/views/financial/cashApplication'

import UserIndex from '@/views/userManagement/index'


import Attachment from '@/views/attachment/index'

import ScenicSpot from '@/views/scenicSpot'
import ScenicCreate from '@/views/scenicSpot/create'
import ScenicEdit from '@/views/scenicSpot/edit'

import ScenicOrder from '@/views/scenicOrder'
import ScenicOrderCreate from '@/views/scenicOrder/create'
import ScenicOrderEdit from '@/views/scenicOrder/edit'
import ScenicOrderDetail from '@/views/scenicOrder/detail'

import ScenicTicket from '@/views/scenicTicket'
import TicketCreate from '@/views/scenicTicket/create'
import TicketEdit from '@/views/scenicTicket/edit'

import ScenicRefund from '@/views/scenicRefund'


import Hotel from '@/views/hotel'
import HotelCreate from '@/views/hotel/create'
import HotelEdit from '@/views/hotel/edit'

import PriceCalendar from '@/views/hotel/priceCalendar'

import HotelRefund from '@/views/hotelRefund'

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
        // { path: '/login', component: Login, hidden: true, requiresAuth: false },
        {
            path: '/',
            component: Layout,
            name: '我的主页',
            icon: 'quanxian',
            requiresAuth: true,
            children: [
                {
                    path: '/', icon: "quanxian", component: Dashboard, name: '权限测试页', requiresAuth: true
                },
            ]
        },
        {
            path: '/financial',
            component: Layout,
            name: '财务部',
            icon: 'quanxian',
            children: [
                {
                    path: '/financial', hidden: true, component: Financial, name: '财务部',
                },
                {
                    path: '/financial/cashApplication',
                    component: CashApplication,
                    name: '提现申请',
                    icon: 'pointmax'
                }
            ]
        },
        {
            path: '/userManagement',
            component: Layout,
            name: '用户管理',
            icon: 'quanxian',
            children: [{
                path: '/userManagement/index',
                component: UserIndex,
                name: '用户管理',
                icon: 'dashboard'
            }]
        },

        {
            path: '/',
            component: Layout,
            name: '景区管理',
            icon: 'quanxian',
            children: [
                {
                    path: '/scenic', component: ScenicSpot, name: '景区管理'
                },
                {
                    path: '/scenic/create', hidden: true, component: ScenicCreate, name: '景区添加'
                },
                {
                    path: '/scenic/:id/edit', hidden: true, component: ScenicEdit, name: '景区编辑'
                },

                //景区订单
                {
                    path: '/scenicOrder', component: ScenicOrder, name: '景区订单'
                },
                {
                    path: '/scenicOrder/create', hidden: true, component: ScenicOrderCreate, name: '景区订单添加'
                },
                {
                    path: '/scenicOrder/:id/edit', hidden: true, component: ScenicOrderEdit, name: '景区订单编辑'
                },
                {
                    path: '/scenicOrder/:id/detail', hidden: true, component: ScenicOrderDetail, name: '景区订单详情'
                },

                //门票列表
                {
                    path: '/scenic/:scenicId/ticket', hidden:true, component: ScenicTicket, name: '门票管理',
                },
                {
                    path: '/scenic/:scenicId/ticket/create', hidden:true, component: TicketCreate, name: '门票添加',
                },
                {
                    path: '/scenic/:scenicId/ticket/:id/edit', hidden:true, component: TicketEdit, name: '门票编辑',
                },

                //景区退款审核
                {
                    path: '/scenicRefund', component: ScenicRefund, name: '退款审核'
                },


            ]
        },
        {
            path: '/',
            component: Layout,
            name: '酒店管理',
            icon: 'quanxian',
            children: [
                {
                    path: '/hotel', component: Hotel, name: '酒店管理'
                },
                {
                    path: '/hotel/create', hidden: true, component: HotelCreate, name: '酒店添加'
                },
                {
                    path: '/hotel/:id/edit', hidden: true, component: HotelEdit, name: '酒店编辑'
                },
                {
                    path: '/hotel/priceCalendar', hidden: true, component: PriceCalendar, name: '价格日历'
                },

                //房型管理
                {
                    path: '/hotel/hotelRoom', hidden: true, component: HotelRoom, name: '房型管理'
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

                //酒店退款审核
                {
                    path: '/hotelRefund', component: HotelRefund, name: '退款审核'
                },
            ]
        },
        {
            path: '/attachment',
            component: Layout,
            name: '设置',
            children: [{
                path: '/attachment/index',
                component: Attachment,
                name: '我的文件'
            }]
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
