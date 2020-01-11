<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
 // import Home from '../src/components/Home/index.vue'
  export default {
    name: 'app',
    // components: {
    //   'home' : Home
    // }
  }
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>