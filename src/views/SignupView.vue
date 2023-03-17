<template>
  <div>
    <TheNavigation />
    <router-view></router-view>

    <div class="login-wrapper">
      <form @submit.prevent="submitForm">
        <div>
          <input
            v-model="username"
            type="text"
            placeholder="Username"
            required
          />

          <input
            v-model="password"
            type="password"
            placeholder="Password"
            required
          />
          <input v-model="email" type="email" placeholder="@ email" required />
          <button type="submit">Sign up</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import TheNavigation from "../components/TheNavigation.vue";

export default {
  components: {
    TheNavigation,
  },
  data: function () {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async submitForm() {
      await this.$store.dispatch("signup", {
        username: this.username,
        email: this.email,
        password: this.password,
      });
      await this.$store.dispatch("login", {
        username: this.username,
        password: this.password,
      });
      this.$router.push("/products");
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
  min-height: 100%;
}
</style>
