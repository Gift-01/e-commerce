<template>
  <div class="container">
    <TheNavigation />
    <h3>PRODUCTS</h3>
    <div class="wrapper">
      <router-link
        :to="{ name: 'ProductView', params: { id: product.id } }"
        v-for="product in data.products"
        :key="product.id"
      >
        <img :src="product.images[0]" :alt="product.title" />
        <p class="product-title">
          {{ product.title }}
        </p>
      </router-link>
    </div>
    <!-- <div v-if="!product">Loading....</div> -->
  </div>
</template>
<script>
import TheNavigation from "../components/TheNavigation.vue";
import axios from "axios";

export default {
  components: {
    TheNavigation,
  },
  data() {
    return {
      data: {},
      loading: true,
      errored: false,
    };
  },
  mounted() {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => (this.data = response.data));
  },
};
</script>
<style scoped>
img {
  height: 300px;
}
.container {
  min-height: 100vh;
}

.wrapper {
  display: grid;
  grid-gap: 12px;
  grid-template-columns: auto auto auto;
  margin-bottom: 20px;
}

h3 {
  font-size: 40px;
  line-height: 64px;
  padding: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
}

a {
  text-decoration: none;
  color: black;
  padding: 20px;
  margin: 5px;
  border-radius: 15px;
  margin-left: auto;
  margin-right: auto;
}
.product-title {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .wrapper {
    display: block;
  }
  a {
    padding: 0px;
  }
}
</style>
