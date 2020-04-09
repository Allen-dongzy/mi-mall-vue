/*
 * @version: 0.0.1
 * @Author: 董正阳
 * @Date: 2020-01-07 14:15:59
 * @LastEditors: 董正阳
 * @LastEditTime: 2020-03-08 13:25:07
 * @Description: 
 */
module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://mall-pre.springboot.cn',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
}