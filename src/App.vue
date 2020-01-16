<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from './storage/index'

export default {
  name: "app",
  data() {
    return {

    };
  },
  components: {
    
  },
  mounted() {
    // storage.setItem('user', {a:1})
    // storage.setItem('info', {b:2,c:3}, 'user')
    storage.clear('user')
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