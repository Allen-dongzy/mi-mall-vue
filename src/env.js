/*
 * @version: 0.0.1
 * @Author: 董正阳
 * @Date: 2020-01-20 12:55:46
 * @LastEditors  : 董正阳
 * @LastEditTime : 2020-01-20 14:05:48
 * @Description: 
 */
// 环境变量配置，针对jsonp和sors跨域，接口代理直接修改axios基础项和vue.config.js即可
let baseURL;

switch (process.env.NODE_ENV) {
  case 'development':
    baseURL = 'http://dev-mall-pre.springboot.cn/api'
    break
  case 'test':
    baseURL = 'http://test-mall-pre.springboot.cn/api'
    break
  case 'production':
    baseURL = 'http://mall-pre.springboot.cn/api'
    break
  case 'abc':
    baseURL = 'http://abc-mall-pre.springboot.cn/api'
    break
  default:
    baseURL = 'http://mall-pre.springboot.cn/api'
    break
}

export default {
  baseURL
}