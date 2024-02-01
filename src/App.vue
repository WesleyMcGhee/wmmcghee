<script setup lang="ts">
  import { ref, computed } from "vue";
  import MainPage from "./pages/Main-Page.vue";
  import BlogPage from "./pages/Blog-Page.vue";
  import NotFound from "./pages/Not-Found.vue";
  import HeaderCom from "./components/Header-Com.vue";
  import FooterCon from "./components/Footer-con.vue";

  const routes: any = {
    "/": MainPage,
    "/blog": BlogPage,
  }

  const currentPath = ref(window.location.hash)

  window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash;
  })

  const currentView: any = computed(() => {
    return routes[currentPath.value.slice(1) || "/"] || NotFound
  })
</script>

<template>
  <HeaderCom /> 
  <component class="page" :is="currentView" />
  <FooterCon />
</template>

<style scoped>
  .page {
    min-height: 73vh;
  }
</style>
