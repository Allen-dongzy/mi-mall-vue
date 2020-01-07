<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue"
import jsonp from "jsonp"

export default {
  name: "app",
  data() {
    return {
      content: ""
    };
  },
  components: {
    HelloWorld
  },
  mounted() {
    let url = "http://jsonplaceholder.typicode.com/users";
    jsonp(url, (err, ret) => {
      this.content = ret
    });
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