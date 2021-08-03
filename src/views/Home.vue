<template>
  <v-container class="home">
    <Home />
  </v-container>
</template>

<script>
import Home from "../components/Home";

export default {
  components: {
    Home,
  },
};
</script>
<style lang="scss" scoped>
html {
  font-size: 100% !important;
}

body {
  font-size: 1rem;
  margin: 0;
  font-family: "Poppins", sans-serif;
}

p {
  font-size: 1.25rem;
  line-height: 2;
}
</style>
