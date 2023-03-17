<template>
  <div class="home">
    <TheNavigation />
    <div class="container">
      <div class="container-one">
        <h1 class="title">Every purchase will be <br />made with pleasure!</h1>
        <p>
          We work with global brands to bring the best <br />
          for you to do your shopping
        </p>
      </div>
      <div class="container-two">
        <img :src="homePage" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";
import bgImages from "../assets/retro-flowers.webp";
import homePage from "../assets/happy-family-couple-with-shopping-man-woman-with-bags-big-sale-illustration_165429-519.avif";

export default {
  components: {
    TheNavigation,
  },
  data: function () {
    return {
      bg: bgImages,
      homePage: homePage,
    };
  },
};
</script>

<style scoped>
img {
  width: 100%;
  min-height: 100%;
}
.container {
  display: flex;
  margin: 20px;
}
.container-one {
  flex-basis: 50%;
  margin: 64px 120px;
}

.container p {
  font-size: 20px;
  margin-bottom: 40px;
}

.title {
  font-size: 50px;
  font-weight: 700;
}

.container-two {
  flex-basis: 50%;
}

@media screen and (max-width: 768px) {
  .container {
    display: block;
    margin: 5px;
  }

  .container-one {
    margin: 44px 20px;
  }
  .container p {
    display: none;
  }

  .title {
    font-size: 20px;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    display: flex;
  }
  img {
    margin-top: 100px;
  }
}
</style>
