<template>
  <v-card
    class="home d-flex flex-column justify-center align-center"
    min-height="300px"
  >
    <v-card-title class=""> Welcome </v-card-title>
    <v-card-subtitle>Press start to go to the trivia</v-card-subtitle>
    <!-- Image -->
    <img src="../assets/brain.png" class="brain-logo" />
    <router-link :to="{ name: 'trivia' }">
      <v-btn color="red lighten-2 ma-3"> Start </v-btn></router-link
    >
  </v-card>
</template>

<script>
export default {
  data: () => ({}),
};
</script>
<style lang="scss">
.home {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px !important;
}
a {
  text-decoration: none;
}
.brain-logo {
  width: 6rem !important;
  height: 6rem !important;
  // border-image-repeat: repeat;
}
</style>
