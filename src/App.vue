<template>
  <v-app class="app">
    <!-- <v-container class="ma-0 pa-0"> -->
    <NavBar />
    <router-view />
    <Footer />
    <!-- </v-container> -->
  </v-app>
</template>

<script>
import Footer from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    Footer,
    NavBar,
  },
  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
.app {
  font-size: 100%;
  background: linear-gradient(
    90deg,
    rgba(253, 45, 162, 1) 0%,
    rgba(255, 23, 18, 1) 100%
  ) !important;
}
.container {
  min-width: 100% !important;
}
</style>
