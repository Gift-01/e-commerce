<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable prettier/prettier -->
<template>
  <div>
    <TheNavigation />
    <router-view></router-view>

    <div class="login-wrapper">
      <form @submit.prevent="submitForm">
        <div>
          <Input v-model="Username" type="text" placeholder="Username">
            <font-awesome-icon icon="fa-solid fa-user" />
          </Input>

          <Input v-model="password" type="password" placeholder="password" />
          <Input v-model="email" type="email" placeholder="@ email" />
          <button>Sign upg</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import TheNavigation from "../components/TheNavigation.vue";
import bgImages from "../assets/retro-flowers.webp";
export default {
  components: {
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
