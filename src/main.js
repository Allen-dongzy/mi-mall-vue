/*
 * @version: 0.0.1
 * @Author: 董正阳
 * @Date: 2019-12-30 13:36:39
 * @LastEditors  : 董正阳
 * @LastEditTime : 2020-01-20 13:06:50
 * @Description: 
 */
import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import env from './env'

// 接口请求默认配置
// axios.defaults.baseURL = '/api' // 接口默认前缀域名，接口代理则填写proxy中的统一拦截头
// axios.defaults.timeout = 8000 // 接口超时时间

// 根据不同环境变量获取不同的接口地址
axios.defaults.baseURL = env.baseURL;

// 接口响应拦截
axios.interceptors.response.use(function (response) {
  let res = response.data
  if (res.status == 0) {
    return res.data // 一切顺利则返回后端传来的data，抛去无用的status和msg
  } else if (res.status == 10) {
    window.location.href = '/#/login' // 若是未登录则将地址切到登录页(此时未挂载vue，用原生切换方式)[省去域名，根据哈希或history模式输入后面的路径]
  } else {
    alert(res.msg) // 若是接口错误则提示错误
  }
})

// 用VueAxios将axios代理到vue实例
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
