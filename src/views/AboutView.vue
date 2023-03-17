<template>
  <div class="about">
    <h1>This is an about page</h1>
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
