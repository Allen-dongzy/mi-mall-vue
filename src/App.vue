<!--
 * @version: 0.0.1
 * @Author: 董正阳
 * @Date: 2019-12-30 13:36:39
 * @LastEditors: 董正阳
 * @LastEditTime: 2020-03-27 00:13:28
 * @Description: 
 -->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "app",
  data() {
    return {
      res: {}
    };
  },
  components: {
    
  },
  mounted() {
    
  }
};
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import "./assets/scss/button.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>