<template>
	<div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
        <div style="width: 100%; height: 70px; background: rgba(88,94,107,1);">
            <div class="logo">
                <img src="./logo.png" alt="">
            </div>
            <div class="title">

            </div>
            <div class="login"></div>
        </div>
		<sidebar class="sidebar-container"></sidebar>
		<div class="main-container">
			<navbar></navbar>
			<app-main></app-main>
		</div>
	</div>
</template>

<script>
  import { Navbar, Sidebar, AppMain } from '@/views/layout';

  export default {
    name: 'layout',
    components: {
      Navbar,
      Sidebar,
      AppMain
    },
	computed: {
	  sidebar() {
		 return this.$store.state.app.sidebar
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
			.sidebar-container{
				width:36px;
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
 			&::-webkit-scrollbar {display:none}
		}
		.main-container {
			min-height: 100%;
			transition: margin-left 0.28s ease-out;
			margin-left: 180px;
		}
        .logo{
            width: 180px;
            padding-top: 10px;
            float: left;
            img{
                width: 100%;
            }
        }
        .title{
            width: 200px;
            height: 70px;
            background: #818590;
            float: left;
        }
        .login{
            float: right;
            width: 200px;
            height: 70px;
            background: #818590;
            margin-right: 20px;
        }
	}
</style>
