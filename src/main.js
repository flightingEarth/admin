// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/custom-theme/index.css'; // 换肤版本element-ui css
import './assets/iconfont/iconfont'; // iconfont 具体图标见https://github.com/PanJiaChen/vue-element-admin/wiki

// import IconSvg from './components/Icon-svg'// svg 组件
// import './icons' // icon

import VueAreaLinkage from 'vue-area-linkage'; //城市三级联动

// Vue.component('icon-svg', IconSvg)
Vue.use(Element)

Vue.use(VueAreaLinkage)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
