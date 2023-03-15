<template>
  <TheNavigation />
  <div class="login-wrapper">
    <form @submit.prevent="submitForm">
      <div>
        <input v-model="username" type="text" placeholder="Username" required />

        <input
          v-model="password"
          type="password"
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </div>
      <div>
        I don't have an account?
        <router-link to="/signup"> Sign up</router-link>
      </div>
    </form>
    <!-- <img :src="bg" alt="flower" /> -->
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
      username: "",
      password: "",
    };
  },
  methods: {
    async submitForm() {
      await this.$store.dispatch("login", {
        username: this.username,
        password: this.password,
      });
      this.$router.push("/products");
    },
  },
};
</script>

<style>
.login-wrapper {
  height: 100vh;
  display: flex;
  row-gap: 20px;
  justify-content: center;
  align-items: center;
}
form {
  padding: 10px;
  margin: 10px;
}

img {
  width: 100%;
  min-height: 100%;
}
input {
  width: 100%;
  height: 75px;
  border-radius: 80px;
  margin-bottom: 25px;
  outline: none;
  background-color: rgb(187, 184, 184);
  border: none;
}

input::placeholder {
  padding-left: 15px;
  color: black;
}

button {
  width: 100%;
  height: 70px;
  border-radius: 90px;
  outline: none;
  border: none;
  margin-bottom: 25px;
  font-size: 24px;
  font-weight: 700;
}
</style>
