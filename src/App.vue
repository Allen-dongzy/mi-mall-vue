<!--
 * @version: 0.0.1
 * @Author: 董正阳
 * @Date: 2019-12-30 13:36:39
 * @LastEditors  : 董正阳
 * @LastEditTime : 2020-01-20 14:31:22
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
    this.axios.get('/mock/user/login.json').then(res => {
      this.res = res
    })
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>