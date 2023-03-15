<template>
  <div class="main-container">
    <div class="logo">
      <img :src="bg" alt="flower" />
    </div>
    <nav>
      <div class="router">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>

        <template v-if="$store.getters.isAuthenticated">
          <router-link to="/products"> Products</router-link>
          <span>{{ user.username }}</span>
          <router-link to="#" @click="logout"> Logout</router-link>
        </template>
        <router-link v-else to="/login">Login</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import bgImages from "../assets/retro-flowers.webp";
import { useUser } from "@/composables/user";
export default {
  data: function () {
    return {
      bg: bgImages,
      user: useUser(),
    };
  },
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.replace("/login");
    },
  },
};
</script>

<style scoped>
.main-container {
  background-color: black;
  height: 68px;
  width: 100%;
}
nav {
  display: flex;
  justify-content: flex-end;
  color: white;
  /* margin: 35px 99px 0px 0px; */
}

.router a {
  font-weight: bold;
  margin-left: 41px;
  color: white;
  text-decoration: none;
  font-weight: 900;
}

.router a.router-link-exact-active {
  color: #42b983;
  text-decoration: underline;
}

img {
  width: 20px;
  height: 20px;
}
</style>
