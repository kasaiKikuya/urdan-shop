<template>
  <div id="app" class="main-wrapper main-wrapper-2">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue"

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
</style>
