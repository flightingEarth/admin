<template>
    <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
        <div style="width: 100%; height: 50px; background: rgba(88,94,107,1);">
            <div class="logo">
                <img src="./logo.png" alt="">
                <span>旅游数据采集平台系统</span>
            </div>
            <div class="title">
                {{title}}
            </div>
            <div class="login">
                <span class="headImg">登录用户:</span>
                <span class="name">{{ name }}</span>
                <a href="javascript:;" @click="logout">退出</a>
            </div>
        </div>
        <sidebar class="sidebar-container"></sidebar>
        <div class="main-container">
            <navbar></navbar>
            <app-main></app-main>
        </div>
    </div>
</template>

<script>
    import {Navbar, Sidebar, AppMain} from '@/views/layout'
    import "./font-title/iconfont.css"
    import { mapGetters } from 'vuex'

    export default {
        name: 'layout',
        components: {
            Navbar,
            Sidebar,
            AppMain
        },
        data() {
            return {
                levelList: null,
                title:"",
            }
        },

        computed: {
            ...mapGetters([
                'name'
            ]),
            sidebar() {
                return this.$store.state.app.sidebar
            }
        },
        created(){
            this.getBreadcrumb();
        },
        methods: {
            getBreadcrumb() {
                this.title = this.$route.matched[0].name
            },
            logout() {
                this.$store.dispatch('LogOut').then(() => {
                    location.reload()// In order to re-instantiate the vue-router object to avoid bugs
                })
            }
        },
        watch: {
            $route() {
                this.getBreadcrumb();
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "src/styles/mixin.scss";

    .app-wrapper {
        @include clearfix;
        position: relative;
        width: 100%;
        height: 100%;
        &.hideSidebar {
            .sidebar-container {
                width: 36px;
                overflow: inherit;
            }
            .main-container {
                margin-left: 36px;
            }
        }
        .sidebar-container {
            transition: width 0.28s ease-out;
            width: 17%;
            height: 100%;
            position: fixed;
            top: 50px;
            bottom: 0;
            left: 0;
            z-index: 1001;
            overflow-y: auto;
            padding-left: 40px;
            font-size: 16px;
            color: #666;
            &::-webkit-scrollbar {
                display: none
            }
        }
        .main-container {
            min-height: 100%;
            transition: margin-left 0.28s ease-out;
            margin-left: 17%;
        }
        .logo {
            width: 17%;
            float: left;
            height: 50px;
            overflow: hidden;
            line-height: 50px;
            img {
                width: 15%;
                float: left;
                margin-left: 2%;
                margin-top: 10px;
            }
            span{
                color: #fff;
                font-size: 18px;
                font-weight: bold;
                vertical-align: middle;
                float: left;
                /*margin-left: 2%;*/
            }
        }
        .title {
            width: 110px;
            height: 50px;
            background: #818590;
            float: left;
            text-align: center;
            overflow: hidden;
            line-height: 50px;
            font-size: 16px;
            color: #fff;
            font-weight: normal;
            margin-left: 80px;
            font-weight: bold;
        }
        .login {
            float: right;
            height: 50px;
            margin-right: 20px;
            line-height: 50px;
            position: relative;
            .headImg {
                font-size: 16px;
                color: #fff;
                font-weight: bold;
                font-family: 宋体;
            }
            .name {
                font-size: 18px;
                color: rgb(76, 202, 177);
                font-family: 宋体;
                font-weight: bold;

            }
            .el-icon-caret-bottom {
                color: #f3f3f3;
                margin-left: 10px;
            }
            a{
                color: #54a7f8;
                font-size: 18px;
                margin-left: 80px;
            }
        }
    }
</style>
