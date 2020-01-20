/*
 * @version: 0.0.1
 * @Author: 董正阳
 * @Date: 2019-12-30 13:36:39
 * @LastEditors  : 董正阳
 * @LastEditTime : 2020-01-20 15:33:13
 * @Description: 
 */
import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

// 是否mock
const mock = true
if (mock) { // 若mock开关打开，则拦截里面指定的请求
  require('./mock/api.js') // require是异步加载不是预编译加载，使用import开关就没有意义了，都会被拦截
}

// 接口请求默认配置
axios.defaults.baseURL = '/api' // 接口默认前缀域名，接口代理则填写proxy中的统一拦截头
axios.defaults.timeout = 8000 // 接口超时时间

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
