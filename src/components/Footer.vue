<template>
  <v-container dark padless class="footer ma-0 blue-grey darken-4">
    <p class="white--text">
      {{ new Date().getFullYear() }} — <strong>Trivia App</strong>
    </p>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  position: fixed !important;
  left: 0 !important;
  bottom: 0rem !important;
  width: 100% !important;
  color: red;
  text-align: center !important;
  height: 2.5rem !important;
}
</style>
