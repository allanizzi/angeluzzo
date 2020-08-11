<template>
  <div id="app">
      <sidebar/>
      <!-- router-view se basera par rapport aux chemins indiqué dans main js grâce à vue router -->
      <router-view></router-view>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";

  export default {
    name: 'App',

    components: {
      Sidebar
    },
  }
</script>

<style scoped>

</style>
