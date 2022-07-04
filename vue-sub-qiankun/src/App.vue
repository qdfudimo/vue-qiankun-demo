<template>
  <div id="nav">
    <router-link :to="microPath + '/'">Home</router-link> |
    <router-link :to="microPath + '/about'">About</router-link>
  </div>
  <router-view />
</template>
<script setup>
let microPath = "";
if (window.__POWERED_BY_QIANKUN__) {
  microPath = "/child";
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
