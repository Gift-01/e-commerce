<template>
  <div>
    <TheNavigation />
    <h3>Products</h3>
    <div v-if="!product">Loading....</div>

    <div v-for="product in products.products" :key="product.category">
      <img :src="product.images[0]" alt="" />

      {{ product.title }}
      {{ product.price }}
      {{ product.category }}
      {{ product.brand }}
      {{ product.description }}
    </div>
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
      products: [],
      loading: true,
      errored: false,
    };
  },
  mounted() {
    axios
      .get("https://dummyjson.com/products")
      // .then((res) => res.json());
      .then((response) => (this.products = response.data));
  },
};
</script>
<style scoped>
img {
  width: 50px;
  height: 50px;
}
</style>
