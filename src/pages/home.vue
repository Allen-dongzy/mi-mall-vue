<!--
 * @version: 0.0.1
 * @Author: 董正阳
 * @Date: 2020-01-09 12:11:50
 * @LastEditors: 董正阳
 * @LastEditTime: 2020-02-18 14:04:09
 * @Description: 
 -->
<template>
  <div>
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from "../components/NavHeader";
import NavFooter from "../components/NavFooter";

export default {
  name: "nav-home",
  components: {
    NavHeader,
    NavFooter
  }
};
</script>

<style>
</style>