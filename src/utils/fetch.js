import axios from 'axios';
import { Message } from 'element-ui';
import store from '../store';
import { getToken } from 'utils/auth';

// 创建axios实例
const service = axios.create({
  baseURL: "http://sz.test/", // api的base_url
  timeout: 5000                  // 请求超时时间
});

// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
  // if (store.getters.token) {
  //   config.headers['Accept'] = 'application/json';
  //   config.headers['Authorization'] = 'Bearer ' + getToken(); // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
  // }
  return config;
}, error => {
  // Do something with request error
  Promise.reject(error);
})

// respone拦截器
service.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 返回 401 清除token信息并跳转到登录页面
                    // store.commit('LogOut');
                    store.dispatch('FedLogOut').then(() => {
                        location.reload();// 为了重新实例化vue-router对象 避免bug
                      });
                    // console.log(store)
                    // store.dispatch('Login').then(() => {
                    //     console.log(11)
                        // this.$router.push({ path: '/' });
                        // this.$router.replace({
                        //     path: 'login',
                        //     query: {redirect: this.$router.currentRoute.fullPath}
                        // })
                    // });
            }
        }
        return Promise.reject(error.response)   // 返回接口返回的错误信息
    }
);

export default service;
