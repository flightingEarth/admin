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
                    path: '/hotelorder/:id', hidden: true, component: HotelOrderDetail, name: '酒店订单详情'
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
