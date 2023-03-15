<template>
  <div>
    <TheNavigation />
    <h3>Products</h3>
    <!-- <div v-if="!product">Loading....</div> -->
    <router-link
      :to="{ name: 'ProductView', params: { id: product.id } }"
      v-for="product in data.products"
      :key="product.id"
    >
      <img :src="product.images[0]" :alt="product.title" />
      {{ product.title }}
    </router-link>
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
  width: 50px;
  height: 50px;
}
</style>
