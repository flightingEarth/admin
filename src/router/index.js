import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
import Login from '@/views/login'
import { getToken } from 'utils/auth';

import CashApplication from '@/views/financial/cashApplication'

import Attachment from '@/views/attachment/index'

import ScenicSpot from '@/views/scenicSpot'
import ScenicCreate from '@/views/scenicSpot/create'
import ScenicEdit from '@/views/scenicSpot/edit'

import ScenicOrder from '@/views/scenicOrder'
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
import HotelOrderDetail from '@/views/hotelOrder/detail'

import Error404 from '@/views/errorPage/404'
import Error401 from '@/views/errorPage/401'

Vue.use(Router)

const router = new Router({
    routes: [
        { path: '/401', component: Error401, hidden: true, requiresAuth: false },
        {
            path: '/',
            component: Layout,
            name: '财务部',
            icon: 'quanxian',
            children: [
                {
                    path: '/', component: CashApplication, name: '提现申请',
                }
            ]
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
                    path: '/scenicOrder/:id', hidden: true, component: ScenicOrderDetail, name: '景区订单详情'
                },

                //门票列表
                {
                    path: '/scenic/:scenicId/ticket', hidden: true, component: ScenicTicket, name: '门票管理',
                },
                {
                    path: '/scenic/:scenicId/ticket/create', hidden: true, component: TicketCreate, name: '门票添加',
                },
                {
                    path: '/scenic/:scenicId/ticket/:id/edit', hidden: true, component: TicketEdit, name: '门票编辑',
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
        { path: '*', component: Error404, hidden: true, requiresAuth: false }
    ]
})

export default router

router.beforeEach((to, from, next) => {
    let token = getToken()
    // if ((!token || token === null)) {
    //     next({
    //         path: '/login',
    //         query: { redirect: to.fullPath }
    //     })
    // } else {
        next()
    // }
})