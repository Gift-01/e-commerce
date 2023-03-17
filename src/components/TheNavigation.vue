<template>
  <div class="header">
    <router-link to="/" class="logo">shopify</router-link>
    <input class="side-menu" type="checkbox" id="side-menu" />
    <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
    <nav class="nav">
      <ul class="menu">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <template v-if="$store.getters.isAuthenticated">
          <li>
            <router-link to="/products"> Products</router-link>
          </li>
          <!-- <span>{{ user.username }}</span> -->
          <li>
            <router-link to="#" @click="logout"> Logout</router-link>
          </li>
        </template>
        <li v-else>
          <router-link to="/login">Login</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { useUser } from "@/composables/user";
export default {
  data: function () {
    return {
      user: useUser(),
    };
  },
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.replace("/login");
    },
  },
};
</script>

<style scoped>
.header {
  background-color: black;
  box-shadow: 1px 1px 5px 0px var(--gray);
  position: sticky;
  top: 0;
  width: 100%;
}

.logo {
  display: inline-block;
  color: white;
  font-size: 50px;
  margin-left: 20px;
  line-height: 60px;
}

.side-menu {
  height: unset;
  width: unset;
}
ul {
  list-style: none;
}
.nav {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: black;
  overflow: hidden;
}

.menu a {
  display: block;
  padding: 30px;
  color: white;
}
.menu a:hover {
  background-color: gray;
}

.nav {
  max-height: 0;
  transition: max-height 0.5s ease-out;
}

.hamb {
  cursor: pointer;
  float: right;
  padding: 40px 20px;
}

.hamb-line {
  background: white;
  display: block;
  height: 2px;
  position: relative;
  width: 24px;
}

.hamb-line::before,
.hamb-line::after {
  background: white;
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  transition: all 0.2s ease-out;
  width: 100%;
}
.hamb-line::before {
  top: 5px;
}
.hamb-line::after {
  top: -5px;
}

.side-menu {
  display: none;
}

.side-menu:checked ~ nav {
  max-height: 100%;
}
.side-menu:checked ~ .hamb .hamb-line {
  background: transparent;
}
.side-menu:checked ~ .hamb .hamb-line::before {
  transform: rotate(-45deg);
  top: 0;
}
.side-menu:checked ~ .hamb .hamb-line::after {
  transform: rotate(45deg);
  top: 0;
}

@media (min-width: 768px) {
  .nav {
    max-height: none;
    top: 0;
    position: relative;
    float: right;
    width: fit-content;
    background-color: transparent;
  }
  .menu li {
    float: left;
  }
  .menu a:hover {
    background-color: transparent;
    color: gray;
  }

  .hamb {
    display: none;
  }
}
</style>
