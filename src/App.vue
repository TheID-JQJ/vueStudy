<template>
  <div id="app">
    <tab-bar-main></tab-bar-main>
  </div>
</template>

<script>
import TabBarMain from "@/components/tabBarMain/TabBarMain";
export default {
  name: "App",
  components: {
    TabBarMain,
  },
};
</script>

<style>
@import url("~@/assets/css/base.css");
</style>
