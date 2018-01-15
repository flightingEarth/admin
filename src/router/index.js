import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'

import Login from '@/views/login'
import AccountReceipts from '@/views/financial/accountReceipts'

import Attachment from '@/views/attachment/index'

import ScenicEdit from '@/views/scenicSpot/edit'

import ScenicOrder from '@/views/scenicOrder'
import ScenicOrderDetail from '@/views/scenicOrder/detail'

import ScenicTicket from '@/views/scenicTicket'
import TicketCreate from '@/views/scenicTicket/create'
import TicketEdit from '@/views/scenicTicket/edit'
import Error404 from '@/views/errorPage/404'

Vue.use(Router)

const router = new Router({
    routes: [
        { path: '/404', component: Error404, hidden: true, requiresAuth: false },
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
                //景区订单
                {
                    path: '/scenicOrder', component: ScenicOrder, name: '景区订单'
                },
                {
                    path: '/scenicOrder/:id', hidden: true, component: ScenicOrderDetail, name: '订单详情'
                },

                //门票列表
                {
                    path: '/scenic/:scenicId/ticket', component: ScenicTicket, name: '门票列表',
                },
                {
                    path: '/scenic/:scenicId/ticket/create', hidden: true, component: TicketCreate, name: '门票添加',
                },
                {
                    path: '/scenic/:scenicId/ticket/:id/edit', hidden: true, component: TicketEdit, name: '门票编辑',
                },
                {
                    path: '/attachment/index', component: Attachment, name: '我的文件'
                }


            ]
        },
        /*{
            path: '/attachment',
            component: Layout,
            name: '设置',
            children: [{
                path: '/attachment/index',
                component: Attachment,
                name: '我的文件'
            }]
        },*/
    ]
})

export default router


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
