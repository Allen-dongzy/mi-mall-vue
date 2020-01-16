/*
 * @version: 0.0.1
 * @Author: 董正阳
 * @Date: 2020-01-07 14:15:59
 * @LastEditors  : 董正阳
 * @LastEditTime : 2020-01-16 14:06:20
 * @Description: 
 */
module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'https://www.imooc.com',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
}