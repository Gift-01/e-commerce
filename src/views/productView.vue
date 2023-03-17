<template>
  <div>
    <TheNavigation />
    <h3>Product Details</h3>
    <div class="container">
      <div v-if="!product">Loading....</div>
      <div v-else class="productContainer">
        <img :src="product.thumbnail" :alt="product.title" class="images" />
        <p class="sub-title">Product Name: {{ product.title }}</p>
        <p class="sub-title">
          Product Price:
          {{ product.price }}
        </p>
        <p class="sub-title">
          product Brand:
          {{ product.brand }}
        </p>
      </div>
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
.container {
  background-color: #e5e5e5;
  height: 100vh;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.productContainer {
  background-color: white;
  height: 85vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 45px;
}

.sub-title {
  font-size: 20px;
}
.images {
  width: 100%;
  /* height: 50%; */
  min-height: 100%;
  padding: 30px;
  border-radius: 50%;
}
h3 {
  font-size: 55px;
  line-height: 64px;
  padding: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
}
@media screen and (max-width: 480px) {
  .productContainer {
    height: 36vh;
    width: 100%;
    padding: 60px;
  }
}
@media screen and (max-width: 768px) {
  .productContainer {
    height: 60vh;
    width: 100%;
    padding: 40px;
  }
}

@media screen and (max-width: 1000px) {
  .productContainer {
    height: 40vh;
    width: 70%;
    padding: 40px;
  }
}
</style>
