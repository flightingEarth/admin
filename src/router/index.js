import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
import Dashboard from '@/views/dashboard'


import Financial from '@/views/financial'
import CashApplication from '@/views/financial/cashApplication'

import UserIndex from '@/views/userManagement/index'

import ScenicSpot from '@/views/scenicSpot'
import ScenicCreate from '@/views/scenicSpot/create'
import ScenicEdit from '@/views/scenicSpot/edit'

import ScenicOrder from '@/views/scenicOrder'
import ScenicOrderCreate from '@/views/scenicOrder/create'
import ScenicOrderEdit from '@/views/scenicOrder/edit'

import ScenicTicket from '@/views/scenicTicket'
import TicketCreate from '@/views/scenicTicket/create'
import TicketEdit from '@/views/scenicTicket/edit'



import Hotel from '@/views/hotel'
import HotelCreate from '@/views/hotel/create'
import HotelEdit from '@/views/hotel/edit'
import PriceCalendar from '@/views/hotel/priceCalendar'

import HotelRoom from '@/views/hotelRoom'
import RoomCreate from '@/views/hotelRoom/create'
import RoomEdit from '@/views/hotelRoom/edit'

import HotelProduct from '@/views/hotelProduct'
import HotelProductCreate from '@/views/hotelProduct/create'
import HotelProductEdit from '@/views/hotelProduct/edit'

import HotelOrder from '@/views/HotelOrder'
import HotelOrderCreate from '@/views/HotelOrder/create'
import HotelOrderEdit from '@/views/HotelOrder/edit'


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
                    path: '/scenicSpot', component: ScenicSpot, name: '景区管理'
                },
                {
                    path: '/scenicSpot/create', hidden: true, component: ScenicCreate, name: '景区添加'
                },
                {
                    path: '/scenicSpot/:id/edit', hidden: true, component: ScenicEdit, name: '景区编辑'
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

                //门票列表
                {
                    path: '/scenic/:scenicId/ticket', component: ScenicTicket, name: '门票管理',
                },
                {
                    path: '/scenic/:scenicId/ticket/create',hidden:true, component: TicketCreate, name: '门票添加',
                },
                {
                    path: '/scenic/:scenicId/ticket/:id/edit',hidden:true, component: TicketEdit, name: '门票编辑',
                }


            ]
        },

        /*{
            path: '/scenicManagement',
            component: Layout,
            name: '景区管理',
            icon: 'quanxian',
            children: [
                {
                    path: '/scenicManagement', hidden: true, component: ScenicManagement, name: '景区管理',
                },
                {
                    path: '/scenicManagement/scenicProduct',
                    component: ScenicProduct,
                    name: '景区产品',
                    icon: 'pointmax'
                },
                {
                    path: '/scenicManagement/scenicList',
                    component: ScenicList,
                    name: '景区列表',
                    icon: 'pointmax'
                },
                {
                    path: '/scenicManagement/ticketList',
                    component: TicketList,
                    name: '门票列表',
                    icon: 'pointmax'
                },
                {
                    path: '/scenicManagement/tourismTheme',
                    component: TourismTheme,
                    name: '旅游主题',
                    icon: 'pointmax'
                },
                {
                    path: '/scenicManagement/machineList',
                    component: MachineList,
                    name: '机器列表',
                    icon: 'pointmax'
                },
                {
                    path: '/scenicManagement/sourceModification',
                    component: SourceModification,
                    name: '来源修改',
                    icon: 'pointmax'
                },
                {
                    path: '/scenicManagement/scenicOrder',
                    component: ScenicOrder,
                    name: '景区订单',
                    icon: 'pointmax'
                },
                {
                    path: '/scenicManagement/scenicLocation',
                    component: ScenicLocation,
                    name: '景区地域',
                    icon: 'pointmax'
                }
            ]
        },*/
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
                    path: '/hotelproduct', component: HotelProduct, name: '酒店产品'
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
            ]
        },

        /*{
            path: '/hotelManagement',
            component: Layout,
            name: '酒店管理',
            icon: 'quanxian',
            children: [
                {
                    path: '/hotelManagement', hidden: true, component: HotelManagement, name: '酒店管理',
                },
                {
                    path: '/hotelManagement/hotelProduct',
                    component: HotelProduct,
                    name: '酒店产品',
                    icon: 'pointmax'
                },
                {
                    path: '/hotelManagement/hotelList',
                    component: HotelList,
                    name: '酒店列表',
                    icon: 'pointmax'
                },
                {
                    path: '/hotelManagement/landmarkManagement',
                    component: LandmarkManagement,
                    name: '地标管理',
                    icon: 'pointmax'
                },
                {
                    path: '/hotelManagement/hotelBrand',
                    component: HotelBrand,
                    name: '酒店品牌',
                    icon: 'pointmax'
                },
                {
                    path: '/hotelManagement/hotelFacilities',
                    component: HotelFacilities,
                    name: '酒店设施',
                    icon: 'pointmax'
                },
                {
                    path: '/hotelManagement/shareList',
                    component: ShareList,
                    name: '分润列表',
                    icon: 'pointmax'
                },
                {
                    path: '/hotelManagement/hotelOrder',
                    component: HotelOrder,
                    name: '酒店订单',
                    icon: 'pointmax'
                },
                {
                    path: '/hotelManagement/hotelPorts',
                    component: HotelPorts,
                    name: '酒店接口',
                    icon: 'pointmax'
                }
            ]
        },
        {
            path: '/hotelManagement/addHotel',
            component: Layout,
            hidden: true,
            children: [{
                path: '/hotelManagement/addHotel',
                component: AddHotel,
                name: '添加酒店',
                meta: {title: '添加酒店'}
            }]
        },
        {
            path: '/scenicManagement/addTicket',
            component: Layout,
            redirect: 'addTicket',
            hidden: true,
            children: [{
                path: '/scenicManagement/addTicket',
                component: AddTicket,
                name: '添加门票',
                title: '添加门票',
                meta: {title: '添加门票'}
            }]
        },
        {
            path: '/addHouse',
            component: Layout,
            redirect: 'addHouse',
            hidden: true,
            children: [{
                path: '/hotelManagement/addHouse',
                component: AddHouse,
                name: '添加房型',
                meta: {title: '添加房型'}
            }]
        },
        {
            path: '/houseShape',
            component: Layout,
            redirect: 'houseShape',
            hidden: true,
            children: [{
                path: '/hotelManagement/houseShape',
                component: HouseShape,
                name: '房型产品',
                meta: {title: '房型产品'}
            }]
        },
        {
            path: '/addProduct',
            component: Layout,
            hidden: true,
            children: [{
                path: '/hotelManagement/addProduct',
                component: AddProduct,
                name: '添加产品',
                meta: {title: '添加产品'}
            }]
        },
        {
            path: '/priceCalendar',
            component: Layout,
            redirect: 'priceCalendar',
            hidden: true,
            children: [{
                path: '/hotelManagement/priceCalendar',
                component: PriceCalendar,
                name: '价格日历',
                meta: {title: '价格日历'}
            }]
        },
        {
            path: '/addScenic',
            component: Layout,
            redirect: 'addScenic',
            hidden: true,
            children: [{
                path: '/scenicManagement/addScenic',
                component: AddScenic,
                name: '添加景区',
                meta: {title: '添加景区'}
            }]
        }*/
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
