<template>
  <div class="home">
    <TheNavigation />

    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import TheNavigation from "@/components/TheNavigation.vue";
import bgImages from "../assets/retro-flowers.webp";

export default {
  components: {
    HelloWorld,
    TheNavigation,
  },
  data: function () {
    return {
      bg: bgImages,
    };
  },
};
</script>

<style scoped>
img {
  width: 100%;
  min-height: 100%;
}
</style>
