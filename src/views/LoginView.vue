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
      <div class="router">
        I don't have an account?
        <router-link to="/signup"> Sign up</router-link>
      </div>
    </form>
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
  margin: 0px 176px;
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
  padding-left: 20px;
  outline: none;
  background-color: rgb(187, 184, 184);
  border: none;
}

input::placeholder {
  padding-left: 15px;
  color: black;
}

.router {
  margin-left: 65px;
}

a {
  color: red;
  text-decoration: none;
  font-weight: bolder;
}
a:hover {
  color: rgb(190, 81, 81);
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
  cursor: pointer;
}
</style>
