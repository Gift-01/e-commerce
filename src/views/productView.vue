<template>
  <div>
    <TheNavigation />
    <h3>Product Details</h3>
    <div v-if="!product">Loading....</div>
    <div v-else>
      <img :src="product.thumbnail" :alt="product.title" />
      title: {{ product.title }}
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
      product: null,
      loading: true,
      errored: false,
    };
  },
  // beforeRouteEnter(to, from, next) {
  //   next((vm) => {
  //     if (!vm.$store.getters.isAuthenticated) {
  //       return vm.$router.push("/login");
  //     }
  //   });
  // },

  mounted() {
    axios
      .get(`https://dummyjson.com/products/${this.$route.params.id}`)
      .then((response) => (this.product = response.data));
  },
};
</script>
<style scoped>
img {
  width: 50px;
  height: 50px;
}
</style>
