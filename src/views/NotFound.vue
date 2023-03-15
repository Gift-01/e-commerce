<template>
  <div>
    <div class="error-wrapper">
      <img :src="emoji" alt="sad face" />
      <h1>404</h1>
      <h3>Page Not Found</h3>
      <p>
        The page you are looking for does not exit or an other error occured
      </p>
      <router-link to="/">
        <button>Go back to the Home Page</button></router-link
      >
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import emoji from "../assets/sad404.svg";
export default {
  data: function () {
    return {
      emoji: emoji,
    };
  },
};
</script>

<style scoped>
.error-wrapper {
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  /* margin-top: 20px; */
  width: 80px;
  height: 80px;
  min-height: unset;
}

h1 {
  font-size: 40px;
}

h3 {
  font-size: 30px;
}

p {
  font-size: 18px;
}

button {
  font-size: 12px;
}
</style>
