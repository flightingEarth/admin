<template>
    <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
        <div style="width: 100%; height: 70px; background: rgba(88,94,107,1);">
            <div class="logo">
                <img src="./logo.png" alt="">
            </div>
            <div class="title">
                {{title}}
            </div>
            <div class="login">
                <span class="headImg"></span>
                <a href="javascript:;" @click="open"><span class="name">超级管理员</span>
                    <i class="el-icon-caret-bottom"></i></a>
                <div class="tab" v-show="show">
                    <ul>
                        <li><a href="javscript:;"><i class="iconfont icon-wode"></i>我的主页</a></li>
                        <li><a href="javscript:;"><i class="iconfont icon-riliriqi2"></i>My Calendar</a></li>
                        <li><a href="javscript:;"><i class="iconfont icon-tuichu"></i>退出</a></li>
                    </ul>
                </div>
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
    import {Navbar, Sidebar, AppMain} from '@/views/layout';
    import "./font-title/iconfont.css"

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
                show: false,
                title:"",
            }
        },

        computed: {
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
            open(){
                this.show = !this.show
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
            width: 180px;
            height: 100%;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            z-index: 1001;
            overflow-y: auto;
            &::-webkit-scrollbar {
                display: none
            }
        }
        .main-container {
            min-height: 100%;
            transition: margin-left 0.28s ease-out;
            margin-left: 180px;
        }
        .logo {
            width: 180px;
            padding-top: 10px;
            float: left;
            img {
                width: 100%;
            }
        }
        .title {
            width: 200px;
            height: 70px;
            background: #818590;
            float: left;
            text-align: center;
            overflow: hidden;
            line-height: 70px;
            font-size: 24px;
            color: #fff;
            font-weight: normal;
        }
        .login {
            float: right;
            width: 200px;
            height: 70px;
            background: #818590;
            margin-right: 20px;
            line-height: 70px;
            position: relative;
            .headImg {
                display: inline-block;
                width: 50px;
                height: 50px;
                overflow: hidden;
                background: blue;
                margin: 10px 0 0 10px;
                float: left;
                img {
                    width: 100%;
                }
            }
            .name {
                font-size: 16px;
                color: #f3f3f3;
                margin-left: 10px;
            }
            .el-icon-caret-bottom {
                color: #f3f3f3;
                margin-left: 10px;
            }
            .tab {
                position: absolute;
                width: 200px;
                background: #fff;
                top: 70px;
                z-index: 9999;
                box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.08), -2px -2px 4px rgba(0, 0, 0, 0.08);
                ul {
                    width: 100%;
                    li {
                        /*text-align: center;*/
                        font-size: 16px;
                        color: #888;
                        height: 30px;
                        line-height: 30px;
                        border-bottom: 1px solid #E6E6E6;
                        a {
                            display: block;
                        }
                        a:hover {
                            background: #EBEBEB;
                        }
                        .iconfont {
                            color: #666;
                            margin: 0 10px;
                        }
                    }
                }
            }
        }
    }
</style>
