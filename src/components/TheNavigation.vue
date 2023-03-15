<template>
  <div class="main-container">
    <div class="logo">
      <img :src="bg" alt="flower" />
    </div>
    <nav>
      <div class="router">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/Login">Login</router-link>
        <router-link to="/Product"> Product</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import bgImages from "../assets/retro-flowers.webp";
export default {
  data: function () {
    return {
      bg: bgImages,
    };
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
