/*
 * @version: 0.0.1
 * @Author: 董正阳
 * @Date: 2020-01-09 12:06:17
 * @LastEditors: 董正阳
 * @LastEditTime: 2020-03-08 13:33:16
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderList from './pages/orderList'
import OrderConfirm from './pages/orderConfirm'
import OrderPay from './pages/orderPay'
import AliPay from './pages/aliPay'

// 用vue挂载Router实例
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
    redirect: 'index',
    children: [{
      path: 'index',
      name: 'index',
      component: Index
    }, {
      path: 'product/:id',
      name: 'product',
      component: Product
    }, {
      path: 'detail/:id',
      name: 'detail',
      component: Detail
    }]
  }, {
    path: '/cart',
    name: 'cart',
    component: Cart
  }, {
    path: '/order',
    name: 'order',
    component: Order,
    children: [{
      path: 'list',
      name: 'order-list',
      component: OrderList
    }, {
      path: 'confirm',
      name: 'order-confirm',
      component: OrderConfirm
    }, {
      path: 'pay',
      name: 'order-pay',
      component: OrderPay
    }, {
      path: 'alipay',
      name: 'order-aliPay',
      component: AliPay
    }]
  }]
})