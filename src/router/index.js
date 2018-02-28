import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
import {getToken} from 'utils/auth'
import store from '.././store'

import AccountReceipts from '@/views/financial/accountReceipts'
import Attachment from '@/views/attachment/index'
import ScenicEdit from '@/views/scenicSpot/edit'
import ScenicOrder from '@/views/scenicOrder'
import ScenicOrderDetail from '@/views/scenicOrder/detail'
import ScenicRefund from '@/views/scenicRefund'

import ScenicTicket from '@/views/scenicTicket'
import TicketCreate from '@/views/scenicTicket/create'
import TicketEdit from '@/views/scenicTicket/edit'
import Error404 from '@/views/errorPage/404'
import Error401 from '@/views/errorPage/401'

Vue.use(Router)

const router = new Router({
    routes: [
        { path: '/401', component: Error401, hidden: true, requiresAuth: false },
        {
            path: '/',
            component: Layout,
            name: '景区管理',
            icon: 'quanxian',
            children: [
                {
                    path: '/financial/accountReceipts', component: AccountReceipts, name: '账户收支',
                },
                {
                    path: '/', component: ScenicEdit, name: '景区管理'
                },

                //门票列表
                {
                    path: '/scenic/ticket', component: ScenicTicket, name: '门票列表',
                },
                {
                    path: '/scenic/ticket/create', hidden: true, component: TicketCreate, name: '门票添加',
                },
                {
                    path: '/scenic/ticket/:id/edit', hidden: true, component: TicketEdit, name: '门票编辑',
                },
                //景区订单
                {
                    path: '/scenicOrder', component: ScenicOrder, name: '景区订单'
                },
                {
                    path: '/scenicOrder/:id', hidden: true, component: ScenicOrderDetail, name: '订单详情'
                },
                {
                    path: '/attachment/index', component: Attachment, name: '我的文件'
                }
            ]
        },
        { path: '*', component: Error404, hidden: true, requiresAuth: false }
    ]
})

export default router


    router.beforeEach((to, from, next) => {
    //     let token = getToken()
    //     console.log(token)
        // if ((!token || token === null)) {
        //     next({
        //         path: '/login',
        //         query: { redirect: to.fullPath }
        //     })
        // } else {
            next()
        // }
    })
